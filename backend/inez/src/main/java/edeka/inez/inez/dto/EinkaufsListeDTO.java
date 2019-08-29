package edeka.inez.inez.dto;

import java.util.List;

public class EinkaufsListeDTO {
    private String email;
    private List<EinkaufsItemDTO> einkaufsItemDTOList;

    public EinkaufsListeDTO(String email, List<EinkaufsItemDTO> einkaufsItemDTOList) {
        this.email = email;
        this.einkaufsItemDTOList = einkaufsItemDTOList;
    }

    public EinkaufsListeDTO() {
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public List<EinkaufsItemDTO> getEinkaufsItemDTOList() {
        return einkaufsItemDTOList;
    }

    public void setEinkaufsItemDTOList(List<EinkaufsItemDTO> einkaufsItemDTOList) {
        this.einkaufsItemDTOList = einkaufsItemDTOList;
    }
}
