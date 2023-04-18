import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(public _dialogRef: MatDialogRef<EditComponent>, @Inject(MAT_DIALOG_DATA) public data:any) { }


  ngOnInit(): void {
  }

  close(){
    this._dialogRef.close();
  }

}
