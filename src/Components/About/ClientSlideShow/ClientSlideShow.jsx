import './ClientSlideShow.css';

function ClientSlideShow({ img }) {
    return (
        <div className='about-client-img'><img src={img} /></div>
    )
}

export default ClientSlideShow;