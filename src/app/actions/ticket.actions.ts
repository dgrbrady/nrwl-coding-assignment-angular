import { createAction, props } from "@ngrx/store";
import { Ticket } from '../backend.service';

export const fetchTickets = createAction('[Ticket List/API] Fetch Tickets Success', props<{tickets: Ticket[]}>())
