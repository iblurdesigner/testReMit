import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ListComponent } from "./list/list.component";
import { InspecterComponent } from "./inspecter/inspecter.component";

@NgModule({
  declarations: [ListComponent, InspecterComponent],
  exports: [InspecterComponent, ListComponent],
  imports: [CommonModule],
})
export class InspecModule { }