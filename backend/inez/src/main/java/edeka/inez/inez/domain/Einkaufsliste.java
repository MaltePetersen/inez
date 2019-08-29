package edeka.inez.inez.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.List;
@Entity
public class Einkaufsliste {
    @Id
    @GeneratedValue
    private Long id;
    @OneToMany
    private List<EinkaufsItem> einkaufsItemList;
    private String email;

    public Einkaufsliste(List<EinkaufsItem> einkaufsItemList, String email) {
        this.einkaufsItemList = einkaufsItemList;
        this.email = email;
    }

    public Einkaufsliste() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<EinkaufsItem> getEinkaufsItemList() {
        return einkaufsItemList;
    }

    public void setEinkaufsItemList(List<EinkaufsItem> einkaufsItemList) {
        this.einkaufsItemList = einkaufsItemList;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
