package mypack;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class KLTNCareerWebisteApplication {

	public static void main(String[] args) {
		SpringApplication.run(KLTNCareerWebisteApplication.class, args);
	}

}
