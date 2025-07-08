import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  onDeleteReqIndex(index:number): void {
    console.log(index)
  }

  @Output()
  public OnDelete: EventEmitter<string> = new EventEmitter();

  onDeleteReq(id?: string): void {
    if (!id) return;
    
    this.OnDelete.emit(id);
  }
  

}
