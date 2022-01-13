import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup , Validators} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  //mail= new FormControl('', [Validators.required, Validators.email]); //declarar nuevo formControl

  form:FormGroup;
  constructor (private formBuilder: FormBuilder){
    this.form= this.formBuilder.group(
      {
        password:['',[Validators.required, Validators.minLength(8)]],
        mail:['', [Validators.required, Validators.email]]
      }
    )
   }


   get Password()
  {
    return this.form.get("password");
  }
  get Mail()
  {
   return this.form.get("mail");
  }
  get PasswordValid()
  {
    return this.Password?.touched && !this.Password?.valid;
  }
  get MailValid()
  {
    return this.Mail?.touched && !this.Mail?.valid;
  }

  ngOnInit(): void {
    //this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

}
