import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCard } from '../../components/course-card/course-card';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseList implements OnInit {
  isLoading = true;

  courses = [
    {
      id: 1,
      name: 'Angular Fundamentals',
      code: 'CS101',
      credits: 4,
      gradeStatus: 'passed',
      enrolled: false,
    },
    {
      id: 2,
      name: 'Spring Boot 3',
      code: 'CS102',
      credits: 3,
      gradeStatus: 'pending',
      enrolled: false,
    },
    {
      id: 3,
      name: 'Database Management',
      code: 'CS103',
      credits: 4,
      gradeStatus: 'failed',
      enrolled: false,
    },
  ];

  onEnroll(course: any) {
    course.enrolled = true;
    alert(`You enrolled in ${course.name}`);
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }

  trackByCourseId(index: number, course: any): number {
    // trackBy improves performance by reusing DOM elements
    // instead of recreating them when the list changes.
    return course.id;
  }
}
