import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder, Validators } from '@angular/forms';
import { AgentService } from '../agent.service';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';
import { externalParameters, externalBranches } from './state-file';
import { Agent } from 'src/app/shared/agent.model';
import { HttpClient,HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {  throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ErrorComponent } from '../../error/error.component';
const _zones = externalParameters.zones;
const _branches = externalBranches.branches;
@Component({
  selector: 'app-capture',
  templateUrl: './capture.component.html',
  styleUrls: ['./capture.component.css']
})
export class CaptureComponent implements OnInit {
  agentForm : FormGroup;
  zones : string[] = _zones;
  branches: string[] = _branches;
  states: any;
  selectedStates: any;
  leftFingerImage: string;
  rightFingerImage: string;
  lga: any[];
  fingerPrintError: string;
  uniqueId: string;
  userInformation : Agent;
  showThumbImage:boolean = false;
  showRightThumbImage:boolean = false;
  title: string = "Take Picture";
  configUrl = 'https://localhost:8443/SGIFPCapture';
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
    this.showWebcam = false;
  }

  toggleWebcam() {
    this.showWebcam = !this.showWebcam;
    if (this.showWebcam == true) {
     this.title = "Take Picture";
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

  getConfig() {
     var secugen_lic = "";
    const headerDict = {
    'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
    }
    let data = {licstr: "", Timeout: "10000", templateFormat: "ISO"};
    var params = "Timeout=" + "10000";
    params += "&Quality=" + "50";
    params += "&licstr=" + encodeURIComponent(secugen_lic);
    params += "&templateFormat=" + "ISO";
    params += "&imageWSQRate=" + "0.75";
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
   
  return this.http.post(this.configUrl,null, {headers:new HttpHeaders(headerDict), params: data}).pipe(catchError(this.handleError));
  }

  constructor(
    private agentService : AgentService, 
    private authService : AuthService, 
    public formBuilder: FormBuilder,
    private http: HttpClient,
    private dialog : MatDialog
    ) { }

  ngOnInit(): void {
    WebcamUtil.getAvailableVideoInputs()
      .then((mediaDevices: MediaDeviceInfo[]) => {
        this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
      });
    this.init();
    this.authService.getAgentDataStatus()
    .subscribe(responseData => {
      this.userInformation = responseData;
    });
  }
  

  private init() {
    this.agentForm = this.formBuilder.group({
      firstname : ['', Validators.required],
      uniqueId: ['', Validators.nullValidator],
      middlename : ['', Validators.required],
      verifiedId : ['', Validators.required],
      vehicleNumber: ['', Validators.required],
      verifiedIdType: ['', Validators.required],
      transportation_type: ['', Validators.required],
      surname : ['', Validators.required],
      gender : ['', Validators.required],
      address : ['', Validators.required],
      zone : ['', Validators.required],
      branch : ['', Validators.required],
      dob : ['', Validators.required],
      unit : ['', Validators.required],
      phone_no : ['', Validators.compose([Validators.required, Validators.pattern(/^[0-9]+[0-9]*$/)])],
      state : ['', Validators.required],
      next_of_kin_name : ['', Validators.required],
      next_of_kin_address : ['', Validators.required],
      next_of_kin_phone_no : ['', Validators.required],
      image : ['', Validators.nullValidator],
      signature : [Validators.nullValidator],
      fingerprint_image : [Validators.nullValidator],
      fingerprint_encode : [Validators.nullValidator],
      email: ['', Validators.compose([Validators.required, Validators.email])],
    });
  }

  selectZone(value: any){
    if(value == "Kaduna") 
      this.states = externalParameters.kaduna_states;
    else if (value == "Lagos")
      this.states = externalParameters.lagos_states;
    else if (value == "Warri")
      this.states = externalParameters.warri_states;
    else 
      this.states = externalParameters.port_harcourt_zones;
  }

  calculateUniqueId(){
    var id = this.agentForm.value.state.substring(0,3).toUpperCase();
    var firstInitial = this.agentForm.value.firstname.substring(0,1);
    var secondInitial = this.agentForm.value.surname.substring(0,1);
    var arr = []
    while(arr.length < 1){
      var randomnumber=Math.ceil(Math.random()*3000)
      if(arr.indexOf(randomnumber) === -1){arr.push(randomnumber)}  
    }
    var uniqueid = this.agentForm.value.branch + '/' + id + '/' + arr.toString() + firstInitial + secondInitial;
    this.uniqueId = uniqueid
  }

  selectState(value){
    const myStates = this.states.find(state => state.state === value);
    this.lga = myStates.lga;
    this.calculateUniqueId();
  }

  captureLeft() {
  this.getConfig()
    .subscribe(
      (data:any) => {
        this.showThumbImage = true;
        console.log(data);
        if (data != null && data.BMPBase64.length > 0) {
          this.leftFingerImage = "data:image/bmp;base64," + data.BMPBase64;
          this.agentForm.value.fingerprint_image = "data:image/bmp;base64," + data.BMPBase64;
          this.agentForm.value.fingerprint_encode = data.TemplateBase64;
        }
             }, // success path
      error => {
         this.showThumbImage = false;
       this.fingerPrintError =  this.ErrorCodeToString(error.ErrorCode); 
       this.dialog.open(ErrorComponent, {data : {message: this.fingerPrintError}});
      } // error path
    );
  }

   captureRight() {
  this.getConfig()
    .subscribe(
      (data:any) => {
        this.showRightThumbImage = true;
        console.log(data);
        if (data != null && data.BMPBase64.length > 0) {
          this.rightFingerImage = "data:image/bmp;base64," + data.BMPBase64;
        }
             }, // success path
      error => {
         this.showRightThumbImage = false;
       this.fingerPrintError =  this.ErrorCodeToString(error.ErrorCode); 
       this.dialog.open(ErrorComponent, {data : {message: this.fingerPrintError}});
      } // error path
    );
  }

  private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error.message);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  // return an observable with a user-facing error message
  return throwError(
    'Something bad happened; please try again later.');
};

  onSubmit() {
    this.agentForm.value.uniqueId = this.uniqueId;
    this.agentForm.value.image = this.webcamImage.imageAsDataUrl;
    // if(!this.agentForm.valid && this.agentForm.value.image === null) {
    //   return;
    // }
    
    this.agentService.createUser(this.agentForm.value);
  }

  logout() {
    this.authService.logout();
  }

  ErrorCodeToString(ErrorCode) {
        var Description;
        switch (ErrorCode) {
            // 0 - 999 - Comes from SgFplib.h
            // 1,000 - 9,999 - SGIBioSrv errors 
            // 10,000 - 99,999 license errors
            case 51:
                Description = "System file load failure";
                break;
            case 52:
                Description = "Sensor chip initialization failed";
                break;
            case 53:
                Description = "Device not found";
                break;
            case 54:
                Description = "Fingerprint image capture timeout";
                break;
            case 55:
                Description = "No device available";
                break;
            case 56:
                Description = "Driver load failed";
                break;
            case 57:
                Description = "Wrong Image";
                break;
            case 58:
                Description = "Lack of bandwidth";
                break;
            case 59:
                Description = "Device Busy";
                break;
            case 60:
                Description = "Cannot get serial number of the device";
                break;
            case 61:
                Description = "Unsupported device";
                break;
            case 63:
                Description = "SgiBioSrv didn't start; Try image capture again";
                break;
            default:
                Description = "Unknown error code or Update code to reflect latest result";
                break;
        }
        return Description;
    }

}
