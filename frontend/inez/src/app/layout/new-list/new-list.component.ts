import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PurchaseListDTO, ProduktDTO, PurchaseItemDTOList } from '../../domain/namespace';
import { FormBuilder } from '@angular/forms';
import { MatTable } from '@angular/material';
@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss']
})
export class NewListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'defaultAmount', 'unit', 'beispiel'];
  purchaseListDTO: PurchaseListDTO = new PurchaseListDTO(null, new Array<PurchaseItemDTOList>());
  safeForm: any;
  @ViewChild(MatTable, { static: true }) table: MatTable<any>;
  constructor(private http: HttpClient, private formBuilder: FormBuilder) {
    this.safeForm = this.formBuilder.group({
      email: '',
    });
  }

  ngOnInit() {
    if (window.localStorage.getItem('currentList')) {
      this.purchaseListDTO
        = JSON.parse(window.localStorage.getItem('currentList'));
        console.log(this.purchaseListDTO); 
    } else {
      this.purchaseListDTO
        = new PurchaseListDTO(null, new Array<PurchaseItemDTOList>());
      window.localStorage.setItem('currentList', JSON.stringify(this.purchaseListDTO
      ));
    }
  }
  onEnter(value: string) {
    if (value || value !== "") {
      let amount = parseInt(value.replace(/\D+/g, ''), 10);
      if (!amount) {
        amount = 1;
      }
      this.http.get<ProduktDTO>(environment.apiUrl + '/api/word/' + value).subscribe((name) => {
        if (this.purchaseListDTO.purchaseItemDTOList.filter((data) => data.produktDTO.id === name.id).length !== 0) {
          this.purchaseListDTO.purchaseItemDTOList.map((data) => {
            if (data.produktDTO.id === name.id) {
              data.amount = amount + data.amount;
            }
          });
        } else {
          this.purchaseListDTO
            .purchaseItemDTOList.push(new PurchaseItemDTOList(name, amount));
        }
        window.localStorage.setItem('currentList', JSON.stringify(this.purchaseListDTO
        ));
        this.table.renderRows();

      });
    }
  }
  clear() {
    window.localStorage.clear();
    this.purchaseListDTO
      = new PurchaseListDTO(null, new Array<PurchaseItemDTOList>());
    window.localStorage.setItem('currentList', JSON.stringify(this.purchaseListDTO
    ));
    this.table.renderRows();
  }
  save(formData: any) {
    this.purchaseListDTO
      .email = formData.email;
    this.http.post<PurchaseListDTO>(environment.apiUrl + '/api/zettel/list', this.purchaseListDTO
    ).subscribe((data) => console.log(data));
  }
}
