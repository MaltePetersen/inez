import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'new-list', pathMatch: 'prefix' },
            { path: 'new-list', loadChildren: () => import('./new-list/new-list.module').then(m => m.NewListModule) },
            { path: 'saved-list', loadChildren: () => import('./savedLists/saved-list.module').then(m => m.SavedListModule)}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
