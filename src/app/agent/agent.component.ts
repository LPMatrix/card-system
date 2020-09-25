import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit {

  credentialsForm: FormGroup;
  title = "Login";

  constructor(private router: Router) { 
  	
  }

   register() {
  	this.title = "Please wait....";
   }

   ngOnInit(): void {
     this.credentialsForm = new FormGroup({
       email :  new FormControl(null, [Validators.required]),
       password : new FormControl(null, [Validators.required])
     });
  }

}
