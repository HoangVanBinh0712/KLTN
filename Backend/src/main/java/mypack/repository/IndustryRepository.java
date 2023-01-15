package mypack.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import mypack.model.Industry;

@Repository
public interface IndustryRepository extends JpaRepository<Industry, Long> {

	@Modifying
	@Transactional
	@Query(value = "update industry set parent_id = null where parent_id = :id", nativeQuery = true)
	void updateBeforeDelete(@Param("id") Long id);

}
