// src/pages/Properties/Properties.jsx
import React, { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./Properties.css";
import useProperties from "../../hooks/useProperties";
import { PuffLoader } from "react-spinners";
import PropertyCard from "../../components/PropertyCard/PropertyCard";

const Properties = () => {
  const { data = [], isError, isLoading } = useProperties();
  const [filter, setFilter] = useState("");

  if (isError) {
    return (
      <div className="wrapper">
        <span>Error while fetching data</span>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="wrapper flexCenter" style={{ height: "60vh" }}>
        <PuffLoader color="#4066ff" />
      </div>
    );
  }

  // Normalizează filter-ul pentru comparații case-insensitive
  const q = filter.trim().toLowerCase();

  const filtered = data.filter((property) => {
    // Extrage câmpurile relevante, cu fallback la șir gol
    const {
      title = "",
      address = "",
      region = "",
      propertyType = "",
      features = [],
      tags = [],
    } = property;

    // Concatenează toate valorile într-un singur șir
    const haystack = [
      title,
      address,
      region,
      propertyType,
      ...features,
      ...tags,
    ]
      .join(" ")
      .toLowerCase();

    return haystack.includes(q);
  });

  return (
    <div className="wrapper">
      <SearchBar filter={filter} setFilter={setFilter} />
      <div className="flexColCenter paddings innerWidth properties-container">
        

        <div className="paddings flexCenter properties">
          {filtered.map((card) => (
            <PropertyCard card={card} key={card.id} />
          ))}
          {filtered.length === 0 && (
            <p className="no-results">Keine Objekte gefunden.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Properties;
