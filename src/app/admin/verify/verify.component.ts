import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { AdminService } from '../admin.service';
import { AdminAuthService } from 'src/app/auth/admin.auth.service';
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

  constructor(private adminService: AdminService, private adminAuthService: AdminAuthService) { }

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

  print(){
    window.print();
  }

  fetchUser(){
    if(this.uniqueID != '')
    this.adminService.getUserDetailById(this.uniqueID).subscribe(responseData => {
      this.user = responseData.user;
      console.log(this.user);
    });
  }

  logout() {
    this.adminAuthService.logout();
  }

}
