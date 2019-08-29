import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { EinkaufsList, ProduktDTO, EinkaufsItemDTOList } from '../../domain/namespace';
import { FormBuilder } from '@angular/forms';
import { MatTable } from '@angular/material';
import { empty, Observable, of } from 'rxjs';
import { SourceListMap } from 'source-list-map';
@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss']
})
export class NewListComponent implements OnInit {
  displayedColumns: string[] = ['oberkat', 'stdMenge', 'einheit', 'beispiel'];
  einkaufsliste: EinkaufsList = new EinkaufsList(null, new Array<EinkaufsItemDTOList>());
  safeForm: any;
  @ViewChild(MatTable, { static: true }) table: MatTable<any>;
  constructor(private http: HttpClient, private formBuilder: FormBuilder) {
    this.safeForm = this.formBuilder.group({
      email: '',
    });
  }

  ngOnInit() {
    if (window.localStorage.getItem('currentList')){
      this.einkaufsliste = JSON.parse( window.localStorage.getItem('currentList'));
    } else {
      this.einkaufsliste = new EinkaufsList(null, new Array<EinkaufsItemDTOList>());
      window.localStorage.setItem('currentList', JSON.stringify(this.einkaufsliste));
    }
  }
  onEnter(value: string): Observable<EinkaufsList> {
    if(value ||  value !== "" ){

    let amount = parseInt(value.replace(/\D+/g, ''), 10);
    if (!amount) {
      amount = 1;
    }
    this.http.get<ProduktDTO>(environment.apiUrl + '/api/word/' + value).subscribe((oberKat) => {
      console.log(amount);
      if (this.einkaufsliste.einkaufsItemDTOList.filter((data) => data.produktDTO.id === oberKat.id).length !== 0) {
        this.einkaufsliste.einkaufsItemDTOList.map((data) => {
          if (data.produktDTO.id === oberKat.id) {
            data.amount = amount + data.amount;
          }
        });
      } else {
        this.einkaufsliste.einkaufsItemDTOList.push(new EinkaufsItemDTOList(oberKat, amount));
      }
      window.localStorage.setItem('currentList', JSON.stringify(this.einkaufsliste));
      this.table.renderRows();
    });
  }
  return of(this.einkaufsliste);
  }
  clear(){
   window.localStorage.clear();
   this.einkaufsliste = new EinkaufsList(null, new Array<EinkaufsItemDTOList>());
   window.localStorage.setItem('currentList', JSON.stringify(this.einkaufsliste));
   this.table.renderRows();
  }
  save(formData: any) {
    this.einkaufsliste.email = formData.email;
    this.http.post<EinkaufsList>(environment.apiUrl + '/api/zettel/list', this.einkaufsliste).subscribe((data) => console.log(data));
  }
}
