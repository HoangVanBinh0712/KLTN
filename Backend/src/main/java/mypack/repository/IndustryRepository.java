package mypack.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import mypack.model.Industry;

@Repository
public interface IndustryRepository extends JpaRepository<Industry, Long> {

}
