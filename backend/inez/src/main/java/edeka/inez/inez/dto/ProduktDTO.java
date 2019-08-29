package edeka.inez.inez.dto;

public class ProduktDTO {
    private Long id;
    private String oberKat;
    private String BeispielProd;
    private String einheit;
    private int stdMenge;

    public ProduktDTO(Long id, String oberKat, String beispielProd, String einheit, int stdMenge) {
        this.id = id;
        this.oberKat = oberKat;
        BeispielProd = beispielProd;
        this.einheit = einheit;
        this.stdMenge = stdMenge;
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
        return BeispielProd;
    }

    public void setBeispielProd(String beispielProd) {
        BeispielProd = beispielProd;
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
}
