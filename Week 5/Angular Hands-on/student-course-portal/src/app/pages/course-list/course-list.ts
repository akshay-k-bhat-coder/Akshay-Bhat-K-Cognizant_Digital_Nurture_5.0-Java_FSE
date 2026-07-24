import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCard } from '../../components/course-card/course-card';
import { CourseService } from '../../services/course';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Course } from '../../models/course';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';

import { loadCourses } from '../../store/course/course.actions';
import { selectAllCourses, selectCoursesLoading } from '../../store/course/course.selectors';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCard, FormsModule],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseList implements OnInit {
  courses$!: Observable<Course[]>;
  filteredCourses$!: Observable<Course[]>;
  loading$!: Observable<boolean>;
  searchTerm: string = '';

  constructor(
    private store: Store,
    private courseService: CourseService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.courses$ = this.store.select(selectAllCourses);
    this.loading$ = this.store.select(selectCoursesLoading);
    this.store.dispatch(loadCourses());

    this.route.queryParamMap.subscribe((params) => {
      this.searchTerm = params.get('search') || '';
      this.filterCourses();
    });
  }

  filterCourses() {
    this.filteredCourses$ = this.courses$.pipe(
      map((courses) => {
        if (!this.searchTerm) return courses;
        const term = this.searchTerm.toLowerCase();
        return courses.filter((c) =>
          c.name.toLowerCase().includes(term) ||
          c.code.toLowerCase().includes(term)
        );
      })
    );
  }

  onSearchChange(term: string) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { search: term || null },
      queryParamsHandling: 'merge',
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

        // Reload courses until DELETE is migrated to NgRx
        this.store.dispatch(loadCourses());
      },

      error: (err: any) => console.error(err),
    });
  }
}
