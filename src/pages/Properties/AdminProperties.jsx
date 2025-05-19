// src/pages/AdminProperties/AdminProperties.jsx
import React, { useState, useContext } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./Properties.css";
import useProperties from "../../hooks/useProperties";
import { PuffLoader } from "react-spinners";
import PropertyCard from "../../components/PropertyCard/PropertyCard";
import { Button, Group } from "@mantine/core";
import { useMutation } from "react-query";
import { deleteProperty } from "../../utils/api";
import { toast } from "react-toastify";
import UserDetailContext from "../../context/UserDetailContext";
import AddPropertyModal from "../../components/AddPropertyModal/AddPropertyModal";

const AdminProperties = () => {
  const { data = [], isError, isLoading, refetch } = useProperties();
  const [filter, setFilter] = useState("");
  const {
    userDetails: { token },
  } = useContext(UserDetailContext);

  const { mutate: handleDelete, isLoading: deleting } = useMutation({
    mutationFn: (id) => deleteProperty(id, token),
    onSuccess: () => {
      toast.success("Objekt erfolgreich gelöscht");
      refetch();
    },
    onError: () => toast.error("Fehler beim Löschen des Objekts"),
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [editingProperty, setEditingProperty] = useState(null);

  if (isError) {
    return (
      <div className="wrapper">
        <span>Fehler beim Laden der Objekte</span>
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

  const q = filter.trim().toLowerCase();
  const filtered = data.filter((property) => {
    const {
      title = "",
      address = "",
      region = "",
      propertyType = "",
      features = [],
      tags = [],
    } = property;

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

  const openCreateModal = () => {
    setEditingProperty(null);
    setModalOpen(true);
  };
  const openEditModal = (property) => {
    setEditingProperty(property);
    setModalOpen(true);
  };

  return (
    <div className="wrapper">
      <div className="flexColCenter paddings innerWidth properties-container">
        <Group position="apart" mb="md" style={{ width: "100%" }}>
          <h2>Admin-Objektverwaltung</h2>
          <Button onClick={openCreateModal} color="green">
            + Objekt erstellen
          </Button>
        </Group>

        <SearchBar filter={filter} setFilter={setFilter} placeholder="Suchen..." />

        <div className="paddings flexCenter properties">
          {filtered.map((card) => (
            <div key={card.id} style={{ position: "relative" }}>
              <PropertyCard card={card} />
              <Group
                position="apart"
                style={{
                  position: "absolute",
                  top: 16,
                  width: "100%",
                  padding: "0 16px",
                  zIndex: 1,
                }}
              >
                <Button
                  color="blue"
                  size="xs"
                  onClick={() => openEditModal(card)}
                >
                  Bearbeiten
                </Button>
                <Button
                  color="red"
                  size="xs"
                  loading={deleting}
                  onClick={() => {
                    if (
                      window.confirm(
                        "Möchten Sie dieses Objekt wirklich löschen?"
                      )
                    ) {
                      handleDelete(card.id);
                    }
                  }}
                >
                  Löschen
                </Button>
              </Group>
            </div>
          ))}
          {filtered.length === 0 && (
            <p className="no-results">Keine Objekte gefunden.</p>
          )}
        </div>
      </div>

      <AddPropertyModal
        opened={modalOpen}
        onClose={() => setModalOpen(false)}
        property={editingProperty}
        onSaved={() => {
          setModalOpen(false);
          refetch();
        }}
      />
    </div>
  );
};

export default AdminProperties;
