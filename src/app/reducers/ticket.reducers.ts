import { createReducer, on } from '@ngrx/store';
import { fetchTicket, fetchTickets, updateTicket } from '../actions/ticket.actions';
import { Ticket } from '../backend.service';

export const initialState: Ticket[] = [];

export const ticketsReducer = createReducer(
  initialState,
  on(fetchTickets, (state, { tickets }) => tickets),
  on(fetchTicket, (state, { ticket }) => {
    const copiedState = [...state];
    const ticketIndex = copiedState.findIndex(
      (ticketFromState) => ticketFromState.id === ticket.id
    );
    if (ticketIndex > -1) {
      copiedState[ticketIndex] = ticket;
    } else {
      copiedState.push(ticket);
    }
    return copiedState;
  }),
  on(updateTicket, (state, { ticket }) => {
    const copiedState = [...state];
    const ticketIndex = copiedState.findIndex(
      (ticketFromState) => ticketFromState.id === ticket.id
    );
    copiedState[ticketIndex] = ticket;
    return copiedState;
  }) 
);
