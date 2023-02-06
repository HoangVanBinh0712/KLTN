package mypack.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import mypack.dto.LoginRequest;
import mypack.model.User;
import mypack.payload.JwtResponse;
import mypack.payload.auth.EmployerRegisterRequest;
import mypack.payload.auth.JobseekerRegisterRequest;
import mypack.service.UserService;

@RestController
public class LoginController {

	@Autowired
	UserService userService;

	@PostMapping("api/register-jobseeker")
	public ResponseEntity<?> jobseekerRegister(@RequestBody @Valid JobseekerRegisterRequest request) {
		return ResponseEntity.ok(userService.jobseekerRegister(request));
	}

	@PostMapping("api/register-employer")
	public ResponseEntity<?> employerRegister(@RequestBody @Valid EmployerRegisterRequest request) {
		return ResponseEntity.ok(userService.employerRegister(request));
	}

	@PostMapping("api/login")
	public ResponseEntity<?> register(@RequestBody LoginRequest request) {
		return ResponseEntity.ok(userService.login(request));
	}

}
