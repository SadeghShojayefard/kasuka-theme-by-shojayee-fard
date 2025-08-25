import './CountItem.css';


function CountItem({ icon, title, text }) {
    return (
        <div className='Count-item-body'>
            <div className='Count-item-up'>
                <img src={icon} />
                <p>
                    {title}
                </p>
            </div>
            <div className='Count-item-down'>
                {text}
            </div>
        </div>
    )
}


export default CountItem;