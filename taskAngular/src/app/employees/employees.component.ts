import { Component, OnInit ,TemplateRef} from '@angular/core';
import {Employee} from "../employee";
import {Project} from "../project";
import {EmployeesService} from "../employees.service"
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { ProjectsService } from '../projects.service';


enum actions{
  Add,
  Edit
}

@Component({
  selector: 'app-projects',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  selected?:Object;
  actions = actions;
  action!:actions;
  modalRef!: BsModalRef;
  employees!:Employee[];
  currentEmployee !:Employee;
  projects!:Project[];
  selectedProject!:Project;
  constructor( private employeesService:EmployeesService,private modalService: BsModalService,private toastr: ToastrService, private projectsService:ProjectsService) { }

  openModal(template: TemplateRef<any>,act:actions ):void {
    
    switch(+act){
      case this.actions.Add:
        this.action = act;
        this.currentEmployee = {} as Employee;
        this.modalRef = this.modalService.show(template);
     
       break;
      case this.actions.Edit:
        this.modalRef = this.modalService.show(template);
        this.action = act;
        break;
    }
  }

  setCurrentEmployee(employee:Employee):void{
    this.currentEmployee = employee;
  }

  ngOnInit(): void {
    this.getEmployees();
    this.getProjects();
  }

  getEmployees():void{
    this.employeesService.getEmployees().subscribe(employees=>{this.employees = employees
    
    console.log(this.employees)})
  }

  getProjects():void{
    this.projectsService.getProjects().subscribe(projects=>
      this.projects=projects
    )}

  saveEmployee(): void {
    this.employeesService.updateEmployee(this.currentEmployee)
      .subscribe((res)=>{
      if(res.status==200){
        this.toastr.success('Employee updated!');
      }
      else {
        this.toastr.error('Server error!')
      }
      });
      this.modalRef.hide()
  }

  delete(employee:Employee):void{
    
   
    this.employeesService.deleteEmployee(employee.id).subscribe((res)=>{
      console.log(res.status);
      if(res.status==200){
        // this.employees = this.employees.splice(this.employees.indexOf(employee)-1,1)
        this.employees = this.employees.filter(e=>e!==employee)
      }
    else{
        this.toastr.error('Server error!')
    }
    });
  }

  addEmployee():void{
    let errors:string[] = [];
    if(!this.currentEmployee.name){
      errors.push("Name field is empty!");
    }
   else if(!this.currentEmployee.email){
      errors.push("Email field is empty!")
    }
   else  if(!this.currentEmployee.hire_date){
      errors.push("Hire date field is empty!")
    }
   else  if(!this.currentEmployee.job_title){
      errors.push("Job title field is empty!")
    }
  else if(!this.currentEmployee.salary){
      errors.push("Salary field is empty!")
    }
   else if(!(this.currentEmployee.name.length>2 && this.currentEmployee.name.match('^[a-zA-Z]*$')))
   {
    errors.push("Invalid name!")
   }
   else if(!(this.currentEmployee.salary>0 && Number(this.currentEmployee.salary===this.currentEmployee.salary)) ){
     errors.push("Invalid salary!")
   }
   else if(!this.currentEmployee.email.match('^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9.]{2,5}$')){
     errors.push("Invalid email!")
  }
  else if(!this.currentEmployee.hire_date.match(/^((0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4})|(\d{4})[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/))
{
  errors.push("Invalid hire date!")
}



    if(errors.length===0){
      console.log(this.selectedProject);
      this.currentEmployee.projectId = this.selectedProject.id;
      this.employeesService.addEmployee(this.currentEmployee).subscribe( (res)=> {
        if(res.status==201){
          this.employees.push(this.currentEmployee)
          this.toastr.success('Employee added!');
      }
      else{
        this.toastr.error('Server error!');
      }
      }) 
    }
    else{
      errors.forEach(error=>{
        this.toastr.error(error);
      })
     
    }
   
  }
}