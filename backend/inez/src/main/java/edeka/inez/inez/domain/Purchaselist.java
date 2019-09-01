package edeka.inez.inez.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.List;
@Entity
public class Purchaselist {
    @Id
    @GeneratedValue
    private Long id;
    @OneToMany
    private List<PurchaseItem> purchaseItemList;
    private String email;

    public Purchaselist(List<PurchaseItem> purchaseItemList, String email) {
        this.purchaseItemList = purchaseItemList;
        this.email = email;
    }

    public Purchaselist() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<PurchaseItem> getPurchaseItemList() {
        return purchaseItemList;
    }

    public void setPurchaseItemList(List<PurchaseItem> purchaseItemList) {
        this.purchaseItemList = purchaseItemList;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
