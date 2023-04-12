import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  customer:any = {
    customerEmail : "",
    customerPassword: ""
  }

  printCustomer(){
    console.log(this.customer);
  }
}
