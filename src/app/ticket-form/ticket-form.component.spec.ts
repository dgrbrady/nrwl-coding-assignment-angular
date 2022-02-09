import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { TicketFormComponent } from './ticket-form.component';

describe('TicketFormComponent', () => {
  let component: TicketFormComponent;
  let fixture: ComponentFixture<TicketFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketFormComponent ],
      imports: [ReactiveFormsModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Save Changes Button', () => {
    it('should ouput createTicket if no Ticket is passed via input', waitForAsync(async () => {
      const saveButton = fixture.debugElement.query(By.css('button'))
      const createTicketSpy = spyOn(component.createTicket, 'next');
      const description = fixture.debugElement.query(By.css('textarea'));
      description.nativeElement.value = 'asdf';
      description.nativeElement.dispatchEvent(new Event('input'))
      fixture.detectChanges();
      await fixture.whenStable();
      saveButton.nativeElement.click();
      fixture.detectChanges();
      await fixture.whenStable();
      expect(createTicketSpy).toHaveBeenCalledWith(component.ticketForm.value);
    }));

    it('should ouput updateTicket if Ticket is passed via input', waitForAsync(async () => {
      const ticket = {id: 1, description: 'test', assigneeId: 1, completed: true};
      component.ticket = ticket;
      fixture.detectChanges();
      await fixture.whenStable();
      const saveButton = fixture.debugElement.query(By.css('button'))
      const updateTicketSpy = spyOn(component.updateTicket, 'next');
      const description = fixture.debugElement.query(By.css('textarea'));
      description.nativeElement.value = 'asdf';
      description.nativeElement.dispatchEvent(new Event('input'))
      fixture.detectChanges();
      await fixture.whenStable();
      saveButton.nativeElement.click();
      fixture.detectChanges();
      await fixture.whenStable();
      expect(updateTicketSpy).toHaveBeenCalledWith(component.ticketForm.value);
    }));
  })
});
