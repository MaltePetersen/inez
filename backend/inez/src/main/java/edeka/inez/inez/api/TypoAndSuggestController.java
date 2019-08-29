package edeka.inez.inez.api;

import edeka.inez.inez.domain.Produkt;
import edeka.inez.inez.dto.ProduktDTO;
import edeka.inez.inez.services.SpellCheckerAndSynonymFinder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping(path = "api/word", produces = "application/json")
@CrossOrigin("*")
public class TypoAndSuggestController {
    private SpellCheckerAndSynonymFinder spellCheckerAndSynonymFinder;

    public TypoAndSuggestController(SpellCheckerAndSynonymFinder spellCheckerAndSynonymFinder) {
        this.spellCheckerAndSynonymFinder = spellCheckerAndSynonymFinder;
    }

    @GetMapping(value = "/{word}")
    public ProduktDTO getEinkaufsliste(@PathVariable String word) {
        Optional<Produkt> produkt = this.spellCheckerAndSynonymFinder.findProduktWithSmallestDistance(word, 10);
        return produkt.map(value -> new ProduktDTO(value.getId(), value.getOberKat(), value.getBeispielProd(), value.getEinheit(), value.getStdMenge())).orElse(null);
    }
}
