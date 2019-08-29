import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatToolbarModule, MatInputModule, MatListModule, MatIconModule } from '@angular/material';

import { SavedListRoutingModule } from './saved-list-routing.module';
import { SavedListComponent } from './saved-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, SavedListRoutingModule, MatTableModule,  MatToolbarModule,
        MatInputModule,
        MatListModule,
        ReactiveFormsModule,
        MatIconModule,
        FormsModule,
        MatTableModule,],
    declarations: [SavedListComponent]
})
export class SavedListModule {}
