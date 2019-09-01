package edeka.inez.inez.api;

import edeka.inez.inez.domain.PurchaseItem;
import edeka.inez.inez.domain.Purchaselist;
import edeka.inez.inez.domain.Produkt;
import edeka.inez.inez.dto.PurchaseItemDTO;
import edeka.inez.inez.dto.PurchaseListDTO;
import edeka.inez.inez.dto.ProduktDTO;
import edeka.inez.inez.repository.PurchaseItemRepository;
import edeka.inez.inez.repository.PurchaselistRepository;
import edeka.inez.inez.repository.ProduktRepository;
import javafx.beans.property.ObjectProperty;
import org.springframework.web.bind.annotation.*;

import javax.swing.text.html.Option;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
// Objects will always be send as DTOs
@RestController("api/zettel")
@RequestMapping(path = "api/zettel", produces = "application/json")
@CrossOrigin("*")
public class PurchaselistsController {
    private ProduktRepository produktRepository;
    private PurchaselistRepository purchaselistRepository;
    private PurchaseItemRepository purchaseItemRepository;

    public PurchaselistsController(ProduktRepository produktRepository, PurchaselistRepository purchaselistRepository, PurchaseItemRepository purchaseItemRepository) {
        this.produktRepository = produktRepository;
        this.purchaselistRepository = purchaselistRepository;
        this.purchaseItemRepository = purchaseItemRepository;
    }

    @PostMapping(consumes = "application/json", value = "/item")
    public PurchaseItemDTO createItem(@RequestBody PurchaseItemDTO purchaseItemDTO) {

        return purchaseItemDTO;
    }

    @PostMapping(consumes = "application/json", value = "/list")
    public PurchaseListDTO createList(@RequestBody PurchaseListDTO purchaseListDTO) {
        List<PurchaseItemDTO> purchaseItemDTOList = purchaseListDTO.getPurchaseItemDTOList();
        List<PurchaseItem> purchaseItemList = new ArrayList<>();
        ;
        for (PurchaseItemDTO purchaseItemDTO : purchaseItemDTOList
                ) {
            Optional<Produkt> produkt = produktRepository.findById(purchaseItemDTO.getProduktDTO().getId());
            if (produkt.isPresent()) {
                PurchaseItem purchaseItem = new PurchaseItem(produkt.get(), purchaseItemDTO.getAmount());
                this.purchaseItemRepository.save(purchaseItem);
                purchaseItemList.add(purchaseItem);
            }
        }
        Purchaselist purchaselist = new Purchaselist(purchaseItemList, purchaseListDTO.getEmail());
        this.purchaselistRepository.save(purchaselist);
        return purchaseListDTO;
    }

    @GetMapping(value = "/item/{email}")
    public Optional<PurchaseListDTO> getList(@PathVariable String email) {
        Optional<Purchaselist> purchaseList = this.purchaselistRepository.findFirstByEmail(email);
        Optional<PurchaseListDTO> purchaseListDTOOptional = Optional.empty();
        if (purchaseList.isPresent()) {
            List<PurchaseItemDTO> purchaseItemList = new ArrayList<>();
            for (PurchaseItem purchaseItem : purchaseList.get().getPurchaseItemList()
                    ) {
                ProduktDTO produktDTO = new ProduktDTO(purchaseItem.getProdukt().getId(), purchaseItem.getProdukt().getName(), purchaseItem.getProdukt().getExample(), purchaseItem.getProdukt().getUnit(), purchaseItem.getProdukt().getDefaultAmount());
                purchaseItemList.add(new PurchaseItemDTO(produktDTO, purchaseItem.getAmount()));
            }

            purchaseListDTOOptional = Optional.of(new PurchaseListDTO(purchaseList.get().getEmail(), purchaseItemList));
        }

        return purchaseListDTOOptional;
    }
    @GetMapping(value = "/items/{email}")
    public List<PurchaseListDTO> getLists(@PathVariable String email) {
        List<Purchaselist> purchaselistList = this.purchaselistRepository.findAllByEmail(email);
        List<PurchaseListDTO> purchaseListDTOList = new ArrayList<>();
        for (Purchaselist purchaselist : purchaselistList
                ) {
            List<PurchaseItemDTO> purchaseItemList = new ArrayList<>();
            for (PurchaseItem purchaseItem : purchaselist.getPurchaseItemList()
                    ) {
                ProduktDTO produktDTO = new ProduktDTO(purchaseItem.getProdukt().getId(), purchaseItem.getProdukt().getName(), purchaseItem.getProdukt().getExample(), purchaseItem.getProdukt().getUnit(), purchaseItem.getProdukt().getDefaultAmount());
                purchaseItemList.add(new PurchaseItemDTO(produktDTO, purchaseItem.getAmount()));
            }
            purchaseListDTOList.add(new PurchaseListDTO(purchaselist.getEmail(), purchaseItemList));
        }
        return purchaseListDTOList;
    }
}
