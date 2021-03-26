import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {FormBuilder, FormGroup} from '@angular/forms';
// import custom validator to validate that password and confirm password fields match
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  cinFile;
  stegFile;
  public imagePath;
  photo: any;
  fakeCin: any;
  fakeSteg: any;
  public message: string;


  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  registerForm: FormGroup;
  submitted = false;
  mobilePattern = '^((\\+91-?)|0)?[0-9]$';

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private route: Router) {
  }

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
  get f() {
    return this.registerForm.controls;
  }

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
    const formData = new FormData();
    const user = this.form;
    formData.append('userInfo', JSON.stringify(user));
    formData.append('cin', this.cinFile);
    console.log(this.cinFile);
    formData.append('steg', this.stegFile);
    console.log(this.stegFile);
    console.log(formData);
    this.authService.register(formData).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        alert(data.message);
        this.route.navigate(['login']);
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

  onSelectCIN(event) {
    if (event.target.files.length > 0) {
      const cin = event.target.files[0];
      this.cinFile = cin;
    }
  }

  onSelectSteg(event) {
    if (event.target.files.length > 0) {
      const steg = event.target.files[0];
      this.stegFile = steg;

      const mimeType = event.target.files[0].type;
      if (mimeType.match(/image\/*/) == null) {
        console.log('Only images are supported.');
        return;
      }
    }
  }
}
