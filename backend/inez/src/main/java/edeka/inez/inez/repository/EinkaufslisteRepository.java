package edeka.inez.inez.repository;

import edeka.inez.inez.domain.Einkaufsliste;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface EinkaufslisteRepository extends JpaRepository<Einkaufsliste, Long> {
        Optional<Einkaufsliste> findFirstByEmail(String email);
        List<Einkaufsliste> findAllByEmail(String  email);
}
