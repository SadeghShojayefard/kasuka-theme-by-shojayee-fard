import './ContactUs.css';
import SectionTitle from '../Share/SectionTitle/SectionTitle';
import Cases from '../Share/Cases/Cases';
import ButtonA from '../Share/ButtonA/ButtonA';
function ContactUs() {
    const casesProps = [
        { icons: "./About/1.png", title: "مکان", text: "تهران خیابان آزادی" },
        { icons: "./About/2.png", title: "ایمیل", text: "info@example.com" },
        { icons: "./About/3.png", title: "شماره تماس", text: "0123467889" },
    ]
    return (
        <div className='container'>
            <SectionTitle mainTitle='تماس با ما' subTitle='با ما تماس بگیرید' />
            <div className='mapImg'>
                <img src="./ContactUs/map.png" />
            </div>
            <div className='contact-box'>
                <div className='contact-info'>
                    <Cases {...casesProps[0]} />
                    <Cases {...casesProps[1]} />
                    <Cases {...casesProps[2]} />
                </div>
                <div className='contact-form'>
                    <form>
                        <div className='form-first-row'>
                            <input type='text' placeholder='نام'></input>
                            <input type='text' placeholder='ایمیل'></input>
                        </div>
                        <div className='form-second-row'>
                            <input type='text' placeholder='عنوان'></input>
                            <textarea rows="5" cols="30" placeholder='پیام'>
                            </textarea>

                        </div>
                        <div className='form-btn-style'>

                            <ButtonA text="ارسال پیام" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default ContactUs