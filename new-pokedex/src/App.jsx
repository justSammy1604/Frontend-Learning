import React,{useState} from 'react'
import Main from './Components/Main'
import './Components/style.css'
export default function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Pokémon..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <Main searchTerm={searchTerm} />
    </>
  )
}
