export type EventStatus = "upcoming" | "available" | "sold_out" | "ongoing" | "past" | "cancelled";

export interface Event {
  id: string;
  title: string;
  genre: string;
  location: string;
  date: string;
  startTime: string; // 
  endTime: string;   // 
  cover: string;     // Ruta a assets/images/
  status: EventStatus;
}