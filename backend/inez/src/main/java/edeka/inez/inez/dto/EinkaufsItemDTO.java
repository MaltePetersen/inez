package edeka.inez.inez.dto;


public class EinkaufsItemDTO {
    private ProduktDTO produktDTO;
    private int amount;

    public EinkaufsItemDTO(ProduktDTO produktDTO, int amount) {
        this.produktDTO = produktDTO;
        this.amount = amount;
    }

    public EinkaufsItemDTO() {
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
