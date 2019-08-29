package edeka.inez.inez.repository;

import edeka.inez.inez.domain.Synonym;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SynonymRepository extends JpaRepository<Synonym, Long> {
}
