import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TicketListComponent } from './ticket-list/ticket-list.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {
        path: 'tickets',
        component: TicketListComponent,
      },
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
