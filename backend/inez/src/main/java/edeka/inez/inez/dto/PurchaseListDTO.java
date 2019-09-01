package edeka.inez.inez.dto;

import java.util.List;

public class PurchaseListDTO {
    private String email;
    private List<PurchaseItemDTO> purchaseItemDTOList;

    public PurchaseListDTO(String email, List<PurchaseItemDTO> purchaseItemDTOList) {
        this.email = email;
        this.purchaseItemDTOList = purchaseItemDTOList;
    }

    public PurchaseListDTO() {
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public List<PurchaseItemDTO> getPurchaseItemDTOList() {
        return purchaseItemDTOList;
    }

    public void setPurchaseItemDTOList(List<PurchaseItemDTO> purchaseItemDTOList) {
        this.purchaseItemDTOList = purchaseItemDTOList;
    }
}
