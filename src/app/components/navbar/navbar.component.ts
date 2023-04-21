import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loggedIn = localStorage.getItem('authenticationToken');

  constructor(private router: Router,private customerService: CustomerService){}

  navigate(){
    if(this.isLoggedIn()==true){
      this.router.navigate(['/profile']);
    }
    else{
      this.router.navigate(['/login']);
    }
  }
  
  ngOnInit(): void {
  }

  isLoggedIn() {
    let tokenStr = localStorage.getItem('authenticationToken');
    if (tokenStr == undefined || tokenStr == '' || tokenStr == null) {
      return false;
    } else {
      return true;
    }
  }

}
