import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { fetchTicket, updateTicket } from '../actions/ticket.actions';
import { fetchUsers } from '../actions/user.actions';
import { BackendService, Ticket } from '../backend.service';
import { selectTicketById } from '../selectors/ticket.selectors';
import { selectUsers } from '../selectors/user.selectors';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TicketDetailsComponent implements OnInit, OnDestroy {

  private ticketId = Number(this.route.snapshot.paramMap.get('ticketId'));
  private ticketSelector = selectTicketById(this.ticketId);
  private destroySubject = new Subject();
  private destroy$ = this.destroySubject.asObservable();

  ticket$ = this.store.select(this.ticketSelector);
  users$ = this.store.select(selectUsers);

  constructor(
    private backend: BackendService,
    private route: ActivatedRoute,
    private store: Store,
  ) { }

  ngOnDestroy() {
    this.destroySubject.next(true);
  }

  ngOnInit(): void {
    this.backend.users()
      .pipe(takeUntil(this.destroy$))
      .subscribe(
      (users) => this.store.dispatch((fetchUsers({ users })))
    );
    this.backend.ticket(this.ticketId)
      .pipe(takeUntil(this.destroy$))
      .subscribe(
      (ticket) => this.store.dispatch(fetchTicket({ ticket }))
    );
  }

  handleFormSubmit(ticketChanges: Ticket) {
    this.backend.update(this.ticketId, ticketChanges)
      .pipe(takeUntil(this.destroy$))
      .subscribe(
      (ticket) => this.store.dispatch(updateTicket({ ticket }))
    )
  }

}
