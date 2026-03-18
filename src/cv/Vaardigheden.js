import { useTranslation } from 'react-i18next'

export default function Vaardigheden() {
    const { t } = useTranslation();

    const vaardigheden = Array.from({ length: 6 }, (_, i) => t(`CV.PART_2.ITEMS.ITEM_${i + 1}`));
    return (
        <div className='vaardigheden'>
            <h2>{t('CV.PART_2.TITLE')}</h2>
            <ul>
                {vaardigheden.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}