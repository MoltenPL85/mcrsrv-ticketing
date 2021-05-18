import { Publisher, Subjects, TicketCreatedEvent } from '@mbtickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
