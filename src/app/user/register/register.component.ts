import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import custom validator to validate that password and confirm password fields match
import { MustMatch } from '../../_helpers/must-match.validator'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  registerForm: FormGroup;
  submitted = false;
  mobilePattern="^((\\+91-?)|0)?[0-9]$"
  constructor(private formBuilder: FormBuilder, private authService: AuthService) { }
  ngOnInit(): void {
  }

  // ngOnInit() {
  //   this.registerForm = this.formBuilder.group({
  //     NumTel: ['', [Validators.required, Validators.minLength(8)]],
  //     firstName: ['', Validators.required],
  //     region: ['', Validators.required],
  //     destination: ['', Validators.required],
  //     cin: ['', Validators.required],
  //     steg: ['', Validators.required],
  //     lastName: ['', Validators.required],
  //     email: ['', [Validators.required, Validators.email]],
  //     password: ['', [Validators.required, Validators.minLength(6)]],
  //     confirmPassword: ['', Validators.required],
  //     time: ['', Validators.required]
  // }, {
  //     validator: MustMatch('password', 'confirmPassword')
  // });
  // }
  // // convenience getter for easy access to form fields
  get f() 
  { return this.registerForm.controls; }

  // onSubmit() {
  //   this.submitted = true;
  //   // stop here if form is invalid
  //   if (this.registerForm.invalid) {
  //       return;
  //   }
  //   else {this.authService.register(this.registerForm).subscribe(
  //         data => {
  //           console.log(data);
  //           this.isSuccessful = true;
  //           this.isSignUpFailed = false;
  //         },
  //         err => {
  //           this.errorMessage = err.error.message;
  //           this.isSignUpFailed = true;
  //         }
  //       );
  //     }
  // }

  onSubmit(): void {
    this.authService.register(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
