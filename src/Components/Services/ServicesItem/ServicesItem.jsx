import './ServicesItem.css';

function ServicesItem({ icon, title, text }) {
    return (
        <div className='Services-Item'>
            <img src={icon} />
            <a href="#"><h4>{title}</h4></a>
            <p>
                {text}
            </p>
        </div>
    )
}

export default ServicesItem;
