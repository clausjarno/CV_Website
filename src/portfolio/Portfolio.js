import '../css/Body.css'
import '../css/Page.css'
import ScrumProject from '../images/Bestellingen.png'
import Header from './PortfolioHeader.js'
/* Import pictures for RA */
import StartUp from '../images/Startup.jpg'
import BookList from '../images/Book list.jpg'
import BookEdit from '../images/Book edit.jpg'
import WordList from '../images/Word list.jpg'
import OCRExample from '../images/OCR Example.jpg'
import NewWord from '../images/New added word.jpg'
import WordEditButton from '../images/Word edit button.jpg'
import WordEditPage from '../images/Word edit page.jpg'
import ShowCaseVideo from '../images/RA_Showcase.mp4'

/* Import carousel */
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

/* Globalization */
import { useTranslation } from 'react-i18next'

export default function Portfolio() {

    const media = [
        StartUp,
        BookList,
        BookEdit,
        WordList,
        OCRExample,
        NewWord,
        WordEditButton,
        WordEditPage,
        ShowCaseVideo
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
    };

    const { t } = useTranslation();

    return (
        <>
            <Header />
            <main>
                <div className='body page portfolio'>
                    <div className='portfolio-title'>
                        <h1>Portfolio - Projects</h1>
                    </div>
                    <div className='project-section'>
                        <h1>Reading Assistant - Book Application</h1>
                        <div className='carousel-wrapper'>
                            <Slider {...settings}>
                                {media.map((item, idx) => (
                                    <div key={idx} className='carousel-slide'>
                                        {item.endsWith(".mp4") ? (
                                            <video src={item}
                                                controls
                                                autoPlay
                                                loop
                                                muted />
                                        ) : (
                                            <img src={item} alt={`Page ${idx + 1}`} />
                                        )}
                                    </div>
                                ))}
                            </Slider>
                        </div>
                        <h2>{t('PROJECTS.SUBTITLE')}</h2>
                        <p>
                            {t('PROJECTS.PROJECT_1.DESCRIPTION')}
                        </p>
                        <h3>{t('PROJECTS.PROJECT_1.PART_1.TITLE')}</h3>
                        <ul>
                            <li>{t('PROJECTS.PROJECT_1.PART_1.ITEMS.ITEM_1')}</li>
                            <li>{t('PROJECTS.PROJECT_1.PART_1.ITEMS.ITEM_2')}</li>
                            <li>{t('PROJECTS.PROJECT_1.PART_1.ITEMS.ITEM_3')}</li>
                            <li>{t('PROJECTS.PROJECT_1.PART_1.ITEMS.ITEM_4')}</li>
                            <li>{t('PROJECTS.PROJECT_1.PART_1.ITEMS.ITEM_5')}</li>
                        </ul>
                        <h3>{t('PROJECTS.PROJECT_1.PART_2.TITLE')}</h3>
                        <ul>
                            <li>{t('PROJECTS.PROJECT_1.PART_2.ITEMS.ITEM_1')}</li>
                            <li>{t('PROJECTS.PROJECT_1.PART_2.ITEMS.ITEM_2')}</li>
                            <li>{t('PROJECTS.PROJECT_1.PART_2.ITEMS.ITEM_3')}</li>
                            <li>{t('PROJECTS.PROJECT_1.PART_2.ITEMS.ITEM_4')}</li>
                            <li>{t('PROJECTS.PROJECT_1.PART_2.ITEMS.ITEM_5')}</li>
                        </ul>
                        <h3>{t('PROJECTS.PROJECT_1.PART_3.TITLE')}</h3>
                        <ul>
                            <li>{t('PROJECTS.PROJECT_1.PART_3.ITEMS.ITEM_1')}</li>
                            <li>{t('PROJECTS.PROJECT_1.PART_3.ITEMS.ITEM_2')}</li>
                            <li>{t('PROJECTS.PROJECT_1.PART_3.ITEMS.ITEM_3')}</li>
                        </ul>
                        <h3>{t('PROJECTS.PROJECT_1.PART_4.TITLE')}</h3>
                        <ul>
                            <li>{t('PROJECTS.PROJECT_1.PART_4.ITEMS.ITEM_1')}</li>
                            <li>{t('PROJECTS.PROJECT_1.PART_4.ITEMS.ITEM_2')}</li>
                            <li>{t('PROJECTS.PROJECT_1.PART_4.ITEMS.ITEM_3')}</li>
                            <li>{t('PROJECTS.PROJECT_1.PART_4.ITEMS.ITEM_4')}</li>
                        </ul>
                        <h3>{t('PROJECTS.PROJECT_1.PART_5.TITLE')}</h3>
                        <ul>
                            <li><a href='https://github.com/clausjarno/Reading-Assistant'>{t('PROJECTS.PROJECT_1.PART_5.ITEM_1')}</a></li>
                        </ul>
                    </div>
                    <div className='project-section'>
                        <h1>Scrum Project - Customer Service Dashboard</h1>
                        <div className='portfolio-images bestellingen'>
                            <img src={ScrumProject} alt='Bestellingen overzicht' />
                        </div>
                        <h2>{t('PROJECTS.SUBTITLE')}</h2>
                        <p>
                            {t('PROJECTS.PROJECT_2.DESCRIPTION')}
                        </p>
                        <h3>{t('PROJECTS.PROJECT_2.PART_1.TITLE')}</h3>
                        <ul>
                            <li>{t('PROJECTS.PROJECT_2.PART_1.ITEMS.ITEM_1')}</li>
                            <li>{t('PROJECTS.PROJECT_2.PART_1.ITEMS.ITEM_2')}</li>
                            <li>{t('PROJECTS.PROJECT_2.PART_1.ITEMS.ITEM_3')}</li>
                        </ul>
                        <h3>{t('PROJECTS.PROJECT_2.PART_2.TITLE')}</h3>
                        <ul>
                            <li>{t('PROJECTS.PROJECT_2.PART_2.ITEMS.ITEM_1')}</li>
                            <li>{t('PROJECTS.PROJECT_2.PART_2.ITEMS.ITEM_2')}</li>
                            <li>{t('PROJECTS.PROJECT_2.PART_2.ITEMS.ITEM_3')}</li>
                            <li>{t('PROJECTS.PROJECT_2.PART_2.ITEMS.ITEM_4')}</li>
                            <li>{t('PROJECTS.PROJECT_2.PART_2.ITEMS.ITEM_5')}</li>
                        </ul>
                        <h3>{t('PROJECTS.PROJECT_2.PART_3.TITLE')}</h3>
                        <ul>
                            <li>{t('PROJECTS.PROJECT_2.PART_3.ITEMS.ITEM_1')}</li>
                            <li>{t('PROJECTS.PROJECT_2.PART_3.ITEMS.ITEM_2')}</li>
                        </ul>
                        <h3>{t('PROJECTS.PROJECT_2.PART_4.TITLE')}</h3>
                        <ul>
                            <li>{t('PROJECTS.PROJECT_2.PART_4.ITEMS.ITEM_1')}</li>
                            <li>{t('PROJECTS.PROJECT_2.PART_4.ITEMS.ITEM_2')}</li>
                            <li>{t('PROJECTS.PROJECT_2.PART_4.ITEMS.ITEM_3')}</li>
                        </ul>
                        <h3>{t('PROJECTS.PROJECT_2.PART_5.TITLE')}</h3>
                        <p>
                            {t('PROJECTS.PROJECT_2.PART_5.DESCRIPTION')}
                        </p>
                    </div>
                </div>
            </main>
        </>
    );
}