import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import FR from './fr.json'
import EN from './en.json'
import AR from './ar.json'

void i18n
  .use(initReactI18next)
  .init({
  
    compatibilityJSON: 'v3',
    resources: {
      en: EN,
      fr:FR,
      ar:AR
    },
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false 
    }
  });
  export default i18n;