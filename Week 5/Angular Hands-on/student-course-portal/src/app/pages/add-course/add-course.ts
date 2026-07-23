import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { CourseService } from '../../services/course';

@Component({
  selector: 'app-add-course',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-course.html',
  styleUrl: './add-course.css',
})
export class AddCourse {
  courseForm;

  constructor(
    private fb: FormBuilder,
    private courseService: CourseService,
    private router: Router,
  ) {
    this.courseForm = this.fb.group({
      code: ['', Validators.required],

      name: ['', [Validators.required, Validators.minLength(3)]],

      credits: [3, [Validators.required, Validators.min(1)]],
    });
  }

  get code() {
    return this.courseForm.get('code');
  }

  get name() {
    return this.courseForm.get('name');
  }

  get credits() {
    return this.courseForm.get('credits');
  }

  onSubmit() {
    if (this.courseForm.invalid) {
      return;
    }

    const course = {
      code: this.courseForm.value.code!,
      name: this.courseForm.value.name!,
      credits: this.courseForm.value.credits!,
      gradeStatus: 'Not Graded',
      enrolled: false,
    };

    this.courseService.createCourse(course).subscribe({
      next: () => {
        alert('Course added successfully!');

        this.courseForm.reset({
          credits: 3,
        });

        this.router.navigate(['/courses']);
      },

      error: (err) => {
        console.error(err);

        alert('Unable to add course.');
      },
    });
  }
}
