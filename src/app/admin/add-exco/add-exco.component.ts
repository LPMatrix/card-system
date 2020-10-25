import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminService } from '../admin.service';
import { mimeType } from '../add-agent/mimetype-validator';
import { AdminAuthService } from 'src/app/auth/admin.auth.service';
import { externalBranches } from '../../agent/capture/state-file';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
const _branches = externalBranches.branches;

@Component({
  selector: 'app-add-exco',
  templateUrl: './add-exco.component.html',
  styleUrls: ['./add-exco.component.css']
})
export class AddExcoComponent implements OnInit {
  adminForm : FormGroup;
  imagePreview: string;
  branches: string[] = _branches;

  constructor(
    private adminService : AdminService,
    private adminAuthService: AdminAuthService,
    private SpinnerService: NgxSpinnerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.init();
  }

  private init() {
    this.adminForm = new FormGroup({
      name : new FormControl(null, [Validators.required]),
      email : new FormControl(null, [Validators.required, Validators.email]),
      branch: new FormControl(null, [Validators.required]),
      password : new FormControl(null, [Validators.required, Validators.minLength(8)]),
      image : new FormControl(null, [Validators.required])
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
    this.adminForm.value.image = this.imagePreview;
    if(!this.adminForm.valid) {
      return;
    }
    this.SpinnerService.show();
    this.adminService.createExcoAgent(this.adminForm.value)
    .pipe(finalize(() => {
      this.SpinnerService.hide();
    }))
    .subscribe(response => {
      this.router.navigateByUrl('/admin/excos');
    });;
  }

  logout() {
    this.adminAuthService.logout();
  }

}
