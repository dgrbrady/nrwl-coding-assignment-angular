import { Location } from '@angular/common';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

import { TicketListItemComponent } from './ticket-list-item.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-route-test',
  template: 'app-route-test',
})
class RouteTestComponent {}

describe('TicketListItemComponent', () => {
  let component: TicketListItemComponent;
  let fixture: ComponentFixture<TicketListItemComponent>;
  const ticket = {id: 1, description: 'test', assigneeId: 1, completed: false};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketListItemComponent, RouteTestComponent,],
      imports: [RouterTestingModule.withRoutes([
        {path: 'tickets/:ticketId', component: RouteTestComponent}
      ])]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketListItemComponent);
    component = fixture.componentInstance;
    component.ticket = ticket;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the ticket id', () => {
    const ticketId = fixture.debugElement.query(By.css('.ticket-id'));
    expect(ticketId.nativeElement.textContent).toContain(component.ticket.id);
  });

  it('should display the ticket description', () => {
    const ticketDescription = fixture.debugElement.query(By.css('.ticket-description'));
    expect(ticketDescription.nativeElement.textContent).toContain(component.ticket.description);
  });

  it('should display the ticket assigneeId', () => {
    const ticketAssigneeId = fixture.debugElement.query(By.css('.ticket-assigneeId'));
    expect(ticketAssigneeId.nativeElement.textContent).toContain(component.ticket.assigneeId);
  });

  it('should display the ticket completion', () => {
    const ticketCompleted= fixture.debugElement.query(By.css('.ticket-completed'));
    expect(ticketCompleted.nativeElement.textContent).toContain(component.ticket.completed);
  });

  it('should change route when clicking details link', waitForAsync(async () => {
    const location = TestBed.inject(Location);
    const detailsLink = fixture.debugElement.query(By.css('.ticket-link'));
    detailsLink.nativeElement.click();
    fixture.detectChanges();
    await fixture.whenStable();
    expect(location.path()).toBe(`/tickets/${ticket.id}`);
  }))
});
