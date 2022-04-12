import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css']
})
export class FormControlComponent implements OnInit {
  myform! : FormGroup
  constructor( private fb : FormBuilder) { }

  ngOnInit(): void {
    this.myform = this.fb.group({
      firstName: ['',Validators.required ],
      lastName: ['',Validators.required],
      address: this.fb.group({
        
        city: ['', Validators.required],
        state: ['', Validators.required],
        PIN: ['', Validators.required]
      })
    });
  };
onSubmit(){
  console.log(this.myform.value)
}
}
