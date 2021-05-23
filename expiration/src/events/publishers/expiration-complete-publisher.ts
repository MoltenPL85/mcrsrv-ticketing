import {
  ExpirationCompleteEvent,
  Publisher,
  Subjects,
} from '@mbtickets/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
