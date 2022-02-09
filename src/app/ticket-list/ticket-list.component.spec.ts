import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { provideMockStore } from '@ngrx/store/testing';
import { BackendService } from '../backend.service';
import { TicketFormComponent } from '../ticket-form/ticket-form.component';
import { TicketListItemComponent } from '../ticket-list-item/ticket-list-item.component';

import { TicketListComponent } from './ticket-list.component';

describe('TicketListComponent', () => {
  let component: TicketListComponent;
  let fixture: ComponentFixture<TicketListComponent>;
  const initialState = {
    tickets: [
      { id: 1, description: 'test', assigneeId: 1, completed: false }
    ]
  }
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketListComponent, TicketListItemComponent, TicketFormComponent ],
      imports: [ReactiveFormsModule],
      providers: [
        { provide: BackendService, useValue: jasmine.createSpy()},
        provideMockStore({initialState})
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display an app-ticket-list-item for each ticket in store', () => {
    const ticketListItems = fixture.debugElement.queryAll(
      By.directive(TicketListItemComponent));
    expect(ticketListItems.length).toBe(initialState.tickets.length)
  });

  it('should display an app-ticket-form on the page', () => {
    const ticketForm = fixture.debugElement.query(
      By.directive(TicketFormComponent)
    );
    expect(ticketForm).toBeDefined()
  });

  it('should handle the TicketFormComponent.createTicket event', () => {
    const createTicketHandlerSpy = spyOn(component, 'createTicket');
    const newTicket = {description: 'new ticket'};
    const ticketForm = fixture.debugElement.query(
      By.directive(TicketFormComponent)
    );
    ticketForm.componentInstance.createTicket.next(newTicket);
    expect(createTicketHandlerSpy).toHaveBeenCalledWith(newTicket);

  })
});
