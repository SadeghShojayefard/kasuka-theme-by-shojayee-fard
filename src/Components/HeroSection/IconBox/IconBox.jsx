import './IconBox.css'

function IconBox({ icon, text }) {
    return (
        <div className='iconBox'>
            <img className='icon-image' src={icon} />
            <p className='icon-text'>
                {text}
            </p>
        </div>
    )
}

export default IconBox;