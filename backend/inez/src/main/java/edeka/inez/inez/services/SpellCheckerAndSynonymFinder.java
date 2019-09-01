package edeka.inez.inez.services;
import edeka.inez.inez.domain.Produkt;
import edeka.inez.inez.domain.Synonym;
import edeka.inez.inez.repository.ProduktRepository;
import edeka.inez.inez.repository.SynonymRepository;
import org.springframework.stereotype.Service;
import org.apache.commons.text.similarity.LevenshteinDistance;
import java.util.List;
import java.util.Optional;

@Service
public class SpellCheckerAndSynonymFinder {
    private ProduktRepository produktRepository;
    private SynonymRepository synonymRepository;
    private LevenshteinDistance levenshteinDistance  = new LevenshteinDistance();

    SpellCheckerAndSynonymFinder(ProduktRepository produktRepository, SynonymRepository synonymRepository) {
        this.produktRepository = produktRepository;
        this.synonymRepository = synonymRepository;
    }
    //This method will return the Produkt which the user most likely wanted to choose.
    public Optional<Produkt> findProduktWithSmallestDistance(String word, int limit) {
        List<Produkt> produktList = this.produktRepository.findAll();
        int smallestDistance = limit;
        Optional<Produkt> smallestDistanceProdukt = Optional.empty();
        for (Produkt produkt : produktList
                ) {
            int currentDistance = levenshteinDistance.apply(produkt.getName().toLowerCase(), word.toLowerCase());
            if (smallestDistance >= currentDistance) {
                smallestDistance = currentDistance;
                smallestDistanceProdukt = Optional.of(produkt);
            }
            if (smallestDistance == 0) {
                return smallestDistanceProdukt;
            }
        }
        Synonym test = null;
        List<Synonym> synonymList = this.synonymRepository.findAll();
        for (Synonym synonym : synonymList) {
            int currentDistance = levenshteinDistance.apply(synonym.getName().toLowerCase(), word.toLowerCase());
            if (smallestDistance >= currentDistance) {
                smallestDistance = currentDistance;
                smallestDistanceProdukt = Optional.of(synonym.getProdukt());
                test = synonym;
            }
            if (smallestDistance == 0) {
                break;
            }
        }
        return smallestDistanceProdukt;
    }



}
