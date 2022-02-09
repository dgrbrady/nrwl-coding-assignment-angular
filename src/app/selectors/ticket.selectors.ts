import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Ticket } from '../backend.service';

export const selectTickets = createFeatureSelector<Ticket[]>('tickets');
export const selectTicketById = (id: number) =>  
  createSelector(selectTickets, (tickets) => tickets.find(
    (ticket) => ticket.id === id
  ));
