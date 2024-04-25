import { useEffect } from "react";
import { API_URL_IMAGES } from "../constants/constants";

const useGetData = ({ setData, setIsError, setError, limit }) => {
  useEffect(() => {
    getData();
  }, [limit]);
  const getData = async () => {
    try {
      const response = await fetch(API_URL_IMAGES + "?limit=" + limit);
      const data = await response.json();
      if (response.ok) {
        setIsError(false);
        setData(data);
      } else {
        setIsError(true);
        setError(data.message ? data.message : "Failed To Get The Data");
      }
    } catch (error) {
      setIsError(true);
      setError(error.message);
    }
  };
};

export default useGetData;
