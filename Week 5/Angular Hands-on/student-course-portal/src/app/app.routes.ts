import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { CourseList } from './pages/course-list/course-list';
import { EnrollmentForm } from './pages/enrollment-form/enrollment-form';
import { ReactiveEnrollment } from './pages/reactive-enrollment/reactive-enrollment';
import { CourseDetail } from './pages/course-detail/course-detail';
import { StudentProfile } from './pages/student-profile/student-profile';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'courses',
    component: CourseList,
  },
  {
    path: 'courses/:id',
    component: CourseDetail,
  },
  {
    path: 'profile',
    component: StudentProfile,
  },
  {
    path: 'enroll',
    component: EnrollmentForm,
  },
  {
    path: 'reactive-enroll',
    component: ReactiveEnrollment,
  },
];
