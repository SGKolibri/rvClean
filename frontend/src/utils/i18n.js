import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import translationFR from "./translationFR.json";
import translationNL from "./translationNL.json";

const curLanguage = localStorage.getItem("i18nextLng")
console.log(curLanguage)

i18next
    .use(initReactI18next)
    .init({
        debug: true,
        lng: curLanguage ? curLanguage : "fr",
        resources: {
            fr: {
                translation: translationFR
            },
            nl: {
                translation: translationNL
            }
        }
    })