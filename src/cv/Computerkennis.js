import { useTranslation } from 'react-i18next'

export default function Computerkennis() {
    const { t } = useTranslation();
    return (
        <div className='computerkennis'>
            <h2>{t('CV.PART_6.TITLE')}</h2>
            <h3>{t('CV.PART_6.SUBPART_1.TITLE')}</h3>
            <h3>{t('CV.PART_6.SUBPART_2.TITLE')}</h3>
            <ul>
                <li>{t('CV.PART_6.SUBPART_2.ITEMS.ITEM_1')}</li>
                <li>{t('CV.PART_6.SUBPART_2.ITEMS.ITEM_2')}</li>
                <li>{t('CV.PART_6.SUBPART_2.ITEMS.ITEM_3')}</li>
                <li>{t('CV.PART_6.SUBPART_2.ITEMS.ITEM_4')}</li>
                <li>{t('CV.PART_6.SUBPART_2.ITEMS.ITEM_5')}</li>
                <li>{t('CV.PART_6.SUBPART_2.ITEMS.ITEM_6')}</li>
                <li>{t('CV.PART_6.SUBPART_2.ITEMS.ITEM_7')}</li>
            </ul>
            <h3>{t('CV.PART_6.SUBPART_3.TITLE')}</h3>
            <ul>
                <li>{t('CV.PART_6.SUBPART_3.ITEMS.ITEM_1')}</li>
                <li>{t('CV.PART_6.SUBPART_3.ITEMS.ITEM_2')}</li>
            </ul>
        </div>
    )
}