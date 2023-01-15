package mypack.service;

import java.net.URL;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.apache.commons.io.IOUtils;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import mypack.controller.exception.CommonRuntimeException;
import mypack.dto.CVSubmitDTO;
import mypack.dto.PostDTO;
import mypack.model.CVSubmit;
import mypack.model.Post;
import mypack.model.Profile;
import mypack.model.pk.CVSubmitPK;
import mypack.model.pk.ProfilePK;
import mypack.payload.BaseResponse;
import mypack.payload.ListResponse;
import mypack.payload.ListWithPagingResponse;
import mypack.repository.CVSubmitRepository;
import mypack.repository.PostRepository;
import mypack.repository.ProfileRepository;
import mypack.repository.UserRepository;
import mypack.service.CVSubmitService;
import mypack.utility.datatype.EStatus;

import me.xdrop.fuzzywuzzy.FuzzySearch;

@Service
public class CVSubmitService {

	@Autowired
	CVSubmitRepository cvSubmitRepository;

	@Autowired
	ProfileRepository profileRepository;

	@Autowired
	UserRepository userRepository;

	@Autowired
	PostRepository postRepository;

	@Autowired
	NotificationService notificationService;

	@Autowired
	ModelMapper modelMapper;

	@Value("${email.content.employer-notification-submitedCV}")
	private String content;

	@Autowired
	SendEmailService sendEmailService;

	public ListWithPagingResponse<CVSubmitDTO> getListCV(Long employerId, Long postId, Integer page, Integer limit) {

		Optional<Post> optPost = postRepository.findById(postId);
		if (optPost.isEmpty())
			throw new CommonRuntimeException("Post not found with id: " + postId);
		Post post = optPost.get();
		if (post.getAuthor().getId() != employerId)
			throw new CommonRuntimeException("You do not have right to get this resource !");
		if (page == null || page <= 0)
			page = 1;
		if (limit == null || limit <= 0)
			limit = 6;

		List<CVSubmit> lstCV = cvSubmitRepository.findByPost(postId, (page - 1) * limit, limit);

		if (lstCV.isEmpty())
			throw new CommonRuntimeException("No cv is submitted to this post !.");

		Integer count = cvSubmitRepository.countByPost(postId).intValue();
		Integer totalPage;
		if (count % limit != 0)
			totalPage = count / limit + 1;
		else
			totalPage = count / limit;
		return new ListWithPagingResponse<>(page, totalPage, limit,
				lstCV.stream().map(cv -> modelMapper.map(cv, CVSubmitDTO.class)).toList());
	}

	public ListResponse<PostDTO> getSubmittedPostForCV(Long userId, Long mediaId) {
		List<Long> lstPost = cvSubmitRepository.findListPostSubmitted(userId, mediaId);
		if (lstPost.isEmpty())
			throw new CommonRuntimeException("Your cv is not submitted to any post !");
		List<PostDTO> posts = postRepository.findAllById(lstPost).stream().map(p -> modelMapper.map(p, PostDTO.class))
				.toList();
		if (posts.isEmpty())
			throw new CommonRuntimeException("Your cv is not submitted to any post !");
		return new ListResponse<>(posts);
	}

	public BaseResponse submitCV(Long userId, Long postId, Long mediaId) {
		// Check if user submitted
		Optional<CVSubmit> optCVSubmit = cvSubmitRepository.findByUserAndPost(userId, postId);
		if (optCVSubmit.isPresent())
			throw new CommonRuntimeException(
					"You submitted your cv to this post. If you want to change your cv please delete and then submit again. !");

		Post post = postRepository.findById(postId)
				.orElseThrow(() -> new CommonRuntimeException("Post not found with Id: " + postId));
		EStatus status = post.getStatus();
		Date today = new Date();
		if (status != EStatus.ACTIVE || post.getExpirationDate().before(today))
			throw new CommonRuntimeException("Post is not available to submit cv !");

		Profile profile = profileRepository.getReferenceById(new ProfilePK(userId, mediaId));

		CVSubmitPK pk = new CVSubmitPK(postId, userId, mediaId);

		CVSubmit cvSubmit = new CVSubmit();

		cvSubmit.setId(pk);
		cvSubmit.setDate(new Date());
		cvSubmit.setPost(post);
		cvSubmit.setProfile(profile);
		String url = profile.getMediaResource().getUrl();
		if (!url.endsWith(".pdf"))
			throw new CommonRuntimeException("CV is invalid ! Accept pdf only.");
		try {
			byte[] fileContent = IOUtils.toByteArray(new URL(url));

			PDDocument document = PDDocument.load(fileContent);

			// Instantiate PDFTextStripper class
			PDFTextStripper pdfStripper = new PDFTextStripper();
			// Retrieving text from PDF document
			String text = pdfStripper.getText(document);

			// Closing the document
			document.close();

			text = cleanResume(text);
			String des = cleanResume(post.getDescription());
			// Calculate the match %
			cvSubmit.setMatchPercent((long) FuzzySearch.tokenSetRatio(des, text));

			cvSubmitRepository.save(cvSubmit);
			// add notification for employer
			notificationService.addNotification(post.getAuthor().getId(),
					"1 User has Submitted their CV to your post !", post);
			if (post.getAuthor().getEmailConfirm())
				sendEmailService.sendMailForNotification(new String[] { post.getAuthor().getEmail() },
						String.format(content, post.getTitle()));
		} catch (Exception e) {
			return new BaseResponse(true, "Can not read the cv please upload other cv !");
		}

		// Add notification and email for employer
		return new BaseResponse(true, "Submit CV successfully !");

	}

	public BaseResponse deleteSubmittedCV(Long userId, Long postId, Long mediaId) {
		Optional<CVSubmit> optCVSubmit = cvSubmitRepository.findById(new CVSubmitPK(postId, userId, mediaId));
		if (optCVSubmit.isEmpty())
			throw new CommonRuntimeException("CV not found. Please check again !");

		cvSubmitRepository.delete(optCVSubmit.get());

		return new BaseResponse(true, "Delete submited CV successfully !");
	}

	public String cleanResume(String resume) {
		resume = resume.replaceAll("http\\S+\\s*", "");

		resume = resume.replaceAll("\\s+", " ");
		resume = resume.replaceAll("\"[^\\\\x00-\\\\x7f]\"", " ");
		resume = resume.replaceAll("@\\S+", " ");
		resume = resume.replaceAll("#\\S+", " ");
		resume = resume.replaceAll("RT|cc", " ");

		return resume;
	}

}
