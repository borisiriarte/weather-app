import { helpHttp } from "./helpHttp";

export const helpUserLocation = async () => {
  const url =
    "https://ipgeolocation.abstractapi.com/v1/?api_key=3653a4591a364241a25aa6887d2152f7";
  return helpHttp()
    .get(url)
    .then((res) => res)
    .catch((err) => err);
};
