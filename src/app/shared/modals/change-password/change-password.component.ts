import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ValidationErrors
} from '@angular/forms';
import { passwordValidator } from '../../validators/password-validator.directive';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  changeForm: FormGroup;

  constructor(private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.changeForm = this.fb.group({
      oldPassword: this.fb.control('', Validators.required),
      newPassword: this.fb.control('', [Validators.required, passwordValidator]),
      confirmPassword: this.fb.control('', [Validators.required, passwordValidator])
    },
      { validators: this.checkPasswords }
    );
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
