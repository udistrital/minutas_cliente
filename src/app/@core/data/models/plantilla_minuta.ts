import { TipoContrato } from './tipo_contrato';


export class PlantillaMinuta {
    Id: number;
    TipoContrato: TipoContrato;
    TipoPlantilla: string;
    Plantilla: string;
    Estilo: string;
    FechaVigencia: Date;
}