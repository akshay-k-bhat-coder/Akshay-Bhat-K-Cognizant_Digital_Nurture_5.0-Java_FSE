import { createReducer, on } from '@ngrx/store';

import * as CourseActions from './course.actions';
import { initialCourseState } from './course.state';

export const courseReducer = createReducer(
  initialCourseState,

  on(CourseActions.loadCourses, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),

  on(CourseActions.loadCoursesSuccess, (state, { courses }) => ({
    ...state,
    courses,
    loading: false,
    error: null,
  })),

  on(CourseActions.loadCoursesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
);
