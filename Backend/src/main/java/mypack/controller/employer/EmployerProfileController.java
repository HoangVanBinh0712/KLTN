package mypack.controller.employer;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import mypack.payload.auth.EmployerProfileUpdateRequest;
import mypack.payload.auth.PasswordUpdateRequest;
import mypack.service.FollowUserService;
import mypack.service.UserDetailsCustom;
import mypack.service.UserService;

@RestController
@RequestMapping("/api/employer")
public class EmployerProfileController {
	@Autowired
	UserService employerService;

	@Autowired
	FollowUserService followUserService;

	@PutMapping(value = "/password")
	public ResponseEntity<?> changePassword(@AuthenticationPrincipal UserDetailsCustom employer,
			@RequestBody @Valid PasswordUpdateRequest request) {
		return ResponseEntity.ok(employerService.changePassword(employer.getEmail(), request));
	}

	@PutMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	public ResponseEntity<?> update(@AuthenticationPrincipal UserDetailsCustom employer,
			@RequestPart("info") @Valid EmployerProfileUpdateRequest request,
			@RequestPart(name = "avatar", required = false) MultipartFile avatar) {
		return ResponseEntity.ok(employerService.employerUpdate(request, avatar, employer.getId()));
	}

	// Jobseeker
	@GetMapping("/infomation/{id}")
	public ResponseEntity<?> getEmployerInfomation(@AuthenticationPrincipal UserDetailsCustom user,
			@PathVariable("id") Long id) {
		return ResponseEntity.ok(employerService.getEmployerById(id, user));
	}
	// Jobseeker

	@GetMapping("/infomation/follow/{id}")
	public ResponseEntity<?> getEmployerInfomationFollow(@PathVariable("id") Long id) {
		return ResponseEntity.ok(followUserService.countEmpFollowers(id));
	}

	// Emp
	@GetMapping("/follower")
	public ResponseEntity<?> getEmployerFollower(@AuthenticationPrincipal UserDetailsCustom employer) {
		return ResponseEntity.ok(followUserService.getEmpFollowers(employer.getId()));
	}

	@GetMapping
	public ResponseEntity<?> getUserInformation(@AuthenticationPrincipal UserDetailsCustom employer) {
		return ResponseEntity.ok(employerService.getEmployerProfile(employer.getEmail()));
	}
}
