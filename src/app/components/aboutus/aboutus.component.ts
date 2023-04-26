import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    const tokenExpirationTime = localStorage.getItem("tokenExpirationTime");
    if(tokenExpirationTime){
      const nowTime = new Date().getTime();
      if(nowTime-(+tokenExpirationTime) > 0){
        alert("Session Expired. Please Login Again...");
        localStorage.clear();
        this.router.navigate(['/login']);
      }
    }
  }

}
