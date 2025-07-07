import { Component, EventEmitter, Output } from '@angular/core';
import { Req } from '../../interfaces/req.interface';

@Component({
  selector: 'add-req',
  templateUrl: './add-req.component.html',
  styleUrls: ['./add-req.component.css']
})
export class AddReqComponent {

  // esto va a exponer el valor que se va a emitir
  @Output()
  public onNewAddReq: EventEmitter<Req> = new EventEmitter();

  public addReq: Req = {
      name: 'Requisito 1',
      code: '101'
  }

  emitRequisito(): void {
    console.log(this.addReq)

    // validaciones para que no vengan sin nombres
    if(this.addReq.name.length === 0) return;

    // esto va a emitir el objeto
    this.onNewAddReq.emit(this.addReq)

    this.addReq.name = '',
    this.addReq.code = ''
  }

}
