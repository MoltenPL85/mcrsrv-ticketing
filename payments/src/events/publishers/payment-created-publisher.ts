import { PaymentCreatedEvent, Publisher, Subjects } from '@mbtickets/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
