import { createAction, props } from '@ngrx/store';
import { Course } from '../../models/course';

/**
 * Dispatched when the Course page loads.
 */
export const loadCourses = createAction('[Course] Load Courses');

/**
 * Dispatched when HTTP GET succeeds.
 */
export const loadCoursesSuccess = createAction(
  '[Course] Load Courses Success',
  props<{ courses: Course[] }>(),
);

/**
 * Dispatched when HTTP GET fails.
 */
export const loadCoursesFailure = createAction(
  '[Course] Load Courses Failure',
  props<{ error: string }>(),
);
