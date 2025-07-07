import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddReqComponent } from './components/add-req/add-req.component';



@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AddReqComponent
  ],
  exports: [MainPageComponent],
  imports: [
    CommonModule
  ]
})
export class Req0401Module { }
