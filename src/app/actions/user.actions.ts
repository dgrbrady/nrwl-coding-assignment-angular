import { createAction, props } from '@ngrx/store';
import { User } from '../backend.service';

export const fetchUsers = createAction(
  '[Users/API] Fetch Users Success',
  props<{users: User[]}>()
);
