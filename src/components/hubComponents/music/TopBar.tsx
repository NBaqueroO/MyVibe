interface Props {
  onSearch?: (query: string) => void;
}

export default function Topbar({ onSearch }: Props) {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onSearch) {
      onSearch(e.target.value);
    }
  };

  return (
    <header className="topbar">
      <input
        placeholder="Search songs..."
        className="search"
        onChange={handleSearchChange}
      />

      <div className="user">
        <span>Alex Rivera</span>
        <span className="badge">Pro Artist</span>
      </div>
    </header>
  );
}