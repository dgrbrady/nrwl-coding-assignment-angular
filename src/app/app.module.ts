import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BackendService} from './backend.service';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ticketsReducer } from './reducers/ticket.reducers';
import { TicketListItemComponent } from './ticket-list-item/ticket-list-item.component';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TicketFormComponent } from './ticket-form/ticket-form.component';
import { usersReducer } from './reducers/user.reducers';

@NgModule({
  declarations: [
    AppComponent,
    TicketListComponent,
    TicketListItemComponent,
    TicketDetailsComponent,
    TicketFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({tickets: ticketsReducer, users: usersReducer}),
    EffectsModule.forRoot([]),
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
