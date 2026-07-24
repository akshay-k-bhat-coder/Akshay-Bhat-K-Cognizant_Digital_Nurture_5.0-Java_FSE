import { ComponentFixture, TestBed } from '@angular/core/testing';

import { provideStore } from '@ngrx/store';
import { By } from '@angular/platform-browser';
import { SimpleChange } from '@angular/core';
import { CourseCard } from './course-card';

describe('CourseCard', () => {
  let component: CourseCard;
  let fixture: ComponentFixture<CourseCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseCard],
      providers: [provideStore({})],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseCard);
    component = fixture.componentInstance;
    component.course = { id: 1, name: 'Test Course', credits: 3, gradeStatus: 'passed', enrolled: false };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the course name under an h3 element', () => {
    component.course = {
      id: 1,
      name: 'Data Structures',
      code: 'CS101',
      credits: 4,
      gradeStatus: 'passed',
      enrolled: false
    };
    fixture.detectChanges();
    const h3El = fixture.debugElement.query(By.css('h3')).nativeElement;
    expect(h3El.textContent).toContain('Data Structures');
  });

  it('should emit enrollRequested event when the enroll button is clicked', () => {
    const mockCourse = {
      id: 1,
      name: 'Data Structures',
      code: 'CS101',
      credits: 4,
      gradeStatus: 'passed',
      enrolled: false
    };
    component.course = mockCourse;
    fixture.detectChanges();
    spyOn(component.enrollRequested, 'emit');

    const buttons = fixture.debugElement.queryAll(By.css('button'));
    const enrollButton = buttons.find(b => b.nativeElement.textContent.includes('Enroll') || b.nativeElement.textContent.includes('Unenroll'));
    if (enrollButton) {
      enrollButton.nativeElement.click();
    } else {
      fixture.debugElement.query(By.css('button')).nativeElement.click();
    }
    fixture.detectChanges();
    expect(component.enrollRequested.emit).toHaveBeenCalledWith(1);
  });

  it('should log change history during ngOnChanges', () => {
    spyOn(console, 'log');
    const mockChanges = {
      course: new SimpleChange(null, component.course, true)
    };
    component.ngOnChanges(mockChanges as any);
    expect(console.log).toHaveBeenCalledWith('Course changed:', mockChanges.course);
  });
});
