import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { DetailsComponent } from './details.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [     
            { path: '', component : DetailsComponent},
            { path: 'details', component : DetailsComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DetailRoutingModule { }