import { createReducer, on } from "@ngrx/store";
import { fetchTickets } from "../actions/ticket.actions";
import { Ticket } from "../backend.service";

export const initialState: Ticket[] = [];

export const ticketsReducer = createReducer(
  initialState,
  on(fetchTickets, (state, { tickets }) => tickets)
)
