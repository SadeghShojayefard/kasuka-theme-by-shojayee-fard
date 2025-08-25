import './Counts.css'
import CountItem from './CountItem/CountItem';
function Counts() {

    const CountItemArray = [
        { icon: "./Counts/1.png", title: "76", text: "مشتریان خوشحال خوشحالیم که از معمار چیزی دریافت کنیم." },
        { icon: "./Counts/2.png", title: "15", text: "پروژه ها برای بدست آوردن و زمانی که او کل کسانی را که از او تعریف می کنند رد می کند و آنها را حقیر می شمارد" },
        { icon: "./Counts/3.png", title: "82", text: "سال ها تجربه یا اجازه دهید به دنبال نوعی مزیت باشد" },
        { icon: "./Counts/4.png", title: "20", text: "جوایز درد دردناک تر است در زمانی دیگر که هیچکس او را متهم نمی کند و هیچ وقت او را متهم نمی کند" },
    ]



    return (
        <div className='Counts-section'>
            <div className="counts-children">
                <img src="./Counts/counts.jpg" className='counts-children-img' />
            </div>
            <div className="counts-children">
                <h3>
                    شایسته‌ترین لذت را به هر حال ارائه می‌دهد
                </h3>
                <p>
                    خود درد ممکن است درد زیادی باشد ، اما دلیل اصلی آن درد است ، اما من به آن زمان می دهم تا مانند یک درد و درد بزرگ در آن فرو برود. درد مقصر است
                </p>
                <div className='Count-items-style'>
                    <CountItem {...CountItemArray[0]} />
                    <CountItem {...CountItemArray[1]} />
                    <CountItem {...CountItemArray[2]} />
                    <CountItem {...CountItemArray[3]} />
                </div>
            </div>
        </div>
    )
}


export default Counts;