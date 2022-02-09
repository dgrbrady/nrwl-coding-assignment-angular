import { createReducer, on } from '@ngrx/store';
import { fetchUsers } from '../actions/user.actions';
import { User } from '../backend.service';

export const initialState: User[] = [];

export const usersReducer = createReducer(
  initialState,
  on(fetchUsers, (state, { users }) => users),
);
