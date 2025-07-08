import { Injectable } from '@angular/core';

import { Req } from '../interfaces/req.interface';
import { v4 as uuid } from 'uuid';


@Injectable({providedIn: 'root'})
export class Req0401Service {
  
  public requisites: Req[] = [
    {
      id: uuid(),
      name: 'Requisito 01',
      code: '004-02-01'
    },
    {
      id: uuid(),
      name: 'Requisito 02',
      code: '004-02-02'
    },
    {
      id: uuid(),
      name: 'Requisito 03',
      code: '004-02-03'
    }
  ]

  addRequi(requisito: Req):void {

    const newRequi: Req = {
      id: uuid(),
      ...requisito
    }
    
    this.requisites.push(newRequi);
  }

  // onDeleteReqMain(index: number): void {
  //   this.requisites.splice(index, 1);
  // }

  deleteReqById(id: string): void {
    this.requisites = this.requisites.filter(req => req.id !== id);
  }
  
}