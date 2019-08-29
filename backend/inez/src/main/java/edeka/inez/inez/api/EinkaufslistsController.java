package edeka.inez.inez.api;

import edeka.inez.inez.domain.EinkaufsItem;
import edeka.inez.inez.domain.Einkaufsliste;
import edeka.inez.inez.domain.Produkt;
import edeka.inez.inez.dto.EinkaufsItemDTO;
import edeka.inez.inez.dto.EinkaufsListeDTO;
import edeka.inez.inez.dto.ProduktDTO;
import edeka.inez.inez.repository.EinkaufsItemRepository;
import edeka.inez.inez.repository.EinkaufslisteRepository;
import edeka.inez.inez.repository.ProduktRepository;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "api/zettel", produces = "application/json")
@CrossOrigin("*")
public class EinkaufslistsController {
private ProduktRepository produktRepository;
private EinkaufslisteRepository einkaufslisteRepository;
private EinkaufsItemRepository einkaufsItemRepository;
    public EinkaufslistsController(ProduktRepository produktRepository, EinkaufslisteRepository einkaufslisteRepository, EinkaufsItemRepository einkaufsItemRepository){
        this.produktRepository = produktRepository;
        this.einkaufslisteRepository = einkaufslisteRepository;
        this.einkaufsItemRepository = einkaufsItemRepository;
    }
    @PostMapping(consumes = "application/json", value ="/item")
    public EinkaufsItemDTO createItem(@RequestBody EinkaufsItemDTO einkaufsItemDTO) {

        return einkaufsItemDTO;
    }
    @PostMapping(consumes = "application/json", value = "/list" )
    public EinkaufsListeDTO createList (@RequestBody EinkaufsListeDTO einkaufsListeDTO){
        List<EinkaufsItemDTO> einkaufsItemDTOList = einkaufsListeDTO.getEinkaufsItemDTOList();
        List<EinkaufsItem> einkaufsItemList = new ArrayList<>(); ;
        for (EinkaufsItemDTO einkaufsItemDTO: einkaufsItemDTOList
             ) {
            Optional<Produkt> produkt = produktRepository.findById(einkaufsItemDTO.getProduktDTO().getId());
            if(produkt.isPresent()) {
                EinkaufsItem einkaufsItem =new EinkaufsItem(produkt.get(), einkaufsItemDTO.getAmount());
                this.einkaufsItemRepository.save(einkaufsItem);
                einkaufsItemList.add(einkaufsItem);
            }
        }
        Einkaufsliste einkaufsliste = new Einkaufsliste(einkaufsItemList, einkaufsListeDTO.getEmail());
        this.einkaufslisteRepository.save(einkaufsliste);
        return einkaufsListeDTO;
    }
    @GetMapping(value="/item/{email}")
public  EinkaufsListeDTO  getList(@PathVariable String email){
       Optional<Einkaufsliste> einkaufsList =  this.einkaufslisteRepository.findFirstByEmail(email);
    if(einkaufsList.isPresent()){
        List<EinkaufsItemDTO> einkaufsItemList = new ArrayList<>();
        for (EinkaufsItem einkaufsItem: einkaufsList.get().getEinkaufsItemList()
             ) {
            ProduktDTO produktDTO = new ProduktDTO(einkaufsItem.getProdukt().getId(),einkaufsItem.getProdukt().getOberKat(),einkaufsItem.getProdukt().getBeispielProd(),einkaufsItem.getProdukt().getEinheit(),einkaufsItem.getProdukt().getStdMenge());
            einkaufsItemList.add(new EinkaufsItemDTO(produktDTO,einkaufsItem.getAmount()));
        }
        return new EinkaufsListeDTO(einkaufsList.get().getEmail(), einkaufsItemList);
    }

    return null;
    }
    @GetMapping(value="/items/{email}")
    public List<EinkaufsListeDTO> getLists(@PathVariable String email){
        List<Einkaufsliste> einkaufslisteList = this.einkaufslisteRepository.findAllByEmail(email);
        List<EinkaufsListeDTO> einkaufsListeDTOList = new ArrayList<>();
        for (Einkaufsliste e: einkaufslisteList
             ) {
            List<EinkaufsItemDTO> einkaufsItemList = new ArrayList<>();
            for (EinkaufsItem einkaufsItem: e.getEinkaufsItemList()
                    ) {
                ProduktDTO produktDTO = new ProduktDTO(einkaufsItem.getProdukt().getId(),einkaufsItem.getProdukt().getOberKat(),einkaufsItem.getProdukt().getBeispielProd(),einkaufsItem.getProdukt().getEinheit(),einkaufsItem.getProdukt().getStdMenge());
                einkaufsItemList.add(new EinkaufsItemDTO(produktDTO,einkaufsItem.getAmount()));
            }
            einkaufsListeDTOList.add( new EinkaufsListeDTO(e.getEmail(), einkaufsItemList));
        }
        return einkaufsListeDTOList;
    }


}
