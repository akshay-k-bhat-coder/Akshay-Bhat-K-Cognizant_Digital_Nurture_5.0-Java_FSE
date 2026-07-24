import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CourseState } from './course.state';

/**
 * Select the complete Course feature state.
 */
export const selectCourseState = createFeatureSelector<CourseState>('course');

/**
 * Select only the courses list.
 */
export const selectAllCourses = createSelector(selectCourseState, (state) => state ? state.courses : []);

/**
 * Select loading state.
 */
export const selectCoursesLoading = createSelector(selectCourseState, (state) => state ? state.loading : false);

/**
 * Select error message.
 */
export const selectCoursesError = createSelector(selectCourseState, (state) => state ? state.error : null);
