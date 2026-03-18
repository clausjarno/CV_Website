import { useTranslation } from 'react-i18next'

export default function Talenkennis() {
    const { t } = useTranslation();
    return (
        <div className='talenkennis'>
            <h2>{t('CV.PART_3.TITLE')}</h2>
            <div className='taal'>
                <span>{t('CV.PART_3.ITEMS.ITEM_1')}</span>
                <div className="bar">
                    <div className="bar-level" style={{ width: '100%' }}></div>
                </div>
                <span>{t('CV.PART_3.ITEMS.ITEM_2')}</span>
                <div className="bar">
                    <div className="bar-level" style={{ width: '80%' }}></div>
                </div>
                <span>{t('CV.PART_3.ITEMS.ITEM_3')}</span>
                <div className="bar">
                    <div className="bar-level" style={{ width: '20%' }}></div>
                </div>
            </div>
        </div>
    )
}