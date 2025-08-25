import './Members.css';

function Members({ pic, name, job }) {
    return (
        <div className="member-card">
            <img src={pic} className='member-pic' />
            <p className='member-name' >{name}</p>
            <p className='member-job'>{job}</p>
        </div>
    )
}

export default Members;