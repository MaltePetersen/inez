import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewListComponent } from './new-list.component';
import { DebugElement } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material';
import { NewListModule } from './new-list.module';
import { HttpClientModule } from '@angular/common/http';


describe('NewListComponent', () => {
    let component: NewListComponent;
    let fixture: ComponentFixture<NewListComponent>;
    let de: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NewListComponent],
            imports: [ReactiveFormsModule, MatTableModule, FormsModule, HttpClientModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NewListComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement;
        
        fixture.detectChanges();
    });
    it('should create',  () => {
        expect(component).toBeTruthy();
    });
    it('should create  Milk', async () => {
        component.clear();
       component.onEnter('Milch').subscribe( (data) => {
        expect(component.einkaufsliste.einkaufsItemDTOList.filter((item) => item.produktDTO.oberKat ==="Milch").length).toBe(1);
    });
        })




});
