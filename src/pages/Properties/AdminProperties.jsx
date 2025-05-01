import React, { useState, useContext } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./Properties.css";
import useProperties from "../../hooks/useProperties";
import { PuffLoader } from "react-spinners";
import PropertyCard from "../../components/PropertyCard/PropertyCard";
import { Button } from "@mantine/core";
import { useMutation } from "react-query";
import { deleteProperty } from "../../utils/api";
import { toast } from "react-toastify";
import UserDetailContext from "../../context/UserDetailContext";

const AdminProperties = () => {
  const { data, isError, isLoading, refetch } = useProperties();
  const [filter, setFilter] = useState("");
  const {
    userDetails: { token },
  } = useContext(UserDetailContext);

  const { mutate: handleDelete, isLoading: deleting } = useMutation({
    mutationFn: (id) => deleteProperty(id),
    onSuccess: () => {
      toast.success("Property deleted");
      refetch();
    },
    onError: () => toast.error("Failed to delete property"),
  });

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

  return (
    <div className="wrapper">
      <div className="flexColCenter paddings innerWidth properties-container">
        <h2>Admin Property Panel</h2>
        <SearchBar filter={filter} setFilter={setFilter} />

        <div className="paddings flexCenter properties">
          {data
            .filter(
              (property) =>
                property.title.toLowerCase().includes(filter.toLowerCase()) ||
                property.city.toLowerCase().includes(filter.toLowerCase()) ||
                property.country.toLowerCase().includes(filter.toLowerCase())
            )
            .map((card, i) => (
              <div key={i} style={{ position: "relative" }}>
                <PropertyCard card={card} />
                <Button
  color="red"
  size="xs"
  style={{
    position: "absolute",
    top: 16,
    right: 16,
    zIndex: 1,
  }}
  onClick={() => {
    console.log("Deleting ID:", card.id); 
    if (window.confirm("Are you sure you want to delete this property?")) {
      handleDelete(card.id);
    }
  }}
  loading={deleting}
>
  Delete
</Button>

<Button
  color="blue"
  size="xs"
  style={{
    position: "absolute",
    top: 16,
    left: 16,
    zIndex: 1,
  }}
  onClick={() => {
    console.log("Edioting ID:", card.id); 
    handleEdit(card.id);
  }}
  loading={deleting}
>
  Edit
</Button>

              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AdminProperties;
