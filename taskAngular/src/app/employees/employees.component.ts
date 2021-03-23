import { Component, OnInit ,TemplateRef} from '@angular/core';
import {Employee} from "../employee";
import {EmployeesService} from "../employees.service"
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-projects',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  modalRef!: BsModalRef;
  employees!:Employee[];

  constructor( private employeesService:EmployeesService,private modalService: BsModalService) { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees():void{
    this.employeesService.getEmployees().subscribe(employees=>this.employees = employees)
  }

  delete(employee:Employee):void{
    this.employees = this.employees.splice(this.employees.indexOf(employee)-1,1)
    this.employeesService.deleteEmployee(employee.id).subscribe();
  }
}