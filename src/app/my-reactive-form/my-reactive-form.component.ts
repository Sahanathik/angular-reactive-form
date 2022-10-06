import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-my-reactive-form',
  templateUrl: './my-reactive-form.component.html',
  styleUrls: ['./my-reactive-form.component.css']
})
export class MyReactiveFormComponent implements OnInit {

  userForm : FormGroup 

  constructor() { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      "email" : new FormControl("",Validators.required),
     
      "password" : new FormControl("",[Validators.required,Validators.minLength(4)]),
      "address": new FormGroup({
        "address2" : new FormControl(),
        "address" : new FormControl("",[Validators.required,Validators.minLength(4)]),
        "city" : new FormControl(),
        "zip" : new FormControl(),
      }),
     
      "exampleCheck1" : new FormControl(false)

    })

    
  }

  get password() { return this.userForm.get('password') }

  onSubmit(){
    console.log(this.userForm)
  }

  setvalue(){
    this.userForm.setValue({
      email : 'saha@gmail.com',
      password : 'jdgsf',
      address : {
        address : 'wlkfi',
      address2 : 'skjdfkjs',
      city : 'erode',
      zip : 'skdjkjdgs'
      },
      exampleCheck1 : true
      
    })
  }
}
