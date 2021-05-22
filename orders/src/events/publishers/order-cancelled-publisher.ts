import { OrderCancelledEvent, Publisher, Subjects } from '@mbtickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
