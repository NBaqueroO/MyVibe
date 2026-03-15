import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "@/styles/hub.css";
import Sidebar from "@/components/hubComponents/SideBar";
import { useT } from "@/hooks/useTranslations";
import { Song, SongStatus } from "@/types/Song";

// Lista de géneros para el select
const genres = [
  "Pop", "Rock", "Hip Hop", "R&B", "Electronic", 
  "Latin", "Jazz", "Classical", "Country", "Reggae", "Metal", "Folk"
];

export default function UploadSong() {
  const t = useT();
  const navigate = useNavigate();
  
  // Estado del formulario
  const [formData, setFormData] = useState({
    title: '',
    genre: '',
    duration: '',
    status: 'draft' as SongStatus
  });
  
  // Estados para archivos
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [coverFile, setCoverFile] = useState<File | null>(null);
  const [coverPreview, setCoverPreview] = useState<string>('');
  
  // Estado para mensajes
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  // Manejadores de cambios
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleStatusChange = (status: SongStatus) => {
    setFormData(prev => ({ ...prev, status }));
  };

  const handleAudioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.includes('audio/')) {
        setMessage({ type: 'error', text: 'Please select an audio file' });
        return;
      }
      setAudioFile(file);
      setMessage({ type: '', text: '' });
    }
  };

  const handleCoverChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.includes('image/')) {
        setMessage({ type: 'error', text: 'Please select an image file' });
        return;
      }
      
      setCoverFile(file);
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      setMessage({ type: '', text: '' });
    }
  };

  // Generar duración aleatoria (simulada)
  const generateRandomDuration = () => {
    const minutes = Math.floor(Math.random() * 4) + 2;
    const seconds = Math.floor(Math.random() * 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  // Guardar canción
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.genre || !audioFile) {
      setMessage({ 
        type: 'error', 
        text: 'Please fill all required fields (Title, Genre, and Audio file)' 
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Crear objeto de canción
      const newSong: Song = {
        id: Date.now().toString(),
        title: formData.title,
        genre: formData.genre,
        duration: formData.duration || generateRandomDuration(),
        plays: 0,
        likes: 0,
        status: formData.status,
        cover: coverPreview || '/default-cover.jpg'
      };

      // Guardar en localStorage
      const existingSongs = JSON.parse(localStorage.getItem('songs') || '[]');
      localStorage.setItem('songs', JSON.stringify([...existingSongs, newSong]));

      setMessage({ 
        type: 'success', 
        text: 'Song uploaded successfully! (Saved locally)' 
      });

      // Resetear formulario
      setTimeout(() => {
        navigate('/hub/songs');
      }, 1500);

    } catch (error) {
      setMessage({ 
        type: 'error', 
        text: 'Error uploading song. Please try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="layout">
      <Sidebar />
      <main className="content">
        {/* Header */}
        <div className="header">
          <h1>Upload New Song</h1>
          <p>Fill in the details to upload your track</p>
        </div>

        {/* Message */}
        {message.text && (
          <div className={`message ${message.type}`}>
            {message.text}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="upload-form">
          {/* Basic Information */}
          <div className="form-section">
            <h2>Basic Information</h2>
            
            <div className="form-group">
              <label htmlFor="title">Song Title *</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Enter song title"
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="genre">Genre *</label>
                <select
                  id="genre"
                  name="genre"
                  value={formData.genre}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select a genre</option>
                  {genres.map(genre => (
                    <option key={genre} value={genre}>{genre}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="duration">Duration</label>
                <input
                  type="text"
                  id="duration"
                  name="duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                  placeholder="e.g., 3:45"
                />
                <small>Optional - will be auto-generated if empty</small>
              </div>
            </div>
          </div>

          {/* Upload Files */}
          <div className="form-section">
            <h2>Upload Files</h2>
            
            <div className="form-group">
              <label htmlFor="audio">Audio File *</label>
              <div className="file-input-wrapper">
                <input
                  type="file"
                  id="audio"
                  accept="audio/*"
                  onChange={handleAudioChange}
                  required
                />
              </div>
              {audioFile && (
                <span className="file-name">{audioFile.name}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="cover">Cover Image</label>
              <div className="file-input-wrapper">
                <input
                  type="file"
                  id="cover"
                  accept="image/*"
                  onChange={handleCoverChange}
                />
              </div>
              
              {coverPreview && (
                <div className="cover-preview">
                  <img src={coverPreview} alt="Cover preview" />
                </div>
              )}
            </div>
          </div>

          {/* Publication Status */}
          <div className="form-section">
            <h2>Publication Status</h2>
            
            <div className="status-options">
              <button
                type="button"
                className={`status-btn ${formData.status === 'draft' ? 'active' : ''}`}
                onClick={() => handleStatusChange('draft')}
              >
                <span className="status-icon">📝</span>
                <div className="status-info">
                  <span className="status-label">Save as Draft</span>
                  <span className="status-desc">Not visible to public</span>
                </div>
              </button>
              
              <button
                type="button"
                className={`status-btn ${formData.status === 'published' ? 'active' : ''}`}
                onClick={() => handleStatusChange('published')}
              >
                <span className="status-icon">🌐</span>
                <div className="status-info">
                  <span className="status-label">Publish Now</span>
                  <span className="status-desc">Available immediately</span>
                </div>
              </button>
            </div>
          </div>

          {/* Form Actions */}
          <div className="form-actions">
            <button 
              type="button" 
              className="cancel-btn"
              onClick={() => navigate('/hub/songs')}
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Uploading...' : 'Upload Song'}
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}