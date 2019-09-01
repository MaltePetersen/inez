package edeka.inez.inez.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.List;

@Entity
public class Produkt {

    @Id
    @GeneratedValue
    private  Long  id;
    private String name;
    private String example;
    private String unit;
    private int defaultAmount;
    @OneToMany
    private List<Synonym> synonyms;

    public Produkt(String name, String example, String unit, int defaultAmount, List<Synonym> synonyms) {
        this.name = name;
        this.example = example;
        this.unit = unit;
        this.defaultAmount = defaultAmount;
        this.synonyms = synonyms;
    }

    public Produkt() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getExample() {
        return example;
    }

    public void setExample(String example) {
        this.example = example;
    }

    public String getUnit() {
        return unit;
    }

    public void setUnit(String unit) {
        this.unit = unit;
    }

    public int getDefaultAmount() {
        return defaultAmount;
    }

    public void setDefaultAmount(int defaultAmount) {
        this.defaultAmount = defaultAmount;
    }

    public List<Synonym> getSynonyms() {
        return synonyms;
    }

    public void setSynonyms(List<Synonym> synonyms) {
        this.synonyms = synonyms;
    }
}

