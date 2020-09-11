import { Component, OnInit,} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminService } from '../admin.service';
import { mimeType } from './mimetype-validator';
import { AdminAuthService } from 'src/app/auth/admin.auth.service';

@Component({
  selector: 'app-add-agent',
  templateUrl: './add-agent.component.html',
  styleUrls: ['./add-agent.component.css']
})
export class AddAgentComponent implements OnInit {
  adminForm : FormGroup;
  imagePreview: string;

  constructor(private adminService : AdminService, private adminAuthService: AdminAuthService) { }

  ngOnInit(): void {
    this.init();
  }

  private init() {
    this.adminForm = new FormGroup({
      name : new FormControl(null, [Validators.required]),
      email : new FormControl(null, [Validators.required, Validators.email]),
      password : new FormControl(null, [Validators.required, Validators.minLength(8)]),
      image : new FormControl(null, [Validators.required], [mimeType])
    });
  }
  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.adminForm.patchValue({ image: file });
    this.adminForm.get('image').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = (reader.result as string);
    }
    reader.readAsDataURL(file);
  }

  onSubmit() {
    if(!this.adminForm.valid) {
      return;
    }
    this.adminService.createAgent(this.adminForm.value);
  }

  logout() {
    this.adminAuthService.logout();
  }

}
