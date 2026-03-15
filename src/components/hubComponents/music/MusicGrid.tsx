import SongCard from "./SongCard";
import { Song } from "@/types/Song";

interface Props {
  songs: Song[];
  onLikeToggle?: (songId: string, liked: boolean) => void;
}

export default function MusicGrid({ songs, onLikeToggle }: Props) {
  return (
    <div className="music-grid">
      {songs.map(song => (
        <SongCard 
          key={song.id} 
          song={song} 
          onLikeToggle={onLikeToggle}
        />
      ))}
    </div>
  );
}