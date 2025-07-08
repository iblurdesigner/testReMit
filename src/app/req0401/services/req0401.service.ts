import { Injectable } from '@angular/core';
import { Req } from '../interfaces/req.interface';

@Injectable({providedIn: 'root'})
export class Req0401Service {
  
  public requisites: Req[] = [
    {
      name: 'Requisito 01',
      code: '004-02-01'
    },
    {
      name: 'Requisito 02',
      code: '004-02-02'
    },
    {
      name: 'Requisito 03',
      code: '004-02-03'
    }
  ]

  onNewRequi(requisito: Req):void {
    this.requisites.push(requisito);
  }

  onDeleteReqMain(index: number): void {
    this.requisites.splice(index, 1);
  }
  
}