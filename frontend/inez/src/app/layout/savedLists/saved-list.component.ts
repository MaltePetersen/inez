import { Component, OnInit,  ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PurchaseListDTO, ProduktDTO, PurchaseItemDTOList } from '../../domain/namespace';
import { FormBuilder } from '@angular/forms';
import { MatTable } from '@angular/material';
@Component({
    selector: 'app-saved-list',
    templateUrl: './saved-list.component.html',
    styleUrls: ['./saved-list.component.scss']
})
export class SavedListComponent implements OnInit {

    constructor(private http: HttpClient, private formBuilder: FormBuilder) { 
        this.checkoutForm = this.formBuilder.group({
          email: '',
        });
      }
      displayedColumns: string[] = ['name', 'defaultMeasurement', 'unit', 'beispiel'];
      purchaseListDTO: PurchaseListDTO = new PurchaseListDTO(null, new Array<PurchaseItemDTOList>());
      checkoutForm;
      listsEmail: Array<PurchaseListDTO>;

    
    
      viewItem: PurchaseItemDTOList;
      @ViewChild(MatTable, { static: true }) table: MatTable<any>;
      ngOnInit() {
        this.purchaseListDTO = new PurchaseListDTO('', new Array<PurchaseItemDTOList>()); 
        this.getEinkaufslist();
      }
    
      getEinkaufslist() {
        this.http.get<PurchaseListDTO>(environment.apiUrl + "/api/zettel/item/malte.petersen@frs.de").subscribe((data) => console.log(data));
      }
      onEnter(value: string) {
        let amount = parseInt(value.replace(/\D+/g, ''), 10);
        if(!amount){
        amount = 1;
        }
        this.http.get<ProduktDTO>(environment.apiUrl + '/api/word/' + value).subscribe((name) => {
        console.log(amount);
        if(this.purchaseListDTO.purchaseItemDTOList.filter((data) => data.produktDTO.id === name.id).length !== 0){
          this.purchaseListDTO.purchaseItemDTOList.map((data) => {
            if(data.produktDTO.id === name.id){
              data.amount = amount + data.amount;
          }});
        } else {
          this.purchaseListDTO.purchaseItemDTOList.push(new PurchaseItemDTOList(name, amount));
        }
          this.table.renderRows();
        });
    
      }
      load(formData : any) {
            this.http.get<Array<PurchaseListDTO>>(environment.apiUrl + '/api/zettel/items/' + formData.email).subscribe((data) => {
              console.log(data);
              this.listsEmail = data;
              this.purchaseListDTO = this.listsEmail[0];
            this.table.renderRows();
            });
      }
      loadSpecificList(purchaseListDTO: PurchaseListDTO){
        this.purchaseListDTO = purchaseListDTO;
        this.table.renderRows();
      }
    }
    