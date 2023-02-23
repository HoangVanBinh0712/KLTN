package mypack.payload.JobseekerCV;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import lombok.Data;
import mypack.utility.datatype.EExperience;
import mypack.utility.datatype.EMethod;
import mypack.utility.datatype.EPosition;

@Data
public class CVUploadRequest {

	@NotNull
	private Boolean isPublic;

	@NotBlank
	private String name;

	@NotBlank
	private String workExperiences;

	@NotBlank
	private String skillsAndKnowledges;

	@NotNull
	private EExperience experience;

	@NotNull
	private EPosition position;

	@NotNull
	private EMethod method;
}
