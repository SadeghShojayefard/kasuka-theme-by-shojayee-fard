import './Sample.css';

function Sample({ sampleAddress }) {
    return (
        <div className='sample-item'>
            <img src={sampleAddress} />
        </div>
    )
}

export default Sample;