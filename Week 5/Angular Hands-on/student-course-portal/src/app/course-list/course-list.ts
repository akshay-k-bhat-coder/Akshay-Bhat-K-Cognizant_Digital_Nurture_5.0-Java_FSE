import { Component } from '@angular/core';

@Component({
  selector: 'app-course-list',
  standalone: false,
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseList {

  courses = [
    {
      id: 1,
      name: 'Angular',
      code: 'ANG101',
      credits: 4
    },
    {
      id: 2,
      name: 'Java Spring Boot',
      code: 'SPR201',
      credits: 3
    },
    {
      id: 3,
      name: 'Microservices',
      code: 'MIC301',
      credits: 4
    },
    {
      id: 4,
      name: 'Cloud Computing',
      code: 'CLD401',
      credits: 3
    },
    {
      id: 5,
      name: 'DevOps',
      code: 'DEV501',
      credits: 2
    }
  ];

  selectedCourseId: number | null = null;

  onEnroll(courseId: number): void {
    console.log('Enrolling in course: ' + courseId);
    this.selectedCourseId = courseId;
  }

}