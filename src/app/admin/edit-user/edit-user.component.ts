import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AgentService } from '../../agent/agent.service';
import { Subject} from 'rxjs';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';
import { User } from 'src/app/shared/users.model';
import { AdminService } from '../admin.service';
import { finalize } from 'rxjs/operators';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  title: string = "Take Picture";
  user: User;
  userId: string;
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
    private SpinnerService: NgxSpinnerService,
    private route: ActivatedRoute,
    private agentService: AgentService,
    private authService: AuthService,
    public formBuilder: FormBuilder,
    private adminService: AdminService,
    private router: Router
  ) {
    WebcamUtil.getAvailableVideoInputs()
      .then((mediaDevices: MediaDeviceInfo[]) => {
        this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
      });
  }

  ngOnInit(): void {
    this.init();
    this.route.params.subscribe(
      (params: Params) => {
        this.SpinnerService.show();
        if (params['user']) {
          this.userId = params['user'];
          console.log(this.userId, 'param user')
          this.adminService.getUserById(this.userId)
            .pipe(finalize(() => {
              this.SpinnerService.hide();
            }))
            .subscribe(response => {
              this.user = response.user;
              this.agentForm.setValue({
                firstname: response.user.firstname,
                uniqueId: response.user.uniqueId,
                middlename: response.user.middlename,
                verifiedId: response.user.verifiedId,
                vehicleNumber: response.user.vehicleNumber,
                verifiedIdType: response.user.verifiedIdType,
                transportation_type: response.user.transportation_type,
                surname: response.user.surname,
                gender: response.user.gender,
                address: response.user.address,
                zone: response.user.zone,
                branch: response.user.branch,
                dob: response.user.dob,
                unit: response.user.unit,
                phone_no: response.user.phone_no,
                state: response.user.state,
                next_of_kin_name: response.user.next_of_kin_name,
                next_of_kin_address: response.user.next_of_kin_address,
                next_of_kin_phone_no: response.user.next_of_kin_phone_no,
                image: '',
                email: response.user.email
              });
            });
        }
      }
    );
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
      email: ['', Validators.compose([Validators.required, Validators.email])],
    });
  }

  onSubmit() {
    if (this.webcamImage != null) {
      this.agentForm.value.image = this.webcamImage.imageAsDataUrl;
    } else {
      this.agentForm.value.image = null;
    }
    this.SpinnerService.show();
    this.adminService.editUser(this.agentForm.value, this.userId)
      .subscribe(response => {
        this.SpinnerService.hide();
        this.router.navigateByUrl('/admin/dashboard');
      }, error => {
        this.SpinnerService.hide();
      })
      // this.router.navigateByUrl('/admin/dashboard');
    // this.agentService.createUser(this.agentForm.value);
  }

  logout() {
    this.authService.logout();
  }

}
