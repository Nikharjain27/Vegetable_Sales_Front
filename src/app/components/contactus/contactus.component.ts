import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    const tokenExpirationTime = localStorage.getItem("tokenExpirationTime");
    if(tokenExpirationTime){
      const nowTime = new Date().getTime();
      if(nowTime-(+tokenExpirationTime) > 0){
        alert("Session Expired. Please Login Again...");
        this.router.navigate(['/login']);
      }
    }
  }
  
  thankYou(){
    alert("Thank You !!")
  }

}
