import {
  Subjects,
  Publisher,
  OrderCancelledEvent,
} from "@ticketingsgkj/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
