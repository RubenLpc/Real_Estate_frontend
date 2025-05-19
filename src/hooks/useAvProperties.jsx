import React from "react";
import { useQuery } from "react-query";
import { getAllAvailableProperties } from "../utils/api";
import { get } from "lodash";

const useAvProperties = () => {
  const { data, isLoading, isError, refetch } = useQuery(
    "allProperties",
    getAllAvailableProperties,
    { refetchOnWindowFocus: false }
  );

  return {
    data,
    isError,
    isLoading,
    refetch,
  };
};

export default useAvProperties;
