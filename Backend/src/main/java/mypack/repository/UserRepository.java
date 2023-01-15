package mypack.repository;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import mypack.model.User;
import mypack.payload.statistic.StatisticForCount;
import mypack.repository.custom.UserSerachCustomRepository;
import mypack.utility.datatype.ERole;

@Repository
public interface UserRepository extends JpaRepository<User, Long>, UserSerachCustomRepository {
	Optional<User> findByEmail(String email);

	Optional<User> findByEmailAndRole(String email, ERole role);

	Boolean existsByPhone(String phone);

	Boolean existsByEmail(String email);

	@Modifying
	@Transactional
	@Query(value = "update user set avatar_id = null where id = :id", nativeQuery = true)
	void updateBeforeDeleteImage(@Param("id") Long id);

	@Query(value = "SELECT * FROM user WHERE role = 1 ORDER BY RAND() LIMIT 10", nativeQuery = true)
	List<User> getListCompany();

	@Query(value = "SELECT email FROM user WHERE id in(:listId) and email_confirm = true", nativeQuery = true)
	String[] getListEmailUser(@Param("listId") List<Long> lstId);

	@Query(value = "Select new mypack.payload.statistic.StatisticForCount(Month(c.createDate) as month, count(c) as value)  from User c where YEAR(c.createDate) = :year group by Month(c.createDate) order by Month(c.createDate) asc")
	List<StatisticForCount> getCountNewUsers(@Param("year") Integer year);
}
