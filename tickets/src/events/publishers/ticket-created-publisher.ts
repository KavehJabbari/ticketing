import { Publisher, Subjects, TicketCreatedEvent } from "@ticketingsgkj/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
