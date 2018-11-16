import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-multiple-form',
  templateUrl: './reactive-multiple-form.component.html',
  styleUrls: ['./reactive-multiple-form.component.css']
})
export class ReactiveMultipleFormComponent implements OnInit {

  loginForm;
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: [{ value: 'Abc@gmail.com', disabled: true }, [Validators.required, Validators.email]],
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

}
