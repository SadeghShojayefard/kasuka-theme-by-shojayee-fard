import IconBox from './IconBox/IconBox';
import './HeroSection.css';


function HeroSection() {

    const iconBoxData = [
        { icon: "./HeroSection/store.png", text: "متن نمایشی" },
        { icon: "./HeroSection/bar-chart.png", text: "نمودار کیفیت" },
        { icon: "./HeroSection/calendar.png", text: "نمونه کارها" },
        { icon: "./HeroSection/paint-roller.png", text: "عملکردهای پایانی" },
        { icon: "./HeroSection/database.png", text: "اطلاعات" },
    ]
    return (
        <section className="hero">
            <div className='title'>
                <h2 className='title-firstLine'>
                    راه‌حل‌های قدرتمند دیجیتال با
                </h2>
                <span className='logo-text'>Kasuka</span>
                <h2 className='title-SecondLine'>
                    ما تیمی از بازاریابان با استعداد دیجیتال هستیم
                </h2>
            </div>

            <div className='iconSection'>
                <IconBox {...iconBoxData[0]}></IconBox>
                <IconBox {...iconBoxData[1]}></IconBox>
                <IconBox {...iconBoxData[2]}></IconBox>
                <IconBox {...iconBoxData[3]}></IconBox>
                <IconBox {...iconBoxData[4]}></IconBox>
            </div>
        </section>
    )
}


export default HeroSection