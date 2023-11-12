const updateStorage = (element) => {
  const { lat, lon } = element;
  const locations = JSON.parse(localStorage.getItem("recentLocations"));

  const exists = locations.find((x) => {
    return x.lat === lat && x.lon === lon;
  });

  if (Object.keys(locations).length > 2) {
    locations.shift();
  }

  if (exists === undefined) {
    locations.push(element);
  }

  var updatedLocations = JSON.stringify(locations);
  localStorage.setItem("recentLocations", updatedLocations);
};

export default updateStorage;
