import { CommonModule } from '@angular/common';
import { Highlight } from '../../directives/highlight';
import { Output, EventEmitter } from '@angular/core';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, take } from 'rxjs';
import { selectEnrolledIds } from '../../store/enrollment/enrollment.selectors';
import { enrollInCourse, unenrollFromCourse } from '../../store/enrollment/enrollment.actions';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule, Highlight, CreditLabelPipe],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css',
})
export class CourseCard implements OnChanges {
  @Input()
  course: any;

  enrolledIds$: Observable<number[]>;

  constructor(private store: Store) {
    this.enrolledIds$ = this.store.select(selectEnrolledIds);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Course changed:', changes['course']);
  }

  @Output()
  enrollCourse = new EventEmitter<any>();
  @Output()
  enrollRequested = new EventEmitter<number>();
  isExpanded = false;

  @Output()
  viewCourse = new EventEmitter<number>();

  @Output()
  deleteCourseEvent = new EventEmitter<number>();

  onEnroll() {
    this.toggleEnroll();
    this.enrollRequested.emit(this.course.id);
  }

  toggleEnroll() {
    this.enrolledIds$.pipe(take(1)).subscribe((ids) => {
      const courseId = this.course.id;
      if (ids.some((id) => String(id) === String(courseId))) {
        this.store.dispatch(unenrollFromCourse({ courseId }));
      } else {
        this.store.dispatch(enrollInCourse({ courseId }));
      }
    });
  }

  viewDetails() {
    alert('CourseCard clicked');
    console.log('Course ID:', this.course.id);

    this.viewCourse.emit(this.course.id);
  }

  toggleDetails() {
    this.isExpanded = !this.isExpanded;
  }

  deleteCourse() {
    this.deleteCourseEvent.emit(this.course.id);
  }

  get cardClasses() {
    return {
      'card--full': this.course.credits >= 4,
      expanded: this.isExpanded,
    };
  }
}
