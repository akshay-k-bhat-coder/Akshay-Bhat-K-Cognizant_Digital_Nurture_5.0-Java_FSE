import { CanDeactivateFn } from '@angular/router';
import { ReactiveEnrollment } from '../pages/reactive-enrollment/reactive-enrollment';

export const unsavedChangesGuard: CanDeactivateFn<ReactiveEnrollment> = (component) => {
  if (component && component.enrollmentForm && component.enrollmentForm.dirty && !component.submitted) {
    return window.confirm('You have unsaved changes. Leave?');
  }
  return true;
};
