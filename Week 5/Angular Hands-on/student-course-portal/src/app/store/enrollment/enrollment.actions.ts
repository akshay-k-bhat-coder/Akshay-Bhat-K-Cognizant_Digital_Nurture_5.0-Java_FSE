import { createAction, props } from '@ngrx/store';

export const enrollInCourse = createAction(
  '[Enrollment] Enroll In Course',
  props<{ courseId: any }>(),
);

export const unenrollFromCourse = createAction(
  '[Enrollment] Unenroll From Course',
  props<{ courseId: any }>(),
);

export const setEnrolledCourses = createAction(
  '[Enrollment] Set Enrolled Courses',
  props<{ enrolledCourseIds: number[] }>(),
);
