import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { createTicket } from '../actions/ticket.actions';
import { BackendService, Ticket } from '../backend.service';
import { selectTickets } from '../selectors/ticket.selectors';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TicketListComponent implements OnInit {
  private destroySubject = new Subject();
  private destroy$ = this.destroySubject.asObservable();
  tickets$ = this.store.select(selectTickets);

  constructor(private backend: BackendService, private store: Store) { }

  ngOnInit(): void {
  }

  createTicket(newTicket: Partial<Omit<Ticket, 'id'>>) {
    this.backend.newTicket({ description: newTicket.description})
      .pipe(takeUntil(this.destroy$))
      .subscribe(
      (ticket) => this.store.dispatch(createTicket({ ticket }))
    )
  }
}
