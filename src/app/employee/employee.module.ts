import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeelistingComponent } from './employeelisting/employeelisting.component';
import { ManageemployeeComponent } from './manageemployee/manageemployee.component';


@NgModule({
  declarations: [
    EmployeelistingComponent,
    ManageemployeeComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
