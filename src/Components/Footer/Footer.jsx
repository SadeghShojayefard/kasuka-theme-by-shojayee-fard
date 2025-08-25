import './Footer.css'
import Logo from '../Share/logo/logo';

function Footer() {
    return (
        <footer>
            <div className='footer-up-part'>
                <div className='footer-up-part-col'>
                    <Logo></Logo>
                    <p>
                        تهران خیابان آزادی
                    </p>
                    <p>
                        تلفن: 01234567895
                    </p>
                    <p>
                        ایمیل: info@example.com
                    </p>
                    <div className='social-media'>
                        <a href="#"><img src="./Footer/facebook.png" /></a>
                        <a href="#"><img src="./Footer/instagram.png" /></a>
                        <a href="#"><img src="./Footer/linkedin.png" /></a>
                        <a href="#"><img src="./Footer/twitter.png" /></a>
                    </div>
                </div>
                <div className='footer-up-part-col'>
                    <p className='footer-title'>
                        لینک‌های مفید
                    </p>
                    <ul>
                        <li>
                            <a href="#">
                                درباره ما
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                خدمات
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                شرایط استفاده از خدمات
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                تهران خیابان آزادی
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                سیاست حفظ حریم خصوصی
                            </a>
                        </li>
                    </ul>

                </div>
                <div className='footer-up-part-col'>
                    <p className='footer-title'>
                        خدمات ما
                    </p>
                    <ul>
                        <li>
                            <a href="#">
                                طراحی وب سایت
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                توسعه وب
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                مدیریت تولید
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                بازار یابی
                            </a>
                        </li>
                        <li>
                            <a href="#">ٌ
                                طراحی گرافیک
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='footer-up-part-col'>
                    <p className='footer-title'>
                        خبر نامه
                    </p>
                    <p className='footer-text'>
                        با این حال ، هیچ یک از چیزهایی که من می خوانم تقصیر بزرگ ما نخواهد بود
                    </p>
                    <div className='newsletter'>
                        <form>
                            <input type='text' ></input>
                            <button>دنبال کردن</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='footer-down-part'>
                <p>
                    توسعه یافته توسط
                </p>
                <span>
                    صادق شجاعی فرد
                </span>
            </div>
        </footer>
    )
}


export default Footer;