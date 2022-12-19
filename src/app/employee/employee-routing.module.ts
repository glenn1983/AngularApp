import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeelistingComponent } from './employeelisting/employeelisting.component';
import { ManageemployeeComponent } from './manageemployee/manageemployee.component';

const routes: Routes = [
  {path:"empList",component:EmployeelistingComponent},
  {path:'addemp',component:ManageemployeeComponent},
  {path:'editemp/{id}',component:ManageemployeeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
