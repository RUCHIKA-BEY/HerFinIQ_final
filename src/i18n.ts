import i18next from "i18next";
import en from "./locales/en.json";
import hi from "./locales/hi.json";
import ta from "./locales/ta.json";
import te from "./locales/te.json";
import kn from "./locales/kn.json";

// Initialize i18next with local JSON files for fast SSR translation
i18next.init({
    lng: "en",
    fallbackLng: "en",
    resources: {
        en: { translation: en },
        hi: { translation: hi },
        ta: { translation: ta },
        te: { translation: te },
        kn: { translation: kn },
    },
    interpolation: {
        escapeValue: false, // Not needed for simple HTML string concatenation
    },
});

export const useTranslation = (lang: string = "en") => {
    return {
        t: i18next.getFixedT(lang),
        i18n: i18next,
    };
};

export default i18next;
