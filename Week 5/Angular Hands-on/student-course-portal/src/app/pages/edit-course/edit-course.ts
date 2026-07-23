import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { CourseService } from '../../services/course';
import { Course } from '../../models/course';

@Component({
  selector: 'app-edit-course',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-course.html',
  styleUrl: './edit-course.css',
})
export class EditCourse implements OnInit {
  course!: Course;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private courseService: CourseService,
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.courseService.getCourseById(id).subscribe({
      next: (data) => (this.course = data),
      error: (err) => console.error(err),
    });
  }

  updateCourse() {
    this.courseService.updateCourse(this.course).subscribe({
      next: () => {
        alert('Course Updated Successfully!');

        this.router.navigate(['/courses']);
      },

      error: (err) => console.error(err),
    });
  }
}
