export type SongStatus = "published" | "draft";

export interface Song {
  id: string;
  title: string;
  genre: string;
  duration: string;
  plays: number;
  likes: number;
  status: SongStatus;
  cover: string;
}