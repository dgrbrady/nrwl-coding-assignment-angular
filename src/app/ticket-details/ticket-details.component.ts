import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { fetchTicket } from '../actions/ticket.actions';
import { BackendService } from '../backend.service';
import { selectTicketById } from '../selectors/tickets.selectors';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TicketDetailsComponent implements OnInit {

  private ticketId = Number(this.route.snapshot.paramMap.get('ticketId'));
  private ticketSelector = selectTicketById(this.ticketId);
  ticket$ = this.store.select(this.ticketSelector);
  
  constructor(
    private backend: BackendService,
    private route: ActivatedRoute,
    private store: Store,
  ) { }

  ngOnInit(): void {
    this.backend.ticket(this.ticketId).subscribe(
      (ticket) => this.store.dispatch(fetchTicket({ ticket }))
    )
  }

}
