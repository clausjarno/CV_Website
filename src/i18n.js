import i18n from 'i18next'
import { initReactI18next, Translation } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

/*Languages*/
import enTranslation from './locales/en/translation.json'
import nlTranslation from './locales/nl/translation.json'

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'nl',
        debug: true,
        detection: {
            order: ['path', 'hash', 'localStorage', 'navigator'],
            caches: ['localStorage']
        },
        interpolation: {
            escapeValue: false
        },
        resources: {
            en: { translation: enTranslation },
            nl: { translation: nlTranslation }
        }
    });

export default i18n;

