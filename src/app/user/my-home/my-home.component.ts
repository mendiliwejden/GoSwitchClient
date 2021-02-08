import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css']
})
export class MyHomeComponent  {
/* 
  registerForm: FormGroup;
  submitted = false;

constructor(private formBuilder: FormBuilder) { }

ngOnInit() {
    this.registerForm = this.formBuilder.group({
        title: ['', Validators.required],
        adresse: ['', Validators.required],
        Etages: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
        acceptTerms: [false, Validators.requiredTrue]
    });
}

// convenience getter for easy access to form fields
get f() { return this.registerForm.controls; } */
model: any = {};

onSubmit() {
  /* 
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4)); */
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model, null, 4));
}
/* 
onReset() {
    this.submitted = false;
    this.registerForm.reset();
} */
}
