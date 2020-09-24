import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AdminService } from '../admin.service';
import { AdminAuthService } from 'src/app/auth/admin.auth.service';
import { finalize } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {
  @ViewChild('content') content: ElementRef;
  uniqueID: string;
  user: any;

  constructor(
    private SpinnerService: NgxSpinnerService,
    private adminService: AdminService,
    private adminAuthService: AdminAuthService
    ) { }

  ngOnInit(): void {
  }

  // makePDF() { 
  //   const doc = new jsPDF();
  //   const specialElementHandlers = {
  //     '#content': function (element, renderer) {
  //       return true;
  //     }
  //   };
  //   const pdfTable = this.content.nativeElement;
  //   doc.html(pdfTable.innerHTML, {
  //     callback: function(){
  //       doc.save('person.pdf');
  //    }
  //   });
  // }

  print() {
    window.print();
  }

  fetchUser() {
    if (this.uniqueID !== '') {
      this.SpinnerService.show();
      this.adminService.getUserDetailById(this.uniqueID)
      .pipe(finalize(() => {
        this.SpinnerService.hide();
      })).subscribe(responseData => {
        this.user = responseData.user;
      });

    }
  }

  logout() {
    this.adminAuthService.logout();
  }

}
