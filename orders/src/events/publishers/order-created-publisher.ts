import { OrderCreatedEvent, Publisher, Subjects } from '@mbtickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
