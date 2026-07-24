import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CourseService } from './course';

describe('CourseService', () => {
  let service: CourseService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CourseService],
    });
    service = TestBed.inject(CourseService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch all courses via GET request', () => {
    const mockCourses = [
      { id: 1, name: 'Data Structures', code: 'CS101', credits: 4, gradeStatus: 'passed', enrolled: false },
      { id: 2, name: 'Algorithms', code: 'CS102', credits: 3, gradeStatus: 'passed', enrolled: false }
    ];

    service.getCourses().subscribe((courses) => {
      expect(courses.length).toBe(2);
      expect(courses).toEqual(mockCourses as any);
    });

    const req = httpMock.expectOne('http://localhost:3000/courses');
    expect(req.request.method).toBe('GET');
    req.flush(mockCourses);
  });

  it('should handle error when API request fails with 500', () => {
    service.getCourses().subscribe({
      next: () => fail('expected an error, not courses'),
      error: (error) => {
        expect(error.message).toContain('Http failure response for http://localhost:3000/courses: 500 Internal Server Error');
      }
    });

    const req = httpMock.expectOne('http://localhost:3000/courses');
    req.flush('Something went wrong', { status: 500, statusText: 'Internal Server Error' });
  });
});
