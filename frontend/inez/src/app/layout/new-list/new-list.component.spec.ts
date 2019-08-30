import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewListComponent } from './new-list.component';
import { DebugElement } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material';
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
    it('should create', () => {
        expect(component).toBeTruthy();
    });
    it('should create  Milch', async () => {
        component.clear();
        component.onEnter('Milch');
        await new Promise(resolve => setTimeout(resolve, 500));
        expect(component.purchaseListDTO.purchaseItemDTOList.filter((item) => item.produktDTO.oberKat === 'Milch').length).toBe(1);
    });
    it('should create 1 Milch', async () => {
        component.clear();
        component.onEnter('Milch');
        await new Promise(resolve => setTimeout(resolve, 500));
        expect(component.purchaseListDTO.purchaseItemDTOList.filter((item) => item.produktDTO.oberKat === 'Milch' && item.amount === 1).length).toBe(1);
    });
    it('should create 2 Milch', async () => {
        component.clear();
        component.onEnter('2 Milch');
        await new Promise(resolve => setTimeout(resolve, 500));
        expect(component.purchaseListDTO.purchaseItemDTOList.filter((item) => item.produktDTO.oberKat === 'Milch' && item.amount === 2).length).toBe(1);
    });
    it('should create 5 Milch with to different inputs', async () => {
        component.clear();
        component.onEnter('Milch');
        component.onEnter('Milch2');
        component.onEnter('1Milch');
        component.onEnter('1 Milch');
        await new Promise(resolve => setTimeout(resolve, 500));
        expect(component.purchaseListDTO.purchaseItemDTOList.filter((item) => item.produktDTO.oberKat === 'Milch' && item.amount === 5).length).toBe(1);
    });
    it('should create Milch eventouigh we have a Typo', async () => {
        component.clear();
        component.onEnter('1 Milc');
        await new Promise(resolve => setTimeout(resolve, 500));
        expect(component.purchaseListDTO.purchaseItemDTOList.filter((item) => item.produktDTO.oberKat === 'Milch' && item.amount === 1).length).toBe(1);
    });
    it('Multiple Products: 3 Rum 2 Reis', async () => {
        component.clear();
        component.onEnter('3 Rum');
        component.onEnter('2 Reis')
        await new Promise(resolve => setTimeout(resolve, 500));
        expect(component.purchaseListDTO.purchaseItemDTOList.filter((item) => item.produktDTO.oberKat === 'Rum' && item.amount === 3).length === 1 && component.purchaseListDTO.purchaseItemDTOList.filter((item) => item.produktDTO.oberKat === 'Reis' && item.amount === 2).length === 1).toBeTruthy();
    });
    it('Synonyme Balsamico -> Essig', async () => {
        component.clear();
        component.onEnter('Balsamico');
        await new Promise(resolve => setTimeout(resolve, 500));
        expect(component.purchaseListDTO.purchaseItemDTOList.filter((item) => item.produktDTO.oberKat === 'Essig' && item.amount === 1).length).toBe(1);
    });
    it('Should Synonyme mit Typo Balsamico -> Essig', async () => {
        component.clear();
        component.onEnter('Balsami');
        await new Promise(resolve => setTimeout(resolve, 500));
        expect(component.purchaseListDTO.purchaseItemDTOList.filter((item) => item.produktDTO.oberKat === 'Essig' && item.amount === 1).length).toBe(1);
    });
    it('Should have example Product', async () => {
        component.clear();
        component.onEnter('Milch');
        await new Promise(resolve => setTimeout(resolve, 500));
        expect(component.purchaseListDTO.purchaseItemDTOList.filter((item) => item.produktDTO.beispielProd && item.produktDTO.beispielProd !== '' && item.amount === 1).length).toBe(1);
    });
    it('Should have Butter', async () => {
        component.clear();
        component.onEnter('Butter');
        await new Promise(resolve => setTimeout(resolve, 500));
        expect(component.purchaseListDTO.purchaseItemDTOList.filter((item) =>  item.produktDTO.oberKat === 'Butter' && item.amount === 1).length).toBe(1);
    });
    it('Should make synonym Möhren to Karotten', async () => {
        component.clear();
        component.onEnter('Möhren');
        await new Promise(resolve => setTimeout(resolve, 500));
        expect(component.purchaseListDTO.purchaseItemDTOList.filter((item) => item.produktDTO.oberKat === 'Karotten' && item.amount === 1).length).toBe(1);
    });
    it('Should have Unit of measurement', async () => {
        component.clear();
        component.onEnter('Karotten');
        await new Promise(resolve => setTimeout(resolve, 500));
        expect(component.purchaseListDTO.purchaseItemDTOList.filter((item) => item.produktDTO.einheit && item.produktDTO.einheit !== '' && item.amount === 1).length).toBe(1);
    });
    it('Should have Standard Amount ', async () => {
        component.clear();
        component.onEnter('Karotten');
        await new Promise(resolve => setTimeout(resolve, 500));
        expect(component.purchaseListDTO.purchaseItemDTOList.filter((item) => item.produktDTO.stdMenge && item.produktDTO.stdMenge !== 0 && item.amount === 1).length).toBe(1);
    });
})