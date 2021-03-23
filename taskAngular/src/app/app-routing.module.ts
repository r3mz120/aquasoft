import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeesComponent} from './employees/employees.component'
import {ProjectsComponent} from './projects/projects.component'

const routes: Routes = [

  { path: '', redirectTo: '/projects', pathMatch: 'full' },
  { path: 'projects', component: ProjectsComponent },
  { path: 'employees', component: EmployeesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
