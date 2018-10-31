import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionMinutasComponent } from './gestion-minutas.component';
import { PlantillasComponent } from './plantillas/plantillas.component';


const routes: Routes = [{
    path: '',
    component: GestionMinutasComponent,
    children: [{
        path: 'plantillas',
        component: PlantillasComponent,
    }],
}];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class GestionMinutasRoutingModule { }
