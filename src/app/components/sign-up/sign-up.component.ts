import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  confirmPassword:string = ""
  customer:any = {
    customerName : "",
    customerEmail: "",
    customerPhone: "",
    customerPassword: ""
  }

  printCustomer(){
    console.log(this.customer);
  }
}
