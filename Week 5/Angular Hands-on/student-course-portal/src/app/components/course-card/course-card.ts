import { CommonModule } from '@angular/common';
import { Highlight } from '../../directives/highlight';
import { Output, EventEmitter } from '@angular/core';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';
import { Component, Input, OnChanges, OnInit, OnDestroy, SimpleChanges } from '@angular/core';

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

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Course changed:', changes['course']);
  }

  @Output()
  enrollCourse = new EventEmitter<any>();
  isExpanded = false;

  @Output()
  viewCourse = new EventEmitter<number>();

  @Output()
  deleteCourseEvent = new EventEmitter<number>();

  onEnroll() {
    this.enrollCourse.emit(this.course);
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
      'card--enrolled': this.course.enrolled,
      'card--full': this.course.credits >= 4,
      expanded: this.isExpanded,
    };
  }
}
