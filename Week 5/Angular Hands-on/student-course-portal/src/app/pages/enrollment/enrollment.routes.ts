import { Routes } from '@angular/router';
import { EnrollmentForm } from '../enrollment-form/enrollment-form';
import { ReactiveEnrollment } from '../reactive-enrollment/reactive-enrollment';
import { authGuard } from '../../guards/auth.guard';
import { unsavedChangesGuard } from '../../guards/unsaved-changes.guard';

export const routes: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    component: EnrollmentForm,
  },
  {
    path: 'reactive',
    canActivate: [authGuard],
    component: ReactiveEnrollment,
    canDeactivate: [unsavedChangesGuard],
  }
];
