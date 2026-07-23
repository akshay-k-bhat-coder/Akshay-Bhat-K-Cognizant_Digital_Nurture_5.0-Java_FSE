import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCard } from '../../components/course-card/course-card';
import { CourseService } from '../../services/course';
import { Router } from '@angular/router';
import { Course } from '../../models/course';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseList implements OnInit {
  isLoading = true;
  courses: Course[] = [];

  onEnroll(course: any) {
    this.courseService.enrollCourse(course);
    alert(`You enrolled in ${course.name}`);
  }

  constructor(
    private courseService: CourseService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.courseService.getCourses().subscribe({
      next: (data) => {
        this.courses = data;

        this.isLoading = false;
      },

      error: (err) => {
        console.error(err);

        this.isLoading = false;
      },
    });
  }

  trackByCourseId(index: number, course: any): number {
    // trackBy improves performance by reusing DOM elements
    // instead of recreating them when the list changes.
    return course.id;
  }

  viewCourse(courseId: number) {
    console.log('Navigating...');

    this.router.navigate(['/courses', courseId]).then((result) => {
      console.log('Navigation Result:', result);
    });
  }

  deleteCourse(courseId: number) {
    if (!confirm('Delete this course?')) {
      return;
    }

    this.courseService.deleteCourse(courseId).subscribe({
      next: () => {
        alert('Course deleted successfully.');

        this.courses = this.courses.filter((c) => c.id !== courseId);
      },

      error: (err) => console.error(err),
    });
  }
}
