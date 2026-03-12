import { Song } from "@/types/Song";

interface Props {
  song: Song;
}

export default function SongCard({ song }: Props) {
  return (
    <div className="song-card">
      <div className="cover">
        <img src={song.cover} alt={song.title} />

        <span className={`status ${song.status}`}>
          {song.status === "published" ? "PUBLISHED" : "DRAFT"}
        </span>
      </div>

      <div className="info">
        <h3>{song.title}</h3>
        <p>{song.genre} • {song.duration}</p>

        <div className="stats">
          <span>▶ {song.plays}</span>
          <span>❤ {song.likes}</span>
        </div>
      </div>
    </div>
  );
}