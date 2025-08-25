import './SectionTitle.css'

function SectionTitle({ mainTitle, subTitle }) {
    return (
        <div>
            <p className="section-header">{mainTitle}</p>
            <p className='section-header-2'>{subTitle}</p>
        </div>
    )
}


export default SectionTitle;