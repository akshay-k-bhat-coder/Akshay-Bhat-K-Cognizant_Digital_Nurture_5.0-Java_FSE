import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { CourseList } from './pages/course-list/course-list';
import { CourseDetail } from './pages/course-detail/course-detail';
import { StudentProfile } from './pages/student-profile/student-profile';
import { AddCourse } from './pages/add-course/add-course';
import { EditCourse } from './pages/edit-course/edit-course';
import { NotFound } from './pages/not-found/not-found';
import { authGuard } from './guards/auth.guard';

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
    canActivate: [authGuard],
  },
  {
    path: 'enroll',
    loadChildren: () =>
      import('./pages/enrollment/enrollment.module').then((m) => m.EnrollmentModule),
  },
  {
    path: 'reactive-enroll',
    redirectTo: 'enroll/reactive',
    pathMatch: 'full',
  },
  {
    path: 'add-course',
    component: AddCourse,
  },
  {
    path: 'edit-course/:id',
    component: EditCourse,
  },
  {
    path: '**',
    component: NotFound,
  },
];
