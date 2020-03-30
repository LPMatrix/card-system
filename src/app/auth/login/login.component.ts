import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentialsForm: FormGroup;
  title = "Login";

  constructor(public formBuilder: FormBuilder,public router: Router) { 
  	this.credentialsForm = this.formBuilder.group({
  	  	name: ['', Validators.required],
	    password: ['', Validators.required]
	});
  }

   register() {
  	this.title = "Please wait....";
    this.router.navigateByUrl("home"); 
    console.log("clicked")
   }

  ngOnInit(): void {
  }

}
