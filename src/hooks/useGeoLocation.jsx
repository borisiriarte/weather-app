import { useEffect, useState } from "react";

const useGeoLocation = () => {
  const [response, setResponse] = useState({ status: 0 });
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
    } catch (err) {
      res.err = err;
    }

    return res;
  };

  useEffect(() => {
    getGeoResponse().then((res) => {
      navigator.permissions
        .query({ name: "geolocation" })
        .then((permissionStatus) => {
          navigator.geolocation;

          if (permissionStatus.state === "granted") {
            setResponse({ ...response, res, status: 1 });
          }

          if (permissionStatus.state === "denied") {
            setResponse({ ...response, res, status: 2 });
          }
        });
    });
  }, []);

  return response;
};

export default useGeoLocation;
