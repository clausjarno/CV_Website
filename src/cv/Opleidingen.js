
import { useTranslation } from 'react-i18next'

export default function Opleidingen() {
    const { t } = useTranslation();

    const basisOpleidingen = Array.from({ length: 6 }, (_, i) => t(`CV.PART_1.ITEM_1.ITEMS.ITEM_1_${i + 1}`));

    const opleidingen = Array.from({ length: 10 }, (_, i) => t(`CV.PART_1.ITEM_2.ITEMS.ITEM_2_${i + 1}`));

    return (
        <div className='opleidingen'>
            <h2>{t('CV.PART_1.TITLE')}</h2>
            <h3>{t('CV.PART_1.SUBTITLE_1')}</h3>
            <ol>
                <li>{t('CV.PART_1.ITEM_1.TITLE')}</li>
                <ul>
                    {basisOpleidingen.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <li>{t('CV.PART_1.ITEM_2.TITLE')}</li>
                <ul>
                    {opleidingen.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </ol>
            <h3>{t('CV.PART_1.SUBTITLE_2')}</h3>
            <h3>{t('CV.PART_1.SUBTITLE_3')}</h3>
        </div>
    )
}