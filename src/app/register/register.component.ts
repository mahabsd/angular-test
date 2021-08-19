import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
form
  constructor() { 
    this.form = new FormGroup({
      username: new FormControl('',),
      email: new FormControl('',),
      password: new FormControl('',),
      phone: new FormControl('')
    })
  }

  ngOnInit(): void {

  }
  submit(){
    console.log(this.form.value);
    
  }

}
