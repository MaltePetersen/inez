import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedListComponent } from './saved-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { MatTableModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

describe('SavedListComponent', () => {
    let component: SavedListComponent;
    let fixture: ComponentFixture<SavedListComponent>;
    let de: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SavedListComponent],
            imports: [ReactiveFormsModule, MatTableModule, FormsModule,HttpClientModule]
            
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SavedListComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement;
        
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });




});

