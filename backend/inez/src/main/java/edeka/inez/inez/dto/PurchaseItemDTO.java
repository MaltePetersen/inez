package edeka.inez.inez.dto;


public class PurchaseItemDTO {
    private ProduktDTO produktDTO;
    private int amount;

    public PurchaseItemDTO(ProduktDTO produktDTO, int amount) {
        this.produktDTO = produktDTO;
        this.amount = amount;
    }

    public PurchaseItemDTO() {
    }

    public ProduktDTO getProduktDTO() {
        return produktDTO;
    }

    public void setProduktDTO(ProduktDTO produktDTO) {
        this.produktDTO = produktDTO;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }
}
