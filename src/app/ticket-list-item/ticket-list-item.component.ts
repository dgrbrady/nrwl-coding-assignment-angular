import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Ticket } from '../backend.service';

@Component({
  selector: 'app-ticket-list-item',
  templateUrl: './ticket-list-item.component.html',
  styleUrls: ['./ticket-list-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TicketListItemComponent implements OnInit {
  @Input() ticket: Ticket;

  constructor() { }

  ngOnInit(): void {
  }

}
