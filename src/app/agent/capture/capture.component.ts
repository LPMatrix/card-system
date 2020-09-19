import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder, Validators } from '@angular/forms';
import { AgentService } from '../agent.service';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';
import { externalParameters, externalBranches } from './state-file';
import { Agent } from 'src/app/shared/agent.model';
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
  fingerprintID: string;
  states: any;
  selectedStates: any;
  lga: any[];
  uniqueId: string;
  userInformation : Agent;
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


  constructor(
    private agentService : AgentService, 
    private authService : AuthService, 
    public formBuilder: FormBuilder,
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
      middlename : [''],
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

  onSubmit() {
    this.agentForm.value.uniqueId = this.uniqueId;
    this.agentForm.value.image = this.webcamImage.imageAsDataUrl;
    // if(!this.agentForm.valid && this.agentForm.value.image === null) {
    //   return;
    // }

    this.agentService.createUser(this.fingerprintID, this.agentForm.value);
  }

  fetchUser() {
    this.agentService.getUserByFingerId(this.fingerprintID)
      .subscribe(response => {
        this.agentForm.setValue({
          firstname: response.user.firstname,
          uniqueId: '',
          middlename: response.user.middlename,
          verifiedId: '',
          vehicleNumber: '',
          verifiedIdType: '',
          transportation_type: '',
          surname: response.user.surname,
          gender: '',
          address: '',
          zone: '',
          branch: '',
          dob: '',
          unit: '',
          phone_no: '',
          state: '',
          next_of_kin_name: '',
          next_of_kin_address: '',
          next_of_kin_phone_no: '',
          image: '',
          signature: '',
          email: ''
        });
      })
  }

  logout() {
    this.authService.logout();
  }

}
