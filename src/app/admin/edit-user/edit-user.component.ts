import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AgentService } from '../../agent/agent.service';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';
import { User } from 'src/app/shared/users.model';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  title: string = "Take Picture";
  users: User;
  agentForm: FormGroup;
  // toggle webcam on/off
  public showWebcam = false;
  public allowCameraSwitch = true;
  public multipleWebcamsAvailable = false;
  public deviceId: string;
  public videoOptions: MediaTrackConstraints = {
    // width: {ideal: 1024},
    // height: {ideal: 576}
  };
  public errors: WebcamInitError[] = [];

  // latest snapshot
  public webcamImage: WebcamImage = null;

  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();
  // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
  private nextWebcam: Subject<boolean | string> = new Subject<boolean | string>();

  public triggerSnapshot(): void {
    this.trigger.next();
    this.toggleWebcam();
  }

  toggleWebcam() {
    this.showWebcam = !this.showWebcam;
    if (this.showWebcam == true) {
      this.title = "Switch Camera Off";
    }
    else {
      this.title = "Take Picture";
    }
  }


  public handleInitError(error: WebcamInitError): void {
    this.errors.push(error);
  }

  public showNextWebcam(directionOrDeviceId: boolean | string): void {
    this.nextWebcam.next(directionOrDeviceId);
  }

  public handleImage(webcamImage: WebcamImage): void {
    this.webcamImage = webcamImage;
    this.showWebcam = !this.showWebcam;
  }

  public cameraWasSwitched(deviceId: string): void {
    console.log('active device: ' + deviceId);
    this.deviceId = deviceId;
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  public get nextWebcamObservable(): Observable<boolean | string> {
    return this.nextWebcam.asObservable();
  }

  constructor(
    private agentService: AgentService,
    private authService: AuthService,
    public formBuilder: FormBuilder,
    private adminService: AdminService
  ) {
    WebcamUtil.getAvailableVideoInputs()
      .then((mediaDevices: MediaDeviceInfo[]) => {
        this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
      });
    this.init();
  }

  ngOnInit(): void {
    this.users = history.state;
  }

  private init() {
    this.agentForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      uniqueId: ['', Validators.nullValidator],
      middlename: ['', Validators.required],
      verifiedId: ['', Validators.required],
      vehicleNumber: ['', Validators.required],
      verifiedIdType: ['', Validators.required],
      transportation_type: ['', Validators.required],
      surname: ['', Validators.required],
      gender: ['', Validators.required],
      address: ['', Validators.required],
      zone: ['', Validators.required],
      branch: ['', Validators.required],
      dob: ['', Validators.required],
      unit: ['', Validators.required],
      phone_no: ['', Validators.compose([Validators.required, Validators.pattern(/^[0-9]+[0-9]*$/)])],
      state: ['', Validators.required],
      next_of_kin_name: ['', Validators.required],
      next_of_kin_address: ['', Validators.required],
      next_of_kin_phone_no: ['', Validators.required],
      image: ['', Validators.nullValidator],
      signature: [Validators.nullValidator],
      fingerprint_image: [Validators.nullValidator],
      fingerprint_encode: [Validators.nullValidator],
      email: ['', Validators.compose([Validators.required, Validators.email])],
    });
  }

  onSubmit() {
    this.agentForm.value.image = this.webcamImage.imageAsDataUrl ? this.webcamImage.imageAsDataUrl: null;
    // if (!this.agentForm.valid) {
    //   return;
    // }
    this.adminService.editUser(this.agentForm.value, this.users._id);
    // this.agentService.createUser(this.agentForm.value);
  }

  logout() {
    this.authService.logout();
  }

}
