import { Component } from '@angular/core';

@Component({
  selector: 'inspections-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {


  public Req0040201: string[] = [
    'Solicitud dirigida al Subsecretario de Puertos y Transporte Marítimo y Fluvial (Astilleros, Parrillas, Varaderos y Factorías Navales)',
    'Acuerdo  ministerial  autorizando  la  ocupación  de  la  zona  de  playas  y  bahías  (posterior  a  la  aprobación del Consejo Nacional de la Marina Mercante y Puertos - CNMMP)',
    'Permiso municipal de construcción y funcionamiento según el caso.', 'Autorización aduanera',
    'Autorización del Cuerpo de Bomberos (detalle de los productos y/o carga a manejar)',
    'Título de propiedad de los terrenos',
    'Constitución legal de la empresa o compañía, indicando sus accionistas y porcentajes de acciones',
    'Autorización de la Dirección Nacional de Hidrocarburos, para el manejo de hidrocarburos y sus derivados',
    'Nombramiento del representante legal'
  ]

  public deletedReq?: string;


  deleteLastReq():void {
    this.deletedReq = this.Req0040201.pop();
  }
}
