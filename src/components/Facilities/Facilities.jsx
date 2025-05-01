import { useAuth0 } from "@auth0/auth0-react";
import { Box, Button, Group, MultiSelect } from "@mantine/core";
import React, { useContext, useState } from "react";
import UserDetailContext from "../../context/UserDetailContext.js";
import useProperties from "../../hooks/useProperties.jsx";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { createResidency } from "../../utils/api.js";

const facilitiesOptions = [
  { value: "wifi", label: "WiFi" },
  { value: "gradina", label: "Grădină" },
  { value: "balcon", label: "Balcon" },
  { value: "parcare", label: "Parcare" },
  { value: "piscina", label: "Piscină" },
  { value: "aer_conditionat", label: "Aer Condiționat" },
  { value: "incalzire", label: "Încălzire Centrală" },
];

const Facilities = ({
  prevStep,
  propertyDetails,
  setPropertyDetails,
  setOpened,
  setActiveStep,
}) => {
  const [selectedFacilities, setSelectedFacilities] = useState(
    propertyDetails.facilities || []
  );

  const { user } = useAuth0();
  const {
    userDetails: { token },
  } = useContext(UserDetailContext);
  const { refetch: refetchProperties } = useProperties();

  const { mutate, isLoading } = useMutation({
    mutationFn: () =>
      createResidency(
        {
          ...propertyDetails,
          facilities: selectedFacilities,
        },
        token
      ),
    onError: ({ response }) =>
      toast.error(response.data.message, { position: "bottom-right" }),
    onSettled: () => {
      toast.success("Added Successfully", { position: "bottom-right" });
      setPropertyDetails({
        title: "",
        description: "",
        price: 0,
        country: "",
        city: "",
        address: "",
        image: null,
        images: [],
        video: "",
        facilities: [],
      });
      setOpened(false);
      setActiveStep(0);
      refetchProperties();
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedFacilities.length === 0) {
      toast.error("Please select at least one facility", {
        position: "bottom-right",
      });
      return;
    }
    setPropertyDetails((prev) => ({
      ...prev,
      facilities: selectedFacilities,
    }));
    mutate();
  };

  return (
    <Box maw="30%" mx="auto" my="sm">
      <form onSubmit={handleSubmit}>
        <MultiSelect
          data={facilitiesOptions}
          label="Select facilities"
          placeholder="Choose what the property offers"
          value={selectedFacilities}
          onChange={setSelectedFacilities}
          searchable
          nothingFound="No options"
          required
        />

        <Group position="center" mt="xl">
          <Button variant="default" onClick={prevStep}>
            Back
          </Button>
          <Button type="submit" color="green" disabled={isLoading}>
            {isLoading ? "Submitting..." : "Add Property"}
          </Button>
        </Group>
      </form>
    </Box>
  );
};

export default Facilities;
