import {
  Subjects,
  Publisher,
  PaymentCreatedEvent,
} from "@ticketingsgkj/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
