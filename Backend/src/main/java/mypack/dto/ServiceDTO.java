package mypack.dto;

import mypack.utility.datatype.ECurrency;
import mypack.utility.datatype.EServiceType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ServiceDTO {

	private Long id;
	
	private String name;
	
	private String description;

	private EServiceType type;

	private Double price;

	private ECurrency currency;

	private Long postDuration;

	private Boolean active;
}
