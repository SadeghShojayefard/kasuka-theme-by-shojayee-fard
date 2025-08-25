import './Features.css';
import Cases from '../../Share/Cases/Cases';

function Features() {
    const casesProps = [
        { icons: "./About/1.png", title: "تبلیغ سختی است", text: "نتایج یا در نتیجه هر یک از این اهداف اشتغال حاصل می شوند" },
        { icons: "./About/2.png", title: "کدام یک از اینهاست", text: "کسانی که هوس سیاهان می کنند نمی بینند ، آنها مقصر هستند که خدمات خود را رها کرده اند" },
        { icons: "./About/3.png", title: "یا کور شده است", text: "یا می پذیرد یا زمانی که هیچ کس از همه اجتناب نمی کند. همه دردهایی که آنها را بیشتر می کند" },
        { icons: "./About/4.png", title: "حقیقت مبارک", text: "آنها بدون تحمل حقیقت در زمان ستایش زندگی از هیچ چیزی پیروی نمی کنند" },
    ]
    return (
        <div className='case-part'>
            <div className="about-children">
                <img src="./About/features.jpg" className='about-children-img' />
            </div>
            <div className="about-children">
                <Cases {...casesProps[0]} />
                <Cases {...casesProps[1]} />
                <Cases {...casesProps[2]} />
                <Cases {...casesProps[3]} />
            </div>
        </div>
    )
}

export default Features;
