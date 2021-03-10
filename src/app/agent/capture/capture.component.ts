import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder, Validators } from '@angular/forms';
import { AgentService } from '../agent.service';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';
import { externalParameters, externalBranches } from './state-file';
import { Agent } from 'src/app/shared/agent.model';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
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
  loading: boolean = false;
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
    console.log(this.webcamImage.imageAsDataUrl);
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
    private SpinnerService: NgxSpinnerService,
    private agentService : AgentService, 
    private authService : AuthService, 
    public formBuilder: FormBuilder,
    private router: Router
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
      phone_no : ['', Validators.compose([Validators.required, Validators.maxLength(10),Validators.minLength(10), Validators.pattern(/^[0-9]+[0-9]*$/)])],
      state : ['', Validators.required],
      next_of_kin_name : ['', Validators.required],
      next_of_kin_address : ['', Validators.required],
      next_of_kin_phone_no : ['', Validators.compose([Validators.required, Validators.maxLength(10), Validators.pattern(/^[0-9]+[0-9]*$/)])],
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
    if (this.agentForm.value.zone == 'PTD'){
      this.lga = myStates.units;
    }
    else{
      this.lga = myStates.lga;
    }
    if (this.agentForm.value.uniqueId && this.agentForm.value.uniqueId !== null) {
      this.uniqueId = this.agentForm.value.uniqueId;
    } else {
      this.calculateUniqueId();
    }
    
  }

  onSubmit() {
    this.agentForm.value.uniqueId = this.uniqueId ? this.uniqueId : this.agentForm.value.uniqueId;
    this.agentForm.value.image = this.webcamImage ? this.webcamImage.imageAsDataUrl : null;
    // if(!this.agentForm.valid && this.agentForm.value.image === null) {
    //   return;
    // }
    this.SpinnerService.show();
    this.agentService.createUser(this.fingerprintID, this.agentForm.value)
    .pipe(finalize(() => {
      this.uniqueId = null;
      this.SpinnerService.hide(); 
    }))
    .subscribe(responseData => {
      // DO nothing
      this.router.navigateByUrl('/agent/dashboard');
    });
  }

  fetchUser() {
    this.SpinnerService.show();
    this.agentService.getUserByFingerId(this.fingerprintID)
    .pipe(finalize(() => {
      this.SpinnerService.hide(); 
    }))
      .subscribe(response => {
        this.agentForm.setValue({
          firstname: response.user.firstname ? response.user.firstname : '',
          uniqueId: response.user.uniqueId ? response.user.uniqueId : '',
          middlename: response.user.middlename ? response.user.middlename : '',
          verifiedId: response.user.verifiedId ? response.user.verifiedId : '',
          vehicleNumber: response.user.vehicleNumber ? response.user.vehicleNumber : '',
          verifiedIdType: response.user.verifiedIdType ? response.user.verifiedIdType : '',
          transportation_type: response.user.transportation_type ? response.user.transportation_type : '',
          surname: response.user.surname ? response.user.surname : '',
          gender: response.user.gender ? response.user.gender : '',
          address: response.user.address ? response.user.address : '',
          zone: response.user.zone ? response.user.zone : '',
          branch: response.user.branch ? response.user.branch : '',
          dob: response.user.dob ? response.user.dob : '',
          unit: response.user.unit ? response.user.unit : '',
          phone_no: response.user.phone_no ? response.user.phone_no : '',
          state: response.user.state ? response.user.state : '',
          next_of_kin_name: response.user.next_of_kin_name ? response.user.next_of_kin_name : '',
          next_of_kin_address: response.user.next_of_kin_address ? response.user.next_of_kin_address : '',
          next_of_kin_phone_no: response.user.next_of_kin_phone_no ? response.user.next_of_kin_phone_no : '',
          image: '',
          signature: '',
          email: response.user.email ? response.user.email : ''
        });
        if(this.agentForm.value.zone) {
          this.selectZone(this.agentForm.value.zone);
          if(this.agentForm.value.state) {
            this.selectState(this.agentForm.value.state);
          }
        }
      })
  }

  logout() {
    this.authService.logout();
  }

}
