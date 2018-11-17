import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {CustomeValidator} from './testValidator'

@Component({
  selector: 'app-reactive-multiple-form',
  templateUrl: './reactive-multiple-form.component.html',
  styleUrls: ['./reactive-multiple-form.component.css']
})
export class ReactiveMultipleFormComponent implements OnInit {

  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email, CustomeValidator.haveSpace, CustomeValidator.haveDotCom ]],
      password: ['', Validators.required],
      address: this.fb.group({
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: ''
      })
    })
  }

  submitForm() {
    // console.log(this.loginForm.value)
    console.log(this.loginForm.getRawValue())
  }

  resetForm(){
    this.loginForm.reset();
  }

  // loginForm = new FormGroup({
  //   email: new FormControl('', [Validators.required, Validators.email]),
  //   password: new FormControl('', Validators.required)
  // });

  get emailControl() {
    return this.loginForm.get('email')
  }

  get passControl() {
    return this.loginForm.get('password')
  }

  displayGroup() {
    console.log(this.loginForm);
  }

  setDataToform() {
    this.loginForm.setValue({
      email: 'sample@value.com',
      password: '123',
      address: {
        addressLine1: 'line-1',
        addressLine2: 'line-2',
        city: '1',
        state: 'state'
      }
    });
  }

  setFewDataToform() {
    this.loginForm.patchValue({
      email: 'sample@value.com',
      password: '123',      
    });
  }

}
