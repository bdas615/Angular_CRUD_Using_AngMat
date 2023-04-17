import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { DialogRef } from '@angular/cdk/dialog';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss']
})
export class EmpAddEditComponent implements OnInit{

  empForm : FormGroup;

  education:string[] = [
    'X',
    'XII',
    'Diploma',
    'Graduation/Bachelors',
    'Post Graduation/Masters'
  ];

  constructor(private fb:FormBuilder,
              private empServ:EmployeeService,
              private _dialogRef:MatDialogRef<EmpAddEditComponent>) {
    this.empForm = this.fb.group({
      firstName: '',
      lastName:'',
      email:'',
      dob:'',
      gender:'',
      education:'',
      company:'',
      experience:'',
      package:''
    });
  }

  ngOnInit(){  }

  onFormSubmit(){

      console.log(this.empForm.value);

      this.empServ.addEmployees(this.empForm.value).subscribe({
        next:(res:any)=>{
          alert('Employee added successfully');
          this._dialogRef.close(true);
        },
        error:(err:any)=>{
          console.log(err);
        }
      })


  }


}
