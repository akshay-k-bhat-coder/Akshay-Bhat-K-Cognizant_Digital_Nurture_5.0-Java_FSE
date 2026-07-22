import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private courses = [
    {
      id: 1,
      code: 'ANG101',
      name: 'Angular Fundamentals',
      credits: 4,
      gradeStatus: 'passed',
      enrolled: false,
    },
    {
      id: 2,
      code: 'SB201',
      name: 'Spring Boot',
      credits: 3,
      gradeStatus: 'pending',
      enrolled: false,
    },
    {
      id: 3,
      code: 'DB301',
      name: 'Database Management',
      credits: 5,
      gradeStatus: 'failed',
      enrolled: false,
    },
  ];

  getCourses() {
    return this.courses;
  }

  enrollCourse(course: any): void {
    course.enrolled = true;
  }

  getCourseById(id: number) {
    return this.courses.find((course) => course.id === id);
  }

  addCourse(course: any): void {
    this.courses.push(course);
  }

  deleteCourse(id: number): void {
    this.courses = this.courses.filter((course) => course.id !== id);
  }
}
