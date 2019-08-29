package edeka.inez.inez.domain;

import javax.persistence.*;

@Entity
public class Synonym {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    @ManyToOne
    private Produkt produkt;

    public Synonym(String name, Produkt produkt) {
        this.name = name;
        this.produkt = produkt;
    }

    public Synonym() {
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

    public Produkt getProdukt() {
        return produkt;
    }

    public void setProdukt(Produkt produkt) {
        this.produkt = produkt;
    }
}
