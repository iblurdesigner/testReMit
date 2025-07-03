import { Component } from '@angular/core';

@Component({
  selector: 'inspections-inspecter',
  templateUrl: './inspecter.component.html',
  styleUrls: ['./inspecter.component.css']
})
export class InspecterComponent {

  public name: string = 'Inspecter';
  
  public fechaInspec:string = '12-10-2023';
  
  public horaInspec:string = '10:00 AM';
  
  public nameSitio: string = 'Sitio de Inspección';
  
  public dirSitio: string = '123 Main St, Ciudad, País';
  
  public citySitio: string = 'Ciudad';
  
  public stateInspec: string = 'Estado';


  changeName(newName: string): void {
    this.name = newName;
  }

  changeDate(newDate: string): void {
    this.fechaInspec = newDate;
  }
  
  resetForm(): void {
    this.name = 'Inspecter';
    this.fechaInspec = '12-10-2023';
    this.horaInspec = '10:00 AM';
    this.nameSitio = 'Sitio de Inspección';
    this.dirSitio = '123 Main St, Ciudad, País';
    this.citySitio = 'Ciudad';
    this.stateInspec = 'Estado';
  }

}
