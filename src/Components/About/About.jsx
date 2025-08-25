import ClientSlideShow from './ClientSlideShow/ClientSlideShow';
import './About.css'
import Definition from './Definition/Definition';
import Features from './Features/Features';
function About() {

    const imgAddress = [
        { img: "./About/client-1.png" },
        { img: "./About/client-2.png" },
        { img: "./About/client-3.png" },
        { img: "./About/client-4.png" },
        { img: "./About/client-5.png" },
        { img: "./About/client-6.png" },
    ];

    return (
        <section id="about" className='about-container'>
            <div className='definition-part'>
                <Definition />
            </div>

            <div className='about-client'>
                <ClientSlideShow {...imgAddress[0]} />
                <ClientSlideShow {...imgAddress[1]} />
                <ClientSlideShow {...imgAddress[2]} />
                <ClientSlideShow {...imgAddress[3]} />
                <ClientSlideShow {...imgAddress[4]} />
                <ClientSlideShow {...imgAddress[5]} />
            </div>

            <div className='definition-part'>
                <Features />
            </div>

        </section>

    )
}


export default About;