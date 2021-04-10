import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  changeForm: FormGroup;
  private readonly pswrd: RegExp = /^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/;

  constructor(private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.changeForm = this.fb.group({
      oldPassword: this.fb.control('', Validators.required),
      newPassword: this.fb.control('', [Validators.required, this.psswrdValidator.bind(this)]),
      confirmPassword: this.fb.control('', [Validators.required, this.psswrdValidator.bind(this)])
    },
      { validators: this.checkPasswords }
    );
  }

  private psswrdValidator(control: AbstractControl): ValidationErrors | null {
    if (control?.value) {
      const isValid = this.pswrd.test(control.value);
      return !isValid ? { invalidPassword: true } : null;

    }

    return null;
  }

  private checkPasswords(group: FormGroup): ValidationErrors | null {
    if (!group) {

      return;
    }
    const newPassword = group.get('newPassword').value;
    const confirmPassword = group.get('confirmPassword').value;

    return newPassword === confirmPassword ? null : { notSame: true };
  }
}
