import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCard } from '../../components/course-card/course-card';
import { CourseService } from '../../services/course';
import { Router } from '@angular/router';
import { Course } from '../../models/course';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { loadCourses } from '../../store/course/course.actions';
import { selectAllCourses, selectCoursesLoading } from '../../store/course/course.selectors';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseList implements OnInit {
  courses$!: Observable<Course[]>;
  loading$!: Observable<boolean>;

  constructor(
    private store: Store,
    private courseService: CourseService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.courses$ = this.store.select(selectAllCourses);

    this.loading$ = this.store.select(selectCoursesLoading);

    this.store.dispatch(loadCourses());
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

        // Reload courses until DELETE is migrated to NgRx
        this.store.dispatch(loadCourses());
      },

      error: (err) => console.error(err),
    });
  }
}
