import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-reactive-form',
  templateUrl: './new-reactive-form.component.html',
  styleUrls: ['./new-reactive-form.component.css']
})
export class NewReactiveFormComponent implements OnInit {

  userForm : FormGroup
  constructor() { }

  ngOnInit(): void {

    this.userForm = new FormGroup({
      "email" : new FormControl("", Validators.required),
      "password" : new FormControl("", Validators.required),
      "address" : new FormGroup({
        "address1" : new FormControl(),
        "state" : new FormControl(),
      }),
      "check" : new FormControl()
    })

  }

  setvalue(){
    this.userForm.setValue({
      email : "saha@gmail.com",
      password : "sahana",
      check : true,
      address : {
        address1 : "sdf",
        state : "adsff"
      }
    })
  }

  patchvalue(){
    this.userForm.patchValue({
      email:"sahana@gmail.com"
    })
  }

  onSubmit(){
    console.log(this.userForm)
    // this.userForm.reset();
  }

}
