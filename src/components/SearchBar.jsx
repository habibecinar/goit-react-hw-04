import { useState } from "react";

function SearchBar({ onSubmit }) {
  const [deger, setDeger] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(deger);
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input value={deger} onChange={(e) => setDeger(e.target.value)} />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}
export default SearchBar;
