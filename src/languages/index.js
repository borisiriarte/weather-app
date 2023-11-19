import i18n from "i18next";

import EN from "./locales/en.json";
import ES from "./locales/es.json";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: localStorage.getItem("language"),
  resources: { en: { translation: EN }, es: { translation: ES } },
});

export default i18n;
