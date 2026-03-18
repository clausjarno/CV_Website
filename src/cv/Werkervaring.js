import { useTranslation } from 'react-i18next'

export default function Werkervaring() {
    const { t } = useTranslation();
    return (
        <div className='werkervaring'>
            <h2>{t('CV.PART_5.TITLE')}</h2>
            <h3>{t('CV.PART_5.SUBPART_1.TITLE')} <span>{t('CV.PART_5.SUBPART_1.NOTE')}</span></h3>
            <p className='location'>{t('CV.PART_5.SUBPART_1.LOCATION')}</p>
            <ul>
                <li>{t('CV.PART_5.SUBPART_1.ITEMS.ITEM_1')}</li>
                <li>{t('CV.PART_5.SUBPART_1.ITEMS.ITEM_2')}</li>
                <li>{t('CV.PART_5.SUBPART_1.ITEMS.ITEM_3')}</li>
                <li>{t('CV.PART_5.SUBPART_1.ITEMS.ITEM_4')}</li>
            </ul>
            <h3>{t('CV.PART_5.SUBPART_2.TITLE')} <span>{t('CV.PART_5.SUBPART_2.NOTE')}</span></h3>
            <p className='location'>{t('CV.PART_5.SUBPART_2.LOCATION')}</p>
            <ul>
                <li>{t('CV.PART_5.SUBPART_2.ITEMS.ITEM_1')}</li>
                <li>{t('CV.PART_5.SUBPART_2.ITEMS.ITEM_2')}</li>
            </ul>
            <h3>{t('CV.PART_5.SUBPART_3.TITLE')} <span>{t('CV.PART_5.SUBPART_3.NOTE')}</span></h3>
            <p className='location'>{t('CV.PART_5.SUBPART_3.LOCATION')}</p>
            <ul>
                <li>{t('CV.PART_5.SUBPART_3.ITEMS.ITEM_1')}</li>
                <li>{t('CV.PART_5.SUBPART_3.ITEMS.ITEM_2')}</li>
            </ul>
        </div>
    )
}
