import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AgentService } from '../agent.service';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';

@Component({
  selector: 'app-capture',
  templateUrl: './capture.component.html',
  styleUrls: ['./capture.component.css']
})
export class CaptureComponent implements OnInit {
  agentForm : FormGroup;
  states:any = [];
  title: string = "Take Picture";
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
  private nextWebcam: Subject<boolean|string> = new Subject<boolean|string>();

  public triggerSnapshot(): void {
    this.trigger.next();
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

  public showNextWebcam(directionOrDeviceId: boolean|string): void {
    this.nextWebcam.next(directionOrDeviceId);
  }

  public handleImage(webcamImage: WebcamImage): void {
    console.info('received webcam image', webcamImage);
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

  public get nextWebcamObservable(): Observable<boolean|string> {
    return this.nextWebcam.asObservable();
  }
  constructor(private agentService : AgentService, private authService : AuthService) { }

  ngOnInit(): void {
    WebcamUtil.getAvailableVideoInputs()
      .then((mediaDevices: MediaDeviceInfo[]) => {
        this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
      });
    this.init();
    this.agentService.getStates()
      .subscribe(responseData => {
        console.log(responseData);
        this.states = responseData;
      });
  }

  private init() {
    this.agentForm = new FormGroup({
      firstname : new FormControl(null, [Validators.required]),
      middlename : new FormControl(null, [Validators.required]),
      lastname : new FormControl(null, [Validators.required]),
      email : new FormControl(null, [Validators.required, Validators.email]),
      gender : new FormControl(null, [Validators.required]),
      dob : new FormControl(null, [Validators.required]),
      zone : new FormControl(null, [Validators.required]),
      unit : new FormControl(null, [Validators.required]),
      phone_no : new FormControl(null, [Validators.required]),
      state : new FormControl(null, [Validators.required]),
      vehicle_no : new FormControl(null, [Validators.required]),
      image : new FormControl(null),
      fingerprint_thumb : new FormControl(null),
      fingerprint_index : new FormControl(null)
    });
  }

  onSubmit() {
    if(!this.agentForm.valid) {
      return;
    }
    this.agentService.createUser(this.agentForm.value);
  }

  logout() {
    this.authService.logout()
  }

}
