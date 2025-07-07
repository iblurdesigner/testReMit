import { Component, EventEmitter, Output } from '@angular/core';
import { Req } from '../../interfaces/req.interface';

@Component({
  selector: 'add-req',
  templateUrl: './add-req.component.html',
  styleUrls: ['./add-req.component.css']
})
export class AddReqComponent {

  // esto es un evento que se emite al padre
  @Output()
  public onNewAddReq: EventEmitter<Req> = new EventEmitter();

  public requisito: Req = {
      name: 'Requisito 1',
      code: '101'
  }

  emitRequisito(): void {

    // validaciones para que no vengan sin nombres
    if(this.requisito.name.length === 0) return;

    // esto va a emitir el objeto
    this.onNewAddReq.emit(this.requisito)

    this.requisito = { name: '', code: '' };
  }

}
