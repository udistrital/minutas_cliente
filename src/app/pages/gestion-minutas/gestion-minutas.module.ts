import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { CKEditorModule } from 'ng2-ckeditor';
import { GestionMinutasRoutingModule } from './gestion-minutas-routing.module';
import { GestionMinutasComponent } from './gestion-minutas.component';
import { PlantillasComponent } from './plantillas/plantillas.component';
import { ContratoService } from '../../@core/data/contrato.service';
import { MinutasArgoService } from '../../@core/data/minutas_argo.service';

import { MatFormFieldModule, MatInputModule } from '@angular/material';





const components = [
  GestionMinutasComponent,
  PlantillasComponent,
];

@NgModule({
  imports: [
    ThemeModule,
    GestionMinutasRoutingModule,
    CKEditorModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [
    ...components,
  ],
  providers: [
    ContratoService,
    MinutasArgoService,
  ],
  entryComponents: [
    PlantillasComponent  
  ],
})
export class GestionMinutasModule { }