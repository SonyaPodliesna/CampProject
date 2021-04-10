import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;
  private readonly pswrd: RegExp = /^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/;

  constructor(private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      username: this.fb.control('', Validators.required),
      password: this.fb.control('', [Validators.required, this.psswrdValidator.bind(this)]),
    }
    );
  }

  private psswrdValidator(control: AbstractControl): ValidationErrors | null {
    if (control?.value) {
      const isValid = this.pswrd.test(control.value);
      return !isValid ? { invalidPassword: true } : null;

    }

    return null;
  }
}
