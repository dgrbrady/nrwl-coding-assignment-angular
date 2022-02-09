import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { BackendService } from '../backend.service';
import { TicketFormComponent } from '../ticket-form/ticket-form.component';

import { TicketDetailsComponent } from './ticket-details.component';

describe('TicketDetailsComponent', () => {
  let component: TicketDetailsComponent;
  let fixture: ComponentFixture<TicketDetailsComponent>;
  const tickets = [{id: 1, description: 'test', assigneeId: 1, completed: false}];
  const users = [{id: 1, name: 'tester'}];
  const initialState = {tickets, users};
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketDetailsComponent, TicketFormComponent ],
      imports: [
        RouterTestingModule,
      ],
      providers: [
        {provide: BackendService, useValue: jasmine.createSpy()},
        provideMockStore({initialState})
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle TicketFormComponent (updateTicket) event', () => {
    const updateTicketHandlerSpy = spyOn(component, 'updateTicket')
    const ticketUpdate = tickets[0];
    ticketUpdate.description = 'updated';
    const ticketForm = fixture.debugElement.query(By.directive(TicketFormComponent))
    ticketForm.componentInstance.updateTicket.next(ticketUpdate);
    expect(updateTicketHandlerSpy).toHaveBeenCalledWith(ticketUpdate);
  })
});
