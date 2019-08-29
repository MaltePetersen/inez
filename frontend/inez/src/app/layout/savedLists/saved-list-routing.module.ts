import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SavedListComponent } from './saved-list.component';

const routes: Routes = [
    {
        path: '',
        component: SavedListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SavedListRoutingModule {}
