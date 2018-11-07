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







import { PlantillasComponent } from './plantillas.component';

describe('PlantillasComponent', () => {
  let component: PlantillasComponent;
  let fixture: ComponentFixture<PlantillasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
       imports: [ThemeModule, CKEditorModule] ,
      declarations: [ PlantillasComponent ],
      providers: [ContratoService,HttpClient, HttpHandler,MinutasArgoService, ToasterService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantillasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Las dependencias deben estar definidas', () => {
    expect(component.dependencias_res).toBeDefined();
  });

});