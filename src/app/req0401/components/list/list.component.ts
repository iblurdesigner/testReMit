import { Component, Input } from '@angular/core';
import { Req } from '../../interfaces/req.interface';

@Component({
  selector: 'req04-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public RequisList: Req[] = [
    {
      name: 'Ruc',
      code: '004-02-01'
    },
    {
      name: 'Permiso de Funcionamiento',
      code: '004-02-01'
    },

  ]

  onDeleteReq(index:number): void {
    console.log(index)
  }
}
