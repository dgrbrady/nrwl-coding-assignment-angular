import { createAction, props } from '@ngrx/store';
import { Ticket } from '../backend.service';

export const fetchTickets = createAction(
  '[Ticket List/API] Fetch Tickets Success',
  props<{tickets: Ticket[]}>()
);

export const fetchTicket = createAction(
  '[Ticket Details/API] Fetch Ticket Success',
  props<{ticket: Ticket}>()
);

export const updateTicket = createAction(
  '[Ticket Details] Ticket Updated',
  props<{ticket: Ticket}>()
);

export const createTicket = createAction(
  '[Ticket Form] Ticket Created',
  props<{ticket: Ticket}>()
);
