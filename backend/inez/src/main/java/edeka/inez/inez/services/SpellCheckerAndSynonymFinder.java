package edeka.inez.inez.services;

import edeka.inez.inez.domain.Produkt;
import edeka.inez.inez.domain.Synonym;
import edeka.inez.inez.repository.ProduktRepository;
import edeka.inez.inez.repository.SynonymRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SpellCheckerAndSynonymFinder {
    ProduktRepository produktRepository;
    SynonymRepository synonymRepository;

    SpellCheckerAndSynonymFinder(ProduktRepository produktRepository, SynonymRepository synonymRepository) {
        this.produktRepository = produktRepository;
        this.synonymRepository = synonymRepository;
    }

    public Optional<Produkt> findProduktWithSmallestDistance(String word, int limit) {
        List<Produkt> produktList = this.produktRepository.findAll();
        int smallestDistance = limit;
        Optional<Produkt> smallestDistanceProdukt = Optional.empty();
        for (Produkt produkt : produktList
        ) {
            int currentDistance = levenshteinDistance(produkt.getOberKat().toLowerCase(), word.toLowerCase());
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
            int currentDistance = levenshteinDistance(synonym.getName().toLowerCase(), word.toLowerCase());
            if (smallestDistance >= currentDistance) {
                smallestDistance = currentDistance;
                smallestDistanceProdukt = Optional.of(synonym.getProdukt());
                test = synonym;
            }
            if (smallestDistance == 0) {
                break;
            }
        }
        System.out.println(test.getName());
        System.out.println(smallestDistance);
        return smallestDistanceProdukt;
    }

    private int levenshteinDistance(CharSequence lhs, CharSequence rhs) {
        int len0 = lhs.length() + 1;
        int len1 = rhs.length() + 1;

        // the array of distances
        int[] cost = new int[len0];
        int[] newcost = new int[len0];

        // initial cost of skipping prefix in String s0
        for (int i = 0; i < len0; i++) cost[i] = i;

        // dynamically computing the array of distances

        // transformation cost for each letter in s1
        for (int j = 1; j < len1; j++) {
            // initial cost of skipping prefix in String s1
            newcost[0] = j;

            // transformation cost for each letter in s0
            for (int i = 1; i < len0; i++) {
                // matching current letters in both strings
                int match = (lhs.charAt(i - 1) == rhs.charAt(j - 1)) ? 0 : 1;

                // computing cost for each transformation
                int cost_replace = cost[i - 1] + match;
                int cost_insert = cost[i] + 1;
                int cost_delete = newcost[i - 1] + 1;

                // keep minimum cost
                newcost[i] = Math.min(Math.min(cost_insert, cost_delete), cost_replace);
            }

            // swap cost/newcost arrays
            int[] swap = cost;
            cost = newcost;
            newcost = swap;
        }

        // the distance is the cost for transforming all letters in both strings
        return cost[len0 - 1];
    }

}
