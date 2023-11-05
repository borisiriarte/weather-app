import { useEffect, useState } from "react";

const useGeoLocation = () => {
  const [response, setResponse] = useState({});
  const options = {
    enableHighAccuracy: true,
    maximumAge: 0,
  };

  function getPosition(options) {
    return new Promise((resolve, reject) =>
      navigator.geolocation.getCurrentPosition(resolve, reject, options)
    );
  }

  const getGeoResponse = async () => {
    let res = {};

    try {
      console.log("Loading...");
      const position = await getPosition(options);
      const coords = position.coords;
      res.lat = coords.latitude;
      res.long = coords.longitude;
      res.result = "allowed";
    } catch (err) {
      res.err = err;
      res.result = "denied";
    }

    return res;
  };

  useEffect(() => {
    getGeoResponse().then((coords) => setResponse({ ...response, coords }));
  }, []);

  return response;
};

export default useGeoLocation;
