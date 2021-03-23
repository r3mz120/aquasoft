import { Component, OnInit } from '@angular/core';
import {Project} from "../project";
import {ProjectsService} from "../projects.service"

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects!:Project[];

  constructor( private projectsService:ProjectsService) { }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects():void{
    this.projectsService.getProjects().subscribe(projects=>this.projects = projects)
  }
}
