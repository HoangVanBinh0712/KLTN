package mypack.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import lombok.Data;
import mypack.model.pk.ProfilePK;
import mypack.utility.datatype.EExperience;
import mypack.utility.datatype.EMethod;
import mypack.utility.datatype.EPosition;

@Data
@Entity
public class Profile {
	@EmbeddedId
	ProfilePK id;

	@MapsId("userId")
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "user_id", insertable = false, updatable = false)
	private User user;

	@MapsId("mediaId")
	@ManyToOne
	@JoinColumn(name = "media_id", insertable = false, updatable = false)
	private MediaResource mediaResource;

	@Column
	@NotEmpty
	private String name;

	@Column(name = "is_public", columnDefinition = "boolean default false")
	@NotNull
	private Boolean isPublic;

	@Column(name = "last_modified")
	@NotNull
	private Date lastModified;

	@Column
	private EPosition position;

	@Column
	private EMethod method;

	@Column
	private EExperience experience;

}