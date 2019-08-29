package edeka.inez.inez.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class EinkaufsItem {
    @Id
    @GeneratedValue
    private Long id;
    @ManyToOne
    private Produkt produkt;
    private int amount;

    public EinkaufsItem(Produkt produkt, int amount) {
        this.produkt = produkt;
        this.amount = amount;
    }

    public EinkaufsItem() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Produkt getProdukt() {
        return produkt;
    }

    public void setProdukt(Produkt produkt) {
        this.produkt = produkt;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }
}
