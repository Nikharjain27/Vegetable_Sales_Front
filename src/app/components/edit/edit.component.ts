import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Customer } from 'src/app/entities/customer';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  customers: Customer[];
  constructor(public _dialogRef: MatDialogRef<EditComponent>, @Inject(MAT_DIALOG_DATA) public data:any, @Inject(MAT_DIALOG_DATA) public customerData: any,) { }


  ngOnInit(): void {
    this.customers = this.customerData.customer;
  }

  close(){
    this._dialogRef.close();
  }

}
