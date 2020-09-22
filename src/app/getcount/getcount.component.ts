import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Agent } from 'src/app/shared/agent.model';
import { User } from 'src/app/shared/users.model';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-getcount',
  templateUrl: './getcount.component.html',
  styleUrls: ['./getcount.component.css']
})
export class GetcountComponent implements OnInit {
  counts: { userCount: number, agentCount: number } = { userCount: 0, agentCount: 0 };
  constructor(private http: HttpClient,) { 
   
  }

  ngOnInit(): void {
    this.geAgentUsers();
  }

  geAgentUsers() {
    this.http.get('https://digicapture.herokuapp.com/api/admin/v1/digi/66f94e9574a3d9ce/users',)
        .pipe(tap(responseData => {
          console.log('responseData');
        }));
}

}
