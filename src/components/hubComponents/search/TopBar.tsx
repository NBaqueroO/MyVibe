import { useNavigate } from 'react-router-dom';

export default function Topbar() {
  const navigate = useNavigate();

  const handleUploadClick = () => {
    navigate('/hub/songs');
  };

  return (
    <header className="topbar">

      <input
        placeholder="Search"
        className="search"
      />

      <div className="user">
        <span>Alex Rivera</span>
        <span className="badge">Pro Artist</span>
      </div>

      <button 
        className="upload-btn"
        onClick={handleUploadClick}
      >
        + Upload New
      </button>

    </header>
  );
}