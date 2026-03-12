export default function Topbar() {
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

      <button className="upload-btn">
        + Upload New
      </button>

    </header>
  );
}