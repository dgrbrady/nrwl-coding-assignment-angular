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

@NgModule({
  declarations: [
    AppComponent,
    TicketListComponent,
    TicketListItemComponent,
    TicketDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({tickets: ticketsReducer}),
    EffectsModule.forRoot([]),
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
