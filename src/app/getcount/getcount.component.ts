import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/shared/users.model';
import { finalize } from 'rxjs/operators';
import { environment } from '../../environments/environment';
const BACKEND_URL = environment.apiUrl;
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-getcount',
  templateUrl: './getcount.component.html',
  styleUrls: ['./getcount.component.css']
})
export class GetcountComponent implements OnInit {
  // counts: { userCount: number, agentCount: number } = { userCount: 0, agentCount: 0 };
  users: User[];
  userCount: number; PTDCount: number; IMBCount: number; ELDCount: number;
  LPGARCount: number; OGSCount: number; SUTAKEPCount: number; PSWCount: number;
  PTD: User[] = []; IMB: User[] = []; ELD: User[] = []; LPGAR: User[] = [];
  OGS: User[] = []; SUTAKEP: User[] = []; PSW: User[] = [];
  constructor(
    private http: HttpClient,
    private SpinnerService: NgxSpinnerService,
  ) {

  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.SpinnerService.show();
    this.http.get<{ users: User[] }>(BACKEND_URL + 'admin/users/count')
      .pipe(finalize(() => {
        this.SpinnerService.hide();
      }))
      .subscribe(response => {
        this.users = response.users;
        this.PTD = [...this.users.filter(p => p.branch === 'PTD')];
        this.IMB = [...this.users.filter(p => p.branch === 'IMB')];
        this.ELD = [...this.users.filter(p => p.branch === 'ELD')];
        this.LPGAR = [...this.users.filter(p => p.branch === 'LPGAR')];
        this.OGS = [...this.users.filter(p => p.branch === 'OGS')];
        this.SUTAKEP = [...this.users.filter(p => p.branch === 'SUTAKEP')];
        this.PSW = [...this.users.filter(p => p.branch === 'PSW')];
        this.userCount = this.users.length;
        this.PTDCount = this.PTD.length;
        this.IMBCount = this.IMB.length;
        this.ELDCount = this.ELD.length;
        this.LPGARCount = this.LPGAR.length;
        this.OGSCount = this.OGS.length;
        this.SUTAKEPCount = this.SUTAKEP.length;
        this.PSWCount = this.PSW.length;
      });

  }

}
