import { Component } from '@angular/core';
import './ckeditor.loader';
import 'ckeditor';
import { MinutasArgoService } from '../../../@core/data/minutas_argo.service';
import { ContratoService } from '../../../@core/data/contrato.service';
import { PlantillaMinuta } from '../../../@core/data/models/plantilla_minuta';
import { ParametroMinutaTipoContrato } from '../../../@core/data/models/parametro_minuta_tipo_contrato';
import { TxtFilter } from '../../../@core/pipes/txt-filter.pipe';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import Swal from 'sweetalert2';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import 'style-loader!angular2-toaster/toaster.css';
import * as jspdf from 'jspdf';
//import * as html2canvas from 'html2canvas';





//window['CKEDITOR_BASEPATH'] = '//cdn.ckeditor.com/4.6.2/full-all/';


@Component({
  selector: 'ngx-grid',
  styleUrls: ['./plantillas.component.scss'],
  templateUrl: './plantillas.component.html',
  providers: [
    // The locale would typically be provided on the root module of your application. We do it at
    // the component level here, due to limitations of our example generation script.
    {provide: MAT_DATE_LOCALE, useValue: 'es-CO'},

    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
    // `MatMomentDateModule` in your applications root module. We provide it at the component level
    // here, due to limitations of our example generation script.
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
})
export class PlantillasComponent {

  dependencias_res: any;
  tipos_contrato: any;
  dependencia_solicitante: string;
  plantilla_minuta: PlantillaMinuta;  
  tipo_contrato: any;
  parametro_minuta_tipo_contrato: ParametroMinutaTipoContrato;
  texto_filtro: any;
  crear: boolean;
  config: ToasterConfig;
  info_plantilla: PlantillaMinuta;


constructor(
  private contratoService: ContratoService,
  private minutasArgoService: MinutasArgoService,
  private txtFilter: TxtFilter,
  private toasterService: ToasterService
){

  this.dependencias_res =[
    {
      nombre: 'Sección de Compras',
      id: 'Compras'
    },
    {
      nombre: 'IDEXUD',
      id: 'Idexud'
    },
    {
      nombre: 'Oficina Asesora Jurídica',
      id: 'Juridica'
    } 
    ];
    
  this.crear = false;
}

get_tipo_contrato_dependencia(dependencia: String):void{

  this.contratoService.get('tipo_contrato_dependencia/'+this.dependencia_solicitante)
  .subscribe(res => {
    if (res !== null) {
      this.tipos_contrato = res;
      
    }
  });


}

get_plantilla(tipo_contrato: number, tipo_plantilla: string):void{

  this.minutasArgoService.get('plantilla_minuta/?query=TipoContrato.Id:'+tipo_contrato+',TipoPlantilla:'+tipo_plantilla+'&sortby=FechaVigencia&order=desc&limit=1')
  .subscribe(res => {
    if (res !== null) {
      this.plantilla_minuta =<PlantillaMinuta> res[0];
      this.get_parametro_minuta_tipo_contrato(tipo_contrato);
    }
  });


}

get_parametro_minuta_tipo_contrato(tipo_contrato: number):void{

  this.minutasArgoService.get('parametro_minuta_tipo_contrato/?query=TipoContrato.Id:'+tipo_contrato+'&limit=-1')
  .subscribe(res => {
    if (res !== null) {
      this.parametro_minuta_tipo_contrato =<ParametroMinutaTipoContrato> res;

    }
  });
}

update_plantilla_minuta(plantilla: any): void {

  const opt: any = {
    title: 'Update?',
    text: 'Update Plantilla!',
    icon: 'warning',
    buttons: true,
    dangerMode: true,
    showCancelButton: true,
  };
  Swal(opt)
  .then((willUpdate) => {
    if (willUpdate.value) {
      this.minutasArgoService.put('plantilla_minuta', <PlantillaMinuta>plantilla)
        .subscribe(res => {
          this.get_plantilla(this.tipo_contrato.IdTipoContrato, this.tipo_contrato.TipoPlantilla);
         // this.eventChange.emit(true);
          this.showToast('info', 'updated', 'Genero updated');
        });
    }
  });
}

create_plantilla_minuta(plantilla: any): void {
  const opt: any = {
    title: 'Create?',
    text: 'Create Plantilla!',
    icon: 'warning',
    buttons: true,
    dangerMode: true,
    showCancelButton: true,
  };
  Swal(opt)
  .then((willCreate) => {
    if (willCreate.value) {
      this.info_plantilla = <PlantillaMinuta>plantilla;
      this.info_plantilla.Id = null;
      this.minutasArgoService.post('plantilla_minuta', this.info_plantilla)
        .subscribe(res => {
          this.get_plantilla(this.tipo_contrato.IdTipoContrato, this.tipo_contrato.TipoPlantilla);
          this.crear = false;
          this.showToast('info', 'created', 'Genero created');
        });
    }
  });
}

private showToast(type: string, title: string, body: string) {
  this.config = new ToasterConfig({
    // 'toast-top-full-width', 'toast-bottom-full-width', 'toast-top-left', 'toast-top-center'
    positionClass: 'toast-top-center',
    timeout: 5000,  // ms
    newestOnTop: true,
    tapToDismiss: false, // hide on click
    preventDuplicates: true,
    animation: 'slideDown', // 'fade', 'flyLeft', 'flyRight', 'slideDown', 'slideUp'
    limit: 5,
  });
  const toast: Toast = {
    type: type, // 'default', 'info', 'success', 'warning', 'error'
    title: title,
    body: body,
    showCloseButton: true,
    bodyOutputType: BodyOutputType.TrustedHtml,
  };
  this.toasterService.popAsync(toast);
}


generar_pdf(html : string)  
{  

  
  var data = document.getElementById('contentToConvert');  
  let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
  var position = 0;  
  pdf.addHTML(data,function() {
    pdf.save('web.pdf');
});

 /* html2canvas(data).then(canvas => {  
    // Few necessary setting options  
    var imgWidth = 208;   
    var pageHeight = 295;    
    var imgHeight = canvas.height * imgWidth / canvas.width;  
    var heightLeft = imgHeight;  

    //const contentDataURL = canvas.toDataURL('image/png')  
    let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
    var position = 0;  
    pdf.addHTML(html,function() {
      pdf.save('web.pdf');
  });
    //pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
    //pdf.save('MYPdf.pdf'); // Generated PDF   
  });  */
}

}