import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { CourseList } from './pages/course-list/course-list';
import { EnrollmentForm } from './pages/enrollment-form/enrollment-form';
import { ReactiveEnrollment } from './pages/reactive-enrollment/reactive-enrollment';
import { CourseDetail } from './pages/course-detail/course-detail';
import { StudentProfile } from './pages/student-profile/student-profile';
import { AddCourse } from './pages/add-course/add-course';
import { EditCourse } from './pages/edit-course/edit-course';

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
  {
    path: 'add-course',
    component: AddCourse,
  },
  {
    path: 'edit-course/:id',
    component: EditCourse,
  },
];
