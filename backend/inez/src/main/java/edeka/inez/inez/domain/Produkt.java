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
    private String oberKat;
    private String beispielProd;
    private String einheit;
    private int stdMenge;
    @OneToMany
    private List<Synonym> synonyms;

    public Produkt(String oberKat, String beispielProd, String einheit, int stdMenge, List<Synonym> synonyms) {
        this.oberKat = oberKat;
        this.beispielProd = beispielProd;
        this.einheit = einheit;
        this.stdMenge = stdMenge;
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

    public String getOberKat() {
        return oberKat;
    }

    public void setOberKat(String oberKat) {
        this.oberKat = oberKat;
    }

    public String getBeispielProd() {
        return beispielProd;
    }

    public void setBeispielProd(String beispielProd) {
        this.beispielProd = beispielProd;
    }

    public String getEinheit() {
        return einheit;
    }

    public void setEinheit(String einheit) {
        this.einheit = einheit;
    }

    public int getStdMenge() {
        return stdMenge;
    }

    public void setStdMenge(int stdMenge) {
        this.stdMenge = stdMenge;
    }

    public List<Synonym> getSynonyms() {
        return synonyms;
    }

    public void setSynonyms(List<Synonym> synonyms) {
        this.synonyms = synonyms;
    }
}

