import './Portfolio.css';
import SectionTitle from '../Share/SectionTitle/SectionTitle';
import Sample from './Sample/Sample';
import Counts from './Counts/Counts';
import Testimonials from './Testimonials/Testimonials';
function Portfolio() {
    return (
        <div>
            <div className='container'>
                <SectionTitle mainTitle='نمونه کارها' subTitle='نمونه کارهای ما را بررسی کنید' />
                <div className='samples-style'>
                    <Sample sampleAddress="./Sample/portfolio-1.jpg" />
                    <Sample sampleAddress="./Sample/portfolio-2.jpg" />
                    <Sample sampleAddress="./Sample/portfolio-3.jpg" />
                    <Sample sampleAddress="./Sample/portfolio-4.jpg" />
                    <Sample sampleAddress="./Sample/portfolio-5.jpg" />
                    <Sample sampleAddress="./Sample/portfolio-6.jpg" />
                    <Sample sampleAddress="./Sample/portfolio-7.jpg" />
                    <Sample sampleAddress="./Sample/portfolio-8.jpg" />
                    <Sample sampleAddress="./Sample/portfolio-9.jpg" />
                </div>
                <Counts></Counts>
            </div>
            <Testimonials />
        </div>
    )
}


export default Portfolio;