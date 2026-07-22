import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-enrollment',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-enrollment.html',
  styleUrl: './reactive-enrollment.css',
})
export class ReactiveEnrollment {
  enrollmentForm;

  constructor(private fb: FormBuilder) {
    this.enrollmentForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],

      email: ['', [Validators.required, Validators.email]],

      course: ['', [Validators.required]],
    });
    this.enrollmentForm.valueChanges.subscribe((value) => {
      console.log('Form Changed');

      console.log(value);
    });
  }

  get name() {
    return this.enrollmentForm.get('name');
  }

  get email() {
    return this.enrollmentForm.get('email');
  }

  get course() {
    return this.enrollmentForm.get('course');
  }

  onSubmit() {
    if (this.enrollmentForm.valid) {
      console.log(this.enrollmentForm.value);

      alert(
        `Enrollment Successful!\n\n` +
          `Name: ${this.enrollmentForm.value.name}\n` +
          `Email: ${this.enrollmentForm.value.email}\n` +
          `Course: ${this.enrollmentForm.value.course}`,
      );

      this.enrollmentForm.reset();
    }
  }

  loadStudent() {
    this.enrollmentForm.patchValue({
      name: 'Akshay',

      email: 'akshay@gmail.com',

      course: 'Angular',
    });
  }
}
