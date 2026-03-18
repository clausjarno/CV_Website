import '../css/Header.css'
import '../css/Page.css'
import foto from '../images/foto.png'
import phone from '../images/phone.png'
import email from '../images/gmail.png'
import address from '../images/address.png'
import date from '../images/date.png'
import { useTranslation } from 'react-i18next'

export default function Header() {
    const { t } = useTranslation();
    return (
        <header className="header page">
            <div className='left-section'>
                <img src={foto} alt='Foto' />
                <div className='name'>
                    <h1>JARNO<br />CLAUS</h1>
                </div>
            </div>
            <div className='right-section'>
                <h2>{t('CV.HEADER_TITLE')}</h2>
                <p><img src={email} alt='gmail' />clausjarno@gmail.com</p>
                <p><img src={phone} alt='phone number' />0471/24.54.01</p>
                <p><img src={address} alt='address' />9160 Lokeren</p>
                <p><img src={date} alt='birthday' />10/02/2000</p>
            </div>
        </header >
    )
}