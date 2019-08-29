package edeka.inez.inez.repository;

import edeka.inez.inez.domain.Produkt;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProduktRepository extends JpaRepository<Produkt, Long> {
}
