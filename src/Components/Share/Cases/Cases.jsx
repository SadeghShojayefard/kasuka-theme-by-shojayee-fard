import './Cases.css';


function Cases({ icons, title, text }) {
    return (
        <div className='features-cases'>
            <img src={icons} className='features-img' />
            <div className='features-text'>
                <h3>
                    {title}
                </h3>
                <p>
                    {text}
                </p>
            </div>
        </div>
    )
}

export default Cases