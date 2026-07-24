import { createReducer, on } from '@ngrx/store';
import * as EnrollmentActions from './enrollment.actions';

export interface EnrollmentState {
  enrolledCourseIds: any[];
}

export const initialEnrollmentState: EnrollmentState = {
  enrolledCourseIds: [],
};

export const enrollmentReducer = createReducer(
  initialEnrollmentState,

  on(EnrollmentActions.enrollInCourse, (state, { courseId }) => ({
    ...state,
    enrolledCourseIds: state.enrolledCourseIds.some((id) => String(id) === String(courseId))
      ? state.enrolledCourseIds
      : [...state.enrolledCourseIds, courseId],
  })),

  on(EnrollmentActions.unenrollFromCourse, (state, { courseId }) => ({
    ...state,
    enrolledCourseIds: state.enrolledCourseIds.filter((id) => String(id) !== String(courseId)),
  })),

  on(EnrollmentActions.setEnrolledCourses, (state, { enrolledCourseIds }) => ({
    ...state,
    enrolledCourseIds: [...enrolledCourseIds],
  })),
);
