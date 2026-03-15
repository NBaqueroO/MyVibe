import { useState, useRef, useEffect } from 'react';
import { Song } from "@/types/Song";
import "@/styles/hub.css";

interface Props {
  song: Song;
  onLikeToggle?: (songId: string, liked: boolean) => void;
}

export default function SongCard({ song, onLikeToggle }: Props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Cargar estado del like desde localStorage
  useEffect(() => {
    const likedSongs = JSON.parse(localStorage.getItem('likedSongs') || '[]');
    setIsLiked(likedSongs.includes(song.id));
  }, [song.id]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleLike = () => {
    const newLikedState = !isLiked;
    setIsLiked(newLikedState);
    
    // Guardar en localStorage
    const likedSongs = JSON.parse(localStorage.getItem('likedSongs') || '[]');
    if (newLikedState) {
      likedSongs.push(song.id);
    } else {
      const index = likedSongs.indexOf(song.id);
      if (index > -1) likedSongs.splice(index, 1);
    }
    localStorage.setItem('likedSongs', JSON.stringify(likedSongs));
    
    // Notificar al padre para actualizar el contador REAL
    if (onLikeToggle) {
      onLikeToggle(song.id, newLikedState);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  // Construir rutas
  const coverPath = `/assets/images/${song.cover}`;
  const audioPath = song.audioUrl ? `/assets/songs/${song.audioUrl}` : null;

  return (
    <div className="song-card">
      <div className="cover">
        <img src={coverPath} alt={song.title} />
        
        <span className={`status ${song.status}`}>
          {song.status === "published" ? "PUBLISHED" : "DRAFT"}
        </span>

        {audioPath && (
          <button 
            className={`play-button ${isPlaying ? 'playing' : ''}`}
            onClick={togglePlay}
          >
            {isPlaying ? '⏸' : '▶'}
          </button>
        )}

        <button 
          className={`like-button ${isLiked ? 'liked' : ''}`}
          onClick={toggleLike}
        >
          {isLiked ? '❤️' : '🤍'}
        </button>
      </div>

      <div className="info">
        <h3>{song.title}</h3>
        <p>{song.genre} • {song.duration}</p>

        <div className="stats">
          <span>▶ {song.plays.toLocaleString()}</span>
          <span>❤ {song.likes.toLocaleString()}</span>
        </div>

        {audioPath && isPlaying && (
          <div className="player-controls">
            <span className="time">{formatTime(currentTime)}</span>
            <input
              type="range"
              min="0"
              max={duration || 0}
              value={currentTime}
              onChange={handleSeek}
              className="seek-bar"
            />
            <span className="time">{formatTime(duration)}</span>
          </div>
        )}
      </div>

      {audioPath && (
        <audio
          ref={audioRef}
          src={audioPath}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={() => setIsPlaying(false)}
        />
      )}
    </div>
  );
}