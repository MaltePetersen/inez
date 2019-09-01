package edeka.inez.inez.dto;

public class ProduktDTO {
    private Long id;
    private String name;
    private String example;
    private String unit;
    private int defaultAmount;

    public ProduktDTO(Long id, String name, String example, String unit, int defaultAmount) {
        this.id = id;
        this.name = name;
        this.example = example;
        this.unit = unit;
        this.defaultAmount = defaultAmount;
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

    public String getExample() {
        return example;
    }

    public void setExample(String example) {
        this.example = example;
    }

    public String getUnit() {
        return unit;
    }

    public void setUnit(String unit) {
        this.unit = unit;
    }

    public int getDefaultAmount() {
        return defaultAmount;
    }

    public void setDefaultAmount(int defaultAmount) {
        this.defaultAmount = defaultAmount;
    }
}
