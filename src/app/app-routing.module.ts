import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {
        path: 'tickets',
        component: TicketListComponent,
      },
      {
        path: 'tickets/:ticketId',
        component: TicketDetailsComponent,
      },
      {
        path: '**',
        redirectTo: 'tickets',
      }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
