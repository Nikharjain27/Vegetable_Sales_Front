import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loggedIn:boolean;

  constructor(private router: Router,private customerService: CustomerService){}

  navigate(){
    this.router.navigate(['/product'])
    this.loggedIn = this.customerService.isLoggedIn();
    if(this.loggedIn){
      this.router.navigate(['/profile']);
    }
    else{
      this.router.navigate(['/login']);
    }
  }

  ngOnInit(): void {
  }

}
