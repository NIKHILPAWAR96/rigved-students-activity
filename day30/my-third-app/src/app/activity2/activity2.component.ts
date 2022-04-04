import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity2',
  templateUrl: './activity2.component.html',
  styleUrls: ['./activity2.component.css']
})
export class Activity2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  employee ={
    Id : 100, Name:"Nikhil", Salary : 26000
  }
  emp ={
    Name : " Vikas"
  }
}
