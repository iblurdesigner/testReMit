import { Component } from '@angular/core';
import { Req } from '../interfaces/req.interface';

@Component({
  selector: 'req0401-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

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
    },
    {
      name: 'Requisito 04',
      code: '004-02-04'
    },
    {
      name: 'Requisito 05',
      code: '004-02-05'
    },
    {
      name: 'Requisito 06',
      code: '004-02-06'
    },
    {
      name: 'Requisito 07',
      code: '004-02-07'
    }
  ]

  onNewRequi(addReq: Req):void {
    console.log('MainPage')
    console.log(addReq)
  }

}
