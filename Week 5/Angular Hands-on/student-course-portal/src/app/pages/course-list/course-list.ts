import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCard } from '../../components/course-card/course-card';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseList {

  courses = [
    {
      id: 1,
      name: 'Angular Fundamentals',
      code: 'CS101',
      credits: 4
    },
    {
      id: 2,
      name: 'Spring Boot 3',
      code: 'CS102',
      credits: 3
    },
    {
      id: 3,
      name: 'Database Management',
      code: 'CS103',
      credits: 4
    }
  ];

  onEnroll(course: any) {
  alert(`You enrolled in ${course.name}`);
  }

}