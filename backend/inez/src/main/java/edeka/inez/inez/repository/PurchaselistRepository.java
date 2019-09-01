package edeka.inez.inez.repository;

import edeka.inez.inez.domain.Purchaselist;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface PurchaselistRepository extends JpaRepository<Purchaselist, Long> {
        Optional<Purchaselist> findFirstByEmail(String email);
        List<Purchaselist> findAllByEmail(String  email);
}
