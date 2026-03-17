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

export default function Portfolio() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
    };

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
                        <h2>Overzicht</h2>
                        <p>
                            Dit project is een applicatie om woordenlijsten van boeken efficiënt te beheren en te verrijken met definities en voorbeeldzinnen via AI.
                            Vooraf heb ik een MVP gedefinieerd, een korte README geschreven met de tech stack en user stories, en een Dev Log bijgehouden van mijn dagelijkse werk.
                        </p>
                        <h3>Projectoverzicht</h3>
                        <ul>
                            <li>Opstellen van MVP, user stories en taken (UI, Logic, Data, Error Handling)</li>
                            <li>Ontwikkeling van de frontend en backend logica</li>
                            <li>Integratie van AI-service voor automatisch ophalen van definities en voorbeeldzinnen</li>
                            <li>Opzetten van OCR-functionaliteit voor toevoegen van woorden via camera</li>
                            <li>Documentatie: README, Dev Log, Trello board met user stories</li>
                        </ul>
                        <h3>Functionaliteiten</h3>
                        <ul>
                            <li>Overzicht van boeken met swipe-functionaliteit: links voor verwijderen, rechts voor bewerken</li>
                            <li>Woordenlijst per boek met paginanummer, term, definitie en voorbeeldzin</li>
                            <li>Toevoegen van nieuwe woorden via camera (OCR)</li>
                            <li>Automatische AI-opvraag naar Gemini voor definitie en voorbeeldzin</li>
                            <li>Alle toegevoegde woorden worden direct toegevoegd aan de juiste lijst</li>
                        </ul>
                        <h3>Tech Stack</h3>
                        <ul>
                            <li>.NET MAUI</li>
                            <li>OCR Plugin</li>
                            <li>AI-service (Gemini, free tier)</li>
                        </ul>
                        <h3>Project management ervaring</h3>
                        <ul>
                            <li>Opstellen van MVP en user stories</li>
                            <li>Dagelijks bijhouden van Dev Log</li>
                            <li>Gebruik van Trello voor user stories en sprinttaken</li>
                            <li>Documentatie via README en code op GitHub</li>
                        </ul>
                        <h3>Links</h3>
                        <ul>
                            <li><a href='https://github.com/clausjarno/Reading-Assistant'>GitHub repository (code, README & Dev Log)</a></li>
                        </ul>
                    </div>
                    <div className='project-section'>
                        <h1>Scrum Project - Customer Service Dashboard</h1>
                        <div className='portfolio-images bestellingen'>
                            <img src={ScrumProject} alt='Bestellingen overzicht' />
                        </div>
                        <h2>Overzicht</h2>
                        <p>
                            Eerste kennismaking met de SCRUM-methode binnen een teamomgeving.
                            Het project bestond uit vier teams: verkoop, aankoop, magazijn en webshop.
                            Ik maakte deel uit van het team verkoop.
                        </p>
                        <h3>Mijn bijdrage</h3>
                        <ul>
                            <li>Implementatie van filtering, sortering en paginering</li>
                            <li>Werken via pair programming</li>
                            <li>Samenwerking met andere teams</li>
                        </ul>
                        <h3>Functionaliteiten</h3>
                        <ul>
                            <li>Meerdere filters tegelijk combineren</li>
                            <li>Sorteren op elke kolom (oplopend/aflopend)</li>
                            <li>Instellen van aantal items per pagina</li>
                            <li>Paginering met navigatie</li>
                            <li>Behouden van filters en instellingen bij terug navigeren</li>
                        </ul>
                        <h3>Tech Stack:</h3>
                        <ul>
                            <li>.NET</li>
                            <li>EF Core</li>
                        </ul>
                        <h3>Scrum ervaring</h3>
                        <ul>
                            <li>Dagelijkse stand-up</li>
                            <li>Sprint planning en retrospectives</li>
                            <li>Opstellen van user stories en sprint taken</li>
                        </ul>
                        <h3>Opmerking</h3>
                        <p>
                            Door projectbeperkingen kan de broncode niet publiekelijk gedeeld worden
                        </p>
                    </div>
                </div>
            </main>
        </>
    );
}