import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userArrray : any[]=[
    {userId:100, name:"alex", dob:"1998-10-11"},
    {userId:101, name:"bruce", dob:"1998-1-23"},
    
  ]

  constructor() { }
  public getUsers() : any[] {
    return this.userArrray;
  }
}
