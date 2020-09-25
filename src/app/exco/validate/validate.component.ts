import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Agent } from '../../shared/agent.model';
import { NgxSpinnerService } from 'ngx-spinner';
import { AgentService } from 'src/app/agent/agent.service';
import { finalize } from 'rxjs/operators';
import { ExcoAuthService } from 'src/app/auth/exco.auth.service';

@Component({
  selector: 'app-validate',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.css']
})
export class ValidateComponent implements OnInit {
  @ViewChild('content') content: ElementRef;
  uniqueID: string;
  userInformation: Agent;
  user: any;
  constructor(
    private SpinnerService: NgxSpinnerService,
    private exoAuthService: ExcoAuthService,
    private agentService: AgentService
  ) { }

  ngOnInit(): void {
  }

  fetchUser() {
    // if(this.uniqueID != '')
    if (this.uniqueID !== '') {
      this.SpinnerService.show();
      this.agentService.getUserDetailById(this.uniqueID)
        .pipe(finalize(() => {
          this.SpinnerService.hide();
        }))
        .subscribe(responseData => {
          this.user = responseData.user;
        });
    }
  }

  logout() {
    this.exoAuthService.logout();
  }

}
