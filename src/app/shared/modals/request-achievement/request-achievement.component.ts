import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-request-achievement',
  templateUrl: './request-achievement.component.html',
  styleUrls: ['./request-achievement.component.scss']
})
export class RequestAchievementComponent implements OnInit {
  achievements = [
    { name: 'Exoft turbo power' },
    { name: 'Exoft skylark power' },
    { name: 'Exoft owl power' },
    { name: 'Exoft party power' },
    { name: 'Exoft mentor power' },
  ];

  inputForm: FormGroup;

  constructor(private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.inputForm = this.fb.group({
      achievement: this.fb.control(null, Validators.required),
      message: this.fb.control('', Validators.required),
    });
  }

  submit(): void {
    if (this.inputForm.valid) {
      alert('You requested an achievement');
    }
  }

}
