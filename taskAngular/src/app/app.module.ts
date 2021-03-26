import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { EmployeesComponent } from './employees/employees.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    EmployeesComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,  HttpClientModule, ModalModule.forRoot(),TabsModule.forRoot(),
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
  
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
