package mypack.payload.JobseekerCV;

import lombok.Data;
import mypack.utility.datatype.EExperience;
import mypack.utility.datatype.EMethod;
import mypack.utility.datatype.EPosition;

@Data
public class CVUploadRequest {
    	
	private Boolean isPublic;
	
	private String name;

	private EExperience experience;

	private EPosition position;

	private EMethod method;
}
