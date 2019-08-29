package edeka.inez.inez.repository;

import edeka.inez.inez.domain.EinkaufsItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EinkaufsItemRepository extends JpaRepository<EinkaufsItem,Long> {
}
