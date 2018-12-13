/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ThemeModule } from '../../../@theme/theme.module';
import { CKEditorModule } from 'ng2-ckeditor';
import './ckeditor.loader';
import 'ckeditor';
import { ContratoService } from '../../../@core/data/contrato.service';
import { MinutasArgoService } from '../../../@core/data/minutas_argo.service';

import { HttpClient, HttpHeaders, HttpHandler } from '@angular/common/http';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import { of } from 'rxjs/observable/of';







import { PlantillasComponent } from './plantillas.component';



describe('PlantillasComponent', () => {
  let component: PlantillasComponent;
  let fixture: ComponentFixture<PlantillasComponent>;
  let spy: any;
  let contratoService :ContratoService;
  let minutasArgoService : MinutasArgoService;
  let toasterService : ToasterService;
 

  beforeEach(async(() => {
     
    spy =  jasmine.createSpyObj('HttpClient', ['get']);
    contratoService = new ContratoService(<any>spy);
    minutasArgoService = new MinutasArgoService(<any>spy);
    toasterService = new ToasterService();

    component = new PlantillasComponent(contratoService, minutasArgoService, toasterService);
    

  }));



  it('Las dependencias deben estar definidas', () => {
    expect(component.dependencias_res).toBeDefined();
  });

  it('Se deben obtener los tipos de contrato para la dependencia dada', () => {
    const response : any = {id:1};
    spy = spyOn(contratoService, 'get').and.returnValue(of(response)); 
    component.get_tipo_contrato_dependencia('a');
    expect(component.tipos_contrato).toEqual({id:1});

  });


  it('Se debe obtener la plantilla de la minuta para el tipo de contrato dado', () => {

    const plantillas : any = [{    Id: 5,
      TipoContrato: {id:5},
      TipoPlantilla: 'aaaa',
      Plantilla: 'aaaa',
      Estilo: 'aaa'}];

    spy = spyOn(minutasArgoService, 'get').and.returnValue(of(plantillas)); 
    component.get_plantilla(17,'aaaa');
    expect(component.plantilla_minuta).toEqual({    Id: 5,
      TipoContrato: {id:5},
      TipoPlantilla: 'aaaa',
      Plantilla: 'aaaa',
      Estilo: 'aaa'});
  });

  it('Se deben obtener los parámetros de la plantilla para el tipo de contrato dado', () => {

    const parametros : any = [{id:5},{id:2},{id:3}];

    spy = spyOn(minutasArgoService, 'get').and.returnValue(of(parametros)); 
    component.get_parametro_minuta_tipo_contrato(17);
    expect(component.parametro_minuta_tipo_contrato).toEqual([{id:5},{id:2},{id:3}]);
  });

});