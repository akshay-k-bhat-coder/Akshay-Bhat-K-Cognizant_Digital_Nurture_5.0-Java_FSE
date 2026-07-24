import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, FormArray, AbstractControl, ValidationErrors, AsyncValidatorFn } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Component({
  selector: 'app-reactive-enrollment',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-enrollment.html',
  styleUrl: './reactive-enrollment.css',
})
export class ReactiveEnrollment {
  enrollmentForm;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.enrollmentForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email], [this.uniqueEmailValidator()]],
      courses: this.fb.array([this.createCourseGroup()]),
    });

    this.enrollmentForm.valueChanges.subscribe((value) => {
      console.log('Form Changed', value);
    });
  }

  createCourseGroup() {
    return this.fb.group({
      courseCode: ['', [Validators.required, this.courseCodeValidator]],
      courseName: ['', [Validators.required]],
    });
  }

  // Synchronous validator rejecting course codes starting with 'XX'
  courseCodeValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (value && String(value).toUpperCase().startsWith('XX')) {
      return { invalidCourseCode: true };
    }
    return null;
  }

  // Asynchronous validator simulating email uniqueness checks with an 800ms delay
  uniqueEmailValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      if (!control.value) return of(null);
      return of(control.value).pipe(
        delay(800),
        map((email) => {
          const takenEmails = ['taken@gmail.com', 'admin@gmail.com', 'test@gmail.com'];
          if (takenEmails.includes(email.toLowerCase())) {
            return { emailTaken: true };
          }
          return null;
        })
      );
    };
  }

  get name() {
    return this.enrollmentForm.get('name');
  }

  get email() {
    return this.enrollmentForm.get('email');
  }

  get courses() {
    return this.enrollmentForm.get('courses') as FormArray;
  }

  addCourse() {
    this.courses.push(this.createCourseGroup());
  }

  removeCourse(index: number) {
    if (this.courses.length > 1) {
      this.courses.removeAt(index);
    }
  }

  onSubmit() {
    if (this.enrollmentForm.valid) {
      this.submitted = true;
      console.log('Submitted Payload:', this.enrollmentForm.value);

      alert(
        `Enrollment Successful!\n\n` +
          `Name: ${this.enrollmentForm.value.name}\n` +
          `Email: ${this.enrollmentForm.value.email}\n` +
          `Courses Enrolled: ${this.enrollmentForm.value.courses?.length || 0}`,
      );

      this.enrollmentForm.reset();
      this.submitted = false;
    }
  }

  loadStudent() {
    this.enrollmentForm.patchValue({
      name: 'Akshay Bhat',
      email: 'akshay@gmail.com',
    });

    this.courses.clear();
    this.courses.push(this.fb.group({
      courseCode: ['ANG201', [Validators.required, this.courseCodeValidator]],
      courseName: ['Angular', [Validators.required]],
    }));
  }
}
