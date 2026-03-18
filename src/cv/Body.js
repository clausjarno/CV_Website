import '../css/Body.css'
import '../css/Page.css'
import Opleidingen from './Opleidingen.js'
import Vaardigheden from './Vaardigheden.js'
import Talenkennis from './Talenkennis.js'
import Werkervaring from './Werkervaring.js'
import Computerkennis from './Computerkennis.js'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Body() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className='page body'>
        <div className='left-section'>
          <Opleidingen />
          <Vaardigheden />
          <Talenkennis />
        </div>
        <div className='right-section'>
          <div className='profiel'>
            <h2>{t('CV.PART_4.TITLE')}</h2>
            <p>
              {t('CV.PART_4.DESCRIPTION')}
            </p>
          </div>
          <Werkervaring />
          <Computerkennis />
          <Link to={`/${i18n.language}/`} className='btn'>Portfolio</Link>
        </div>
      </div>
    </>
  )
}