import { ComponentFixture, TestBed } from '@angular/core/testing';

import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { StudentProfile } from './student-profile';

describe('StudentProfile', () => {
  let component: StudentProfile;
  let fixture: ComponentFixture<StudentProfile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentProfile],
      providers: [
        provideRouter([]),
        provideStore({})
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentProfile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
