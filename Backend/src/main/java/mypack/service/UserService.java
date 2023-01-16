package mypack.service;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;
import javax.validation.Valid;

import org.apache.commons.lang3.StringUtils;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import mypack.controller.exception.CommonRuntimeException;
import mypack.dto.JwtResponse;
import mypack.dto.LoginRequest;
import mypack.dto.ProfileDTO;
import mypack.dto.UserDTO;
import mypack.model.City;
import mypack.model.Industry;
import mypack.model.MediaResource;
import mypack.model.Profile;
import mypack.model.User;
import mypack.model.ViewPage;
import mypack.model.pk.ProfilePK;
import mypack.payload.BaseResponse;
import mypack.payload.DataResponse;
import mypack.payload.JobseekerCV.CVUploadRequest;
import mypack.payload.auth.EmployerProfileUpdateRequest;
import mypack.payload.auth.EmployerRegisterRequest;
import mypack.payload.auth.JobseekerProfileUpdateRequest;
import mypack.payload.auth.JobseekerRegisterRequest;
import mypack.payload.auth.PasswordUpdateRequest;
import mypack.payload.auth.ResetPasswordRequest;
import mypack.repository.CVSubmitRepository;
import mypack.repository.CVViewedRepository;
import mypack.repository.CityRepository;
import mypack.repository.FollowUserRepository;
import mypack.repository.IndustryRepository;
import mypack.repository.ProfileRepository;
import mypack.repository.UserRepository;
import mypack.repository.ViewPageRepository;
import mypack.utility.datatype.ERole;
import mypack.utility.jwt.JwtUtils;

@Service
public class UserService {

	@Autowired
	UserRepository userRepo;

	@Autowired
	CityRepository cityRepo;

	@Autowired
	IndustryRepository industryRepo;

	@Autowired
	MediaResourceService mediaResourceService;

	@Autowired
	ProfileRepository profileRepository;

	@Autowired
	CVSubmitRepository cvSubmitRepository;

	@Autowired
	AuthenticationManager authenticationManager;

	@Autowired
	CVViewedRepository cvViewedRepository;

	@Autowired
	ViewPageRepository viewPageRepository;

	@Autowired
	FollowUserRepository followUserRepository;

	@Autowired
	ModelMapper mapper;

	@Autowired
	JwtUtils jwtUtils;

	@Autowired
	PasswordEncoder passwordEncoder;

	@Autowired
	NotificationService notificationService;

	public BaseResponse jobseekerRegister(JobseekerRegisterRequest request) {
		try {
			if (userRepo.existsByEmail(request.getEmail()))
				throw new CommonRuntimeException("Email is already exists !");
			User user = mapper.map(request, User.class);
			user.setPassword(passwordEncoder.encode(request.getPassword()));
			user.setActive(true);
			user.setEmailConfirm(false);
			user.setRole(ERole.ROLE_USER);
			user.setCreateDate(new Date());
			userRepo.save(user);

			return new BaseResponse(true, "Registered successfully !");
		} catch (Exception ex) {
			return new BaseResponse(false, ex.getMessage());
		}
	}

	public BaseResponse employerRegister(EmployerRegisterRequest request) {
		try {
			if (userRepo.existsByEmail(request.getEmail()))
				throw new CommonRuntimeException("Email is already exists !");
			if (userRepo.existsByPhone(request.getPhone()))
				throw new CommonRuntimeException("Phone number is already exists !");
			User user = mapper.map(request, User.class);
			user.setPassword(passwordEncoder.encode(request.getPassword()));
			user.setActive(true);
			user.setEmailConfirm(false);
			user.setRole(ERole.ROLE_EMPLOYER);
			City city = cityRepo.getReferenceById(request.getCity());
			Industry industry = industryRepo.getReferenceById(request.getIndustry());
			user.setCity(city);
			user.setIndustry(industry);
			user.setCreateDate(new Date());

			userRepo.save(user);

			return new BaseResponse(true, "Registered successfully !");
		} catch (Exception ex) {
			return new BaseResponse(false, ex.getMessage());
		}
	}

	public JwtResponse<UserDTO> login(LoginRequest request) {
		Authentication authentication = authenticationManager
				.authenticate(new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));
		String token = jwtUtils.generateJwtToken(authentication);
		String refreshToken = jwtUtils.generateJwtRefreshToken(authentication);
		return new JwtResponse<>(token, refreshToken, null);
	}

	// Update profile
	@Transactional
	public DataResponse<UserDTO> jobseekerUpdate(JobseekerProfileUpdateRequest request, MultipartFile avatar,
			Long jobseekerId) {
		User user = userRepo.findById(jobseekerId).get();

		if (!user.getEmail().equals(request.getEmail())) {
			if (userRepo.existsByEmail(request.getEmail()))
				throw new CommonRuntimeException("Email is already exists !");
			user.setEmail(request.getEmail());
			user.setEmailConfirm(false);
		}
		if (!StringUtils.isBlank(request.getPhone()) && !request.getPhone().equals(user.getPhone()))
			if (userRepo.existsByPhone(request.getPhone()))
				throw new CommonRuntimeException("Phone number is already exists !");
			else
				user.setPhone(request.getPhone());
		City city = cityRepo.getReferenceById(request.getCityId());
		Industry ind = industryRepo.getReferenceById(request.getIndustryId());
		user.setCity(city);
		user.setIndustry(ind);
		user.setAddress(request.getAddress());
		user.setName(request.getName());

		if (avatar != null) {
			// Delete old image
			if (user.getAvatar() != null) {
				userRepo.updateBeforeDeleteImage(jobseekerId);
				if (!mediaResourceService.delete(user.getAvatar().getId()))
					throw new CommonRuntimeException("Error occur when deleting old image !");
			}
			// Up load new Image
			try {
				MediaResource img = mediaResourceService.save(avatar.getBytes());
				user.setAvatar(img);
			} catch (IOException e) {
				throw new CommonRuntimeException("Error occur when uploading new image !");
			}
		}

		user = userRepo.save(user);

		return new DataResponse<>(true, "Update information successfully.", mapper.map(user, UserDTO.class));

	}

	@Transactional
	public DataResponse<UserDTO> employerUpdate(EmployerProfileUpdateRequest request, MultipartFile avatar,
			Long employerId) {
		User user = userRepo.findById(employerId).get();

		if (!user.getEmail().equals(request.getEmail())) {
			userRepo.updateBeforeDeleteImage(employerId);
			if (userRepo.existsByEmail(request.getEmail()))
				throw new CommonRuntimeException("Email is already exists !");
			user.setEmail(request.getEmail());
			user.setEmailConfirm(false);
		}
		if (!StringUtils.isBlank(request.getPhone()) && !request.getPhone().equals(user.getPhone()))
			if (userRepo.existsByPhone(request.getPhone()))
				throw new CommonRuntimeException("Phone number is already exists !");
			else
				user.setPhone(request.getPhone());
		user.setDescription(request.getDescription());
		user.setAddress(request.getAddress());
		user.setName(request.getName());
		City city = cityRepo.getReferenceById(request.getCityId());
		Industry ind = industryRepo.getReferenceById(request.getIndustryId());
		user.setCity(city);
		user.setIndustry(ind);
		if (avatar != null) {
			// Delete old image
			if (user.getAvatar() != null) {
				if (!mediaResourceService.delete(user.getAvatar().getId()))
					throw new CommonRuntimeException("Error occur when deleting old image !");
			}
			// Up load new Image
			try {
				MediaResource img = mediaResourceService.save(avatar.getBytes());
				user.setAvatar(img);
			} catch (IOException e) {
				throw new CommonRuntimeException("Error occur when uploading new image !");
			}
		}

		user = userRepo.save(user);

		return new DataResponse<>(true, "Update information successfully.", mapper.map(user, UserDTO.class));

	}

	public UserDTO getUserProfile(String email) {
		Optional<User> optUser = userRepo.findByEmailAndRole(email, ERole.ROLE_USER);
		if (optUser.isEmpty())
			throw new CommonRuntimeException("User not found with Email: " + email);

		return mapper.map(optUser.get(), UserDTO.class);
	}

	// Get employer page
	public UserDTO getEmployerById(Long id, UserDetailsCustom userCustom) {
		Optional<User> optEmployer = userRepo.findById(id);
		if (optEmployer.isEmpty() || optEmployer.get().getRole() != ERole.ROLE_EMPLOYER)
			throw new CommonRuntimeException("Employer not found with Id: " + id);
		UserDTO emp = mapper.map(optEmployer.get(), UserDTO.class);

		// add to view page
		if (userCustom != null) {
			Optional<User> user = userRepo.findByEmailAndRole(userCustom.getEmail(), ERole.ROLE_USER);
			if (user.isPresent()) {
				ViewPage vp = new ViewPage(null, optEmployer.get(), user.get(), new Date());
				viewPageRepository.save(vp);
			}
		}
		return emp;
	}

	public UserDTO getEmployerProfile(String email) {
		Optional<User> optEmployer = userRepo.findByEmailAndRole(email, ERole.ROLE_EMPLOYER);
		if (optEmployer.isEmpty())
			throw new CommonRuntimeException("Employer not found with Email: " + email);

		return mapper.map(optEmployer.get(), UserDTO.class);
	}

	public BaseResponse changePassword(String email, @Valid PasswordUpdateRequest request) {
		Optional<User> optUser = userRepo.findByEmail(email);
		if (optUser.isEmpty())
			throw new CommonRuntimeException("User not found with Email: " + email);
		User user = optUser.get();

		if (passwordEncoder.matches(request.getOldPassword(), user.getPassword())) {
			user.setPassword(passwordEncoder.encode(request.getNewPassword()));
			userRepo.save(user);
			notificationService.addNotification(user.getId(), "You have changed your password !",
					null);
			return new BaseResponse(true, "Change password successfully !");
		}
		return new BaseResponse(false, "Old password is not valid !");
	}

	// Job seeker cv
	public DataResponse<ProfileDTO> uploadCV(String email, MultipartFile cv, CVUploadRequest request) {
		Optional<User> optUser = userRepo.findByEmail(email);
		if (optUser.isEmpty())
			throw new CommonRuntimeException("User not found with Email: " + email);
		User user = optUser.get();

		MediaResource mr = null;
		try {
			mr = mediaResourceService.save(cv.getBytes());

			ProfilePK pk = new ProfilePK(user.getId(), mr.getId());
			Profile profile = new Profile();

			profile.setId(pk);
			profile.setMediaResource(mr);
			profile.setUser(user);
			profile.setIsPublic(request.getIsPublic());
			profile.setName(request.getName());
			profile.setExperience(request.getExperience());
			profile.setMethod(request.getMethod());
			profile.setPosition(request.getPosition());
			profile.setLastModified(new Date());

			return new DataResponse<>(true, "Upload success !",
					mapper.map(profileRepository.save(profile), ProfileDTO.class));
		} catch (Exception e) {
			if (mr != null)
				mediaResourceService.delete(mr.getId());
			throw new CommonRuntimeException("Error when upload cv !");
		}

	}

	public DataResponse<ProfileDTO> updateCV(String email, Long mediaId, CVUploadRequest request) {
		Optional<User> optUser = userRepo.findByEmail(email);
		if (optUser.isEmpty())
			throw new CommonRuntimeException("User not found with Email: " + email);
		User user = optUser.get();

		Optional<Profile> optProfile = profileRepository.findById(new ProfilePK(user.getId(), mediaId));
		if (!optProfile.isPresent())
			throw new CommonRuntimeException("CV not found !");
		Profile profile = optProfile.get();

		profile.setIsPublic(request.getIsPublic());
		profile.setName(request.getName());
		profile.setExperience(request.getExperience());
		profile.setMethod(request.getMethod());
		profile.setPosition(request.getPosition());
		profile.setLastModified(new Date());

		return new DataResponse<>(true, "Update success !",
				mapper.map(profileRepository.save(profile), ProfileDTO.class));
	}

	public List<ProfileDTO> getListCV(Long userId) {
		return profileRepository.findByUserId(userId).stream().map(p -> mapper.map(p, ProfileDTO.class)).toList();
	}

	public ProfileDTO getCVDetail(Long userId, Long mediaId) {

		Optional<Profile> optProfile = profileRepository.findById(new ProfilePK(userId, mediaId));
		if (optProfile.isEmpty())
			throw new CommonRuntimeException("Profile not found with id:" + mediaId);

		return mapper.map(optProfile.get(), ProfileDTO.class);
	}

	@Transactional
	public BaseResponse deleteCV(Long userId, Long mediaId) {
		ProfilePK profilePK = new ProfilePK(userId, mediaId);
		Optional<Profile> profile = profileRepository.findById(profilePK);
		if (profile.isEmpty())
			throw new CommonRuntimeException("Profile not found with id:" + mediaId);
		// Delete in cv submit

		cvSubmitRepository.deleteByProfile(userId, mediaId);
		cvViewedRepository.deleteBeforeDeleteProfile(userId);
		profileRepository.delete(profile.get());
		mediaResourceService.delete(mediaId);

		return new BaseResponse(true, "Delete cv successfully !");
	}

	public List<UserDTO> getListCompany() {
		return userRepo.getListCompany().stream().map(x -> mapper.map(x, UserDTO.class)).toList();
	}

	public BaseResponse emailConfirm(String email, String code) {
		Optional<User> opt = userRepo.findByEmail(email);
		if (opt.isEmpty())
			return new BaseResponse(false, "User not found !");
		User user = opt.get();
		String userCode = user.getCode();
		if (!userCode.equals(code))
			return new BaseResponse(false, "Code is not valid !");
		user.setEmailConfirm(true);
		user.setCode("");
		userRepo.save(user);
		// add Notification
		notificationService.addNotification(user.getId(), "You have confirmed your email address.", null);
		return new BaseResponse(true, "Email confirm successfully !");
	}

	public BaseResponse changePasswordWithResetCode(@Valid ResetPasswordRequest request) {
		Optional<User> opt = userRepo.findByEmail(request.getEmail());
		if (opt.isEmpty())
			return new BaseResponse(false, "User not found !");
		User user = opt.get();
		String userCode = user.getCode();
		if (!userCode.equals(request.getCode()))
			return new BaseResponse(false, "Code is not valid !");

		user.setPassword(passwordEncoder.encode(request.getNewPassword()));
		user.setCode("");
		user = userRepo.save(user);
		// add Notification
		notificationService.addNotification(user.getId(), "You have changed your password through Reset password.",
				null);
		return new BaseResponse(true, "Change password successfully !");

	}

	public BaseResponse accountManage(Long userId, Boolean status) {
		Optional<User> user = userRepo.findById(userId);
		if (user.isEmpty())
			throw new CommonRuntimeException("User not found !");
		User us = user.get();
		us.setActive(status);
		userRepo.save(us);
		return new BaseResponse(true, "Success !");
	}

}