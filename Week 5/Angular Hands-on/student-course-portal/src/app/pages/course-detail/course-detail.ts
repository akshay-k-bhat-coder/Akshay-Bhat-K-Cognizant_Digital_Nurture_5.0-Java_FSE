import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CourseService } from '../../services/course';
import { Course } from '../../models/course';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap, forkJoin, map, of } from 'rxjs';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './course-detail.html',
  styleUrl: './course-detail.css',
})
export class CourseDetail implements OnInit {
  course?: Course;
  enrolledStudents$!: Observable<any[]>;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    const rawId = this.route.snapshot.paramMap.get('id');
    if (!rawId) return;

    const parsedId = Number(rawId);
    const id = isNaN(parsedId) ? rawId : parsedId;

    this.courseService.getCourseById(id).subscribe({
      next: (course) => {
        this.course = course;
      },
      error: (err) => {
        console.error(err);
        alert('Course not found.');
      },
    });

    this.enrolledStudents$ = this.route.paramMap.pipe(
      map(params => {
        const rawParam = params.get('id');
        if (!rawParam) return '';
        const parsed = Number(rawParam);
        return isNaN(parsed) ? rawParam : parsed;
      }),
      switchMap((courseId: any) => {
        if (!courseId) return of([]);
        return this.http.get<any[]>(`http://localhost:3000/enrollments?courseId=${courseId}`).pipe(
          switchMap((enrollments: any[]) => {
            if (!enrollments || enrollments.length === 0) return of([]);
            const studentRequests = enrollments.map(e => 
              this.http.get<any>(`http://localhost:3000/students/${e.studentId}`)
            );
            return forkJoin(studentRequests);
          })
        );
      })
    );
  }
}
