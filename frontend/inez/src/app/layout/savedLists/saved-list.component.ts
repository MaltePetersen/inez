import { Component, OnInit,  ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { EinkaufsList, ProduktDTO, EinkaufsItemDTOList } from '../../domain/namespace';
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
      displayedColumns: string[] = ['oberkat', 'stdMenge', 'einheit', 'beispiel'];
      einkaufsliste: EinkaufsList = new EinkaufsList(null, new Array<EinkaufsItemDTOList>());
      checkoutForm;
      listsEmail: Array<EinkaufsList>;

    
    
      viewItem: EinkaufsItemDTOList;
      @ViewChild(MatTable, { static: true }) table: MatTable<any>;
      ngOnInit() {
        this.einkaufsliste = new EinkaufsList('', new Array<EinkaufsItemDTOList>()); 
        this.getEinkaufslist();
      }
    
      getEinkaufslist() {
        this.http.get<EinkaufsList>(environment.apiUrl + "/api/zettel/item/malte.petersen@frs.de").subscribe((data) => console.log(data));
      }
      onEnter(value: string) {
        let amount = parseInt(value.replace(/\D+/g, ''), 10);
        if(!amount){
        amount = 1;
        }
        this.http.get<ProduktDTO>(environment.apiUrl + '/api/word/' + value).subscribe((oberKat) => {
        console.log(amount);
        if(this.einkaufsliste.einkaufsItemDTOList.filter((data) => data.produktDTO.id === oberKat.id).length !== 0){
          this.einkaufsliste.einkaufsItemDTOList.map((data) => {
            if(data.produktDTO.id === oberKat.id){
              data.amount = amount + data.amount;
          }});
        } else {
          this.einkaufsliste.einkaufsItemDTOList.push(new EinkaufsItemDTOList(oberKat, amount));
        }
          this.table.renderRows();
        });
    
      }
      load(formData : any) {
            this.http.get<Array<EinkaufsList>>(environment.apiUrl + '/api/zettel/items/' + formData.email).subscribe((data) => {
              console.log(data);
              this.listsEmail = data;
              this.einkaufsliste = this.listsEmail[0];
            this.table.renderRows();
            });
      }
      loadSpecificList(einkaufsliste: EinkaufsList){
        this.einkaufsliste = einkaufsliste;
        this.table.renderRows();
      }
    }
    