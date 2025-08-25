import './Services.css'
import SectionTitle from '../Share/SectionTitle/SectionTitle'
import ServicesItem from './ServicesItem/ServicesItem'
import CTA from './CTA/CTA'
function Services() {
    const servicesitems = [
        { icon: "./Services/bar-chart.png", title: "تیتر 1", text: "برای آرامش بخشیدن و لذت بردن از مفاسد ، چه دردها و چه دردسرهایی را دریافت خواهند کرد" },
        { icon: "./Services/calendar.png", title: "تیتر 2", text: "آنها استثنائاتی هستند که به دنبال سیاه پوستان هستند ، آنها نمی بینند ، آنها کسانی هستند که در خدمات خود مقصر هستند" },
        { icon: "./Services/document.png", title: "تیتر 3", text: "آنها استثنائاتی هستند که به دنبال سیاه پوستان هستند ، آنها نمی بینند ، آنها کسانی هستند که در خدمات خود مقصر هستند" },
        { icon: "./Services/dribbble.png", title: "تیتر 4", text: "اما در واقع ما هم آنها را متهم می کنیم و هم با یک نفرت عادلانه شایسته چاپلوسی هستیم" },
        { icon: "./Services/globe.png", title: "تیتر 5", text: "آنها استثنائاتی هستند که به دنبال سیاه پوستان هستند ، آنها نمی بینند ، آنها کسانی هستند که در خدمات خود مقصر هستند" },
        { icon: "./Services/tachometer.png", title: "تیتر 6", text: "روشها یا تلاشهای ما علاوه بر این ، خطا فرار می کند ، بگذار کوچکتر عاقل باشد" },
    ]
    return (
        <div>
            <section id="services-section" className="container">
                <SectionTitle mainTitle="خدمات" subTitle="خدمات ما را بررسی کنید" />
                <div className='services'>
                    <ServicesItem {...servicesitems[0]} />
                    <ServicesItem {...servicesitems[1]} />
                    <ServicesItem {...servicesitems[2]} />
                    <ServicesItem {...servicesitems[3]} />
                    <ServicesItem {...servicesitems[4]} />
                    <ServicesItem {...servicesitems[5]} />
                </div>
            </section>
            <CTA />
        </div>
    )
}

export default Services