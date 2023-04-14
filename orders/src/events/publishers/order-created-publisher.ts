import { Publisher, OrderCreatedEvent, Subjects } from "@ticketingsgkj/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
