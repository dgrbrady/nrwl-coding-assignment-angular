import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { fetchTickets } from './actions/ticket.actions';
import { BackendService } from './backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private backend: BackendService, private store: Store) {}

  ngOnInit() {
    this.backend.tickets().subscribe(
      (tickets) => this.store.dispatch(fetchTickets({ tickets }))
    );
  }
}
