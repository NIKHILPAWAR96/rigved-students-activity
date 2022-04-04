import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { customePipe } from './employee-data/employee.pipe.component';
import { AppComponent } from './app.component';
import { Activity2Component } from './activity2/activity2.component';
import { EmployeeDataComponent } from './employee-data/employee-data.component';

@NgModule({
  declarations: [
    AppComponent,
    Activity2Component,
    customePipe,
    EmployeeDataComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
