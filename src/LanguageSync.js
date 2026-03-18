import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export default function LanguageSync() {
    const location = useLocation();
    const { i18n } = useTranslation();

    useEffect(() => {
        const pathLang = location.pathname.split('/')[1];
        if (pathLang && pathLang !== i18n.language) {
            i18n.changeLanguage(pathLang);
        }
    }, [location.pathname, i18n]
    )
}