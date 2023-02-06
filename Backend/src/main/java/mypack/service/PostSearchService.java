package mypack.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import mypack.dto.PostDTO;
import mypack.payload.ListWithPagingResponse;
import mypack.repository.PostRepository;
import mypack.repository.ServiceRepository;
import mypack.utility.Page;
import mypack.utility.datatype.ECurrency;
import mypack.utility.datatype.EExperience;
import mypack.utility.datatype.EGender;
import mypack.utility.datatype.EMethod;
import mypack.utility.datatype.EPosition;
import mypack.utility.datatype.EServiceType;
import mypack.utility.datatype.EStatus;

@Service
public class PostSearchService {
	@Autowired
	PostRepository postRepository;

	@Autowired
	ServiceRepository serviceRepo;

	@Autowired
	ModelMapper modelMapper;

	public Long getCountBeforSearch(String keyword, Long recruit, Long salary, EMethod method, EPosition position,
			EExperience experience, EGender gender, ECurrency currency, Long authorId, Long industryId, Long cityId,
			EStatus status, Date expirationDate, Date startDate, Long serviceId) {
		return postRepository.postCountBeforeSearch(keyword, recruit, salary, method, position, experience, gender,
				currency, authorId, industryId, cityId, status, expirationDate, startDate, serviceId);
	}

	public ListWithPagingResponse<PostDTO> search(String keyword, Long recruit, Long salary, EMethod method,
			EPosition position, EExperience experience, EGender gender, ECurrency currency, Long authorId,
			Long industryId, Long cityId, EStatus status, Date expirationDate, Date startDate, Long serviceId,
			Page page) {

		return new ListWithPagingResponse<>(page.getPageNumber() + 1, page.getTotalPage(), page.getPageSize(),
				postRepository
						.postSearch(keyword, recruit, salary, method, position, experience, gender, currency, authorId,
								industryId, cityId, status, expirationDate, startDate, serviceId, page)
						.stream().map(p -> modelMapper.map(p, PostDTO.class)).toList());
	}

	public ListWithPagingResponse<PostDTO> getHotJob(int page, int limit) {
		// Get premium service
		List<mypack.model.Service> lstService = serviceRepo.findByType(EServiceType.PREMIUM);
		List<Long> lst = new ArrayList<>();
		for (mypack.model.Service sv : lstService) {
			lst.add(sv.getId());
		}
		return new ListWithPagingResponse<>(page, 1, limit,
				postRepository.getJobByArrService(lst, new Date(), PageRequest.of(page - 1, limit)).stream()
						.map(p -> modelMapper.map(p, PostDTO.class)).toList());

	}
}
