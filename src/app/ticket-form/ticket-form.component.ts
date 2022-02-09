import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Ticket, User } from '../backend.service';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TicketFormComponent implements OnChanges {
  @Input() ticket: Ticket;
  @Input() users: User[];
  @Output() formSubmit = new EventEmitter<Ticket>();

  ticketForm = new FormGroup({
      id: new FormControl({value: '', disabled: true}),
      assigneeId: new FormControl(),
      description: new FormControl(),
      completed: new FormControl(),
  });

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    const ticket: Ticket = changes?.ticket?.currentValue;
    if (ticket !== undefined) {
      this.updateForm(ticket);
    } 
  }

  saveForm() {
    this.formSubmit.next(this.ticketForm.value);
  }

  private updateForm(ticket: Ticket) {
    console.log(ticket)
    this.ticketForm.setValue({
      id: ticket.id,
      assigneeId: ticket.assigneeId,
      description: ticket.description,
      completed: ticket.completed,
    });
  }
}
