import { useState, useEffect } from 'react';
import "@/styles/hub.css";
import Sidebar from "@/components/hubComponents/SideBar";
import Topbar from "@/components/hubComponents/music/TopBar";
import MusicGrid from "@/components/hubComponents/music/MusicGrid";
import { useT } from "@/hooks/useTranslations";
import { Song } from "@/types/Song";

// Datos de ejemplo
const mockSongs: Song[] = [
  {
    id: "1",
    title: "Neon Dreams",
    genre: "Electro Pop",
    duration: "3:24",
    plays: 1200,
    likes: 450,
    status: "published",
    cover: "neon-dreams.jpg",
    audioUrl: "neon-dreams.mp3"
  },
  {
    id: "2",
    title: "Midnight Echoes",
    genre: "Lo-fi",
    duration: "4:15",
    plays: 0,
    likes: 0,
    status: "draft",
    cover: "midnight-echoes.jpg",
    audioUrl: "midnight-echoes.mp3"
  }
];

export default function MusicPage() {
  const t = useT();
  const [songs, setSongs] = useState<Song[]>(mockSongs);
  const [filter, setFilter] = useState<'all' | 'published' | 'draft' | 'liked'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filtrar canciones
  const filteredSongs = songs.filter(song => {
    if (filter === 'published' && song.status !== 'published') return false;
    if (filter === 'draft' && song.status !== 'draft') return false;
    if (filter === 'liked') {
      const likedSongs = JSON.parse(localStorage.getItem('likedSongs') || '[]');
      if (!likedSongs.includes(song.id)) return false;
    }
    if (searchQuery) {
      return song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
             song.genre.toLowerCase().includes(searchQuery.toLowerCase());
    }
    return true;
  });

  const handleLikeToggle = (songId: string, liked: boolean) => {
    setSongs(prev => prev.map(song => 
      song.id === songId 
        ? { ...song, likes: song.likes + (liked ? 1 : -1) }
        : song
    ));
  };

  return (
    <div className="layout">
      <Sidebar />
      <main className="content">
        <Topbar onSearch={setSearchQuery} />
        
        <section className="header">
          <h1>Music Library</h1>
          <p>Discover and listen to your favorite tracks</p>
        </section>

        <div className="music-filters">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Songs ({songs.length})
          </button>
          <button 
            className={`filter-btn ${filter === 'published' ? 'active' : ''}`}
            onClick={() => setFilter('published')}
          >
            Published ({songs.filter(s => s.status === 'published').length})
          </button>
          <button 
            className={`filter-btn ${filter === 'draft' ? 'active' : ''}`}
            onClick={() => setFilter('draft')}
          >
            Drafts ({songs.filter(s => s.status === 'draft').length})
          </button>
          <button 
            className={`filter-btn ${filter === 'liked' ? 'active' : ''}`}
            onClick={() => setFilter('liked')}
          >
            Liked ({JSON.parse(localStorage.getItem('likedSongs') || '[]').length})
          </button>
        </div>

        <MusicGrid 
          songs={filteredSongs} 
          onLikeToggle={handleLikeToggle}
        />

        {filteredSongs.length === 0 && (
          <div className="no-results">
            <p>No songs found</p>
          </div>
        )}
      </main>
    </div>
  );
}