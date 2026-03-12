import SongCard from "./SongCard";
import { Song } from "@/types/Song";

interface Props {
  songs: Song[];
}

export default function UploadGrid({ songs }: Props) {
  return (
    <div className="upload-grid">
      {songs.map(song => (
        <SongCard key={song.id} song={song} />
      ))}
    </div>
  );
}