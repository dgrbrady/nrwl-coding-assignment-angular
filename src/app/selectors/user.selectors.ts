import { createFeatureSelector } from '@ngrx/store';
import { User } from '../backend.service';

export const selectUsers = createFeatureSelector<User[]>('users')
