// src/components/SearchBar/SearchBar.jsx
import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import "./SearchBar.css";

const SearchBar = ({ filter, setFilter }) => (
  <section className="search-bar-section">
    <h2 className="search-bar-title secondaryText">
      Suchen Sie die Immobilie Ihrer Träume
    </h2>

    {/* acesta e noul wrapper care conţine icon + input + buton */}
    <div className="search-bar-wrapper">
      <HiLocationMarker size={20} className="search-icon" />
      <input
        className="search-input"
        placeholder="Suche nach Titel / Stadt / Land..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <button className="search-button button">
        <FiSearch size={18} />
        <span>Suchen</span>
      </button>
    </div>
  </section>
);

export default SearchBar;
