import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatToolbarModule, MatInputModule, MatListModule, MatIconModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewListComponent } from './new-list.component';
import { NewListRoutingModule } from './new-list-routing.module';

@NgModule({
    imports: [CommonModule, NewListRoutingModule, MatTableModule,  MatToolbarModule,
        MatInputModule,
        MatListModule,
        ReactiveFormsModule,
        MatIconModule,
        FormsModule,
        MatTableModule],
    declarations: [NewListComponent]
})
export class NewListModule {}
