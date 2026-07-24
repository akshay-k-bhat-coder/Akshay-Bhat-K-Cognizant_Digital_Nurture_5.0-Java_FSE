import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RouterLink } from '@angular/router';
import { CourseCard } from '../../components/course-card/course-card';
import { selectEnrolledCourses } from '../../store/enrollment/enrollment.selectors';

@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [CommonModule, CourseCard, RouterLink],
  templateUrl: './student-profile.html',
  styleUrl: './student-profile.css',
})
export class StudentProfile implements OnInit {
  student = {
    name: 'Akshay Bhat',
    email: 'akshay@example.com',
    id: '1',
    gpa: 3.8,
  };

  enrolledCourses$!: Observable<any[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.enrolledCourses$ = this.store.select(selectEnrolledCourses);
  }
}
