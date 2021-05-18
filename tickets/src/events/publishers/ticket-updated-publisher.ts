import { Publisher, Subjects, TicketUpdatedEvent } from '@mbtickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
