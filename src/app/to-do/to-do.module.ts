import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToDoRoutingModule } from './to-do-routing.module';
import { ToDoComponent } from './to-do/to-do.component';
import {AllModules} from "../app.module";

@NgModule({
  declarations: [
    ToDoComponent
  ],
  imports: [
    CommonModule,
    ToDoRoutingModule,
    AllModules
  ],exports:[ToDoComponent]
})
export class ToDoModule { }
