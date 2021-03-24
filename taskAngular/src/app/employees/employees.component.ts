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
  currentEmployee !:Employee;
  constructor( private employeesService:EmployeesService,private modalService: BsModalService) { }

  openModal(template: TemplateRef<any>,employee:Employee) {
    this.modalRef = this.modalService.show(template);
    this.currentEmployee = employee;
  }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees():void{
    this.employeesService.getEmployees().subscribe(employees=>this.employees = employees)
  }

  saveEmployee(): void {
    this.employeesService.updateEmployee(this.currentEmployee)
      .subscribe();
      this.modalRef.hide()
  }

  delete(employee:Employee):void{
    // this.employees = this.employees.splice(this.employees.indexOf(employee)-1,1)
    this.employees = this.employees.filter(e=>e!==employee)
    this.employeesService.deleteEmployee(employee.id).subscribe();
  }
}