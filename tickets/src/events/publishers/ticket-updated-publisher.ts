import { Publisher, Subjects, TicketUpdatedEvent } from "@ticketingsgkj/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
