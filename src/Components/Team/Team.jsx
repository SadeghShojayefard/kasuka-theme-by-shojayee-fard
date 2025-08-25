import './Team.css'
import SectionTitle from '../Share/SectionTitle/SectionTitle';
import Members from './Members/Members';
function Team() {
    const membersObj = [
        { pic: "./Team/team-1.jpg", name: "والتر وایت", job: "مدیر ارشد اجرایی" },
        { pic: "./Team/team-2.jpg", name: "سارا جونسون", job: "مدیر تولید" },
        { pic: "./Team/team-3.jpg", name: "ویلیام اندرسون", job: "CTO" },
        { pic: "./Team/team-4.jpg", name: "آماندا جپسون", job: "حسابدار" }
    ]
    return (
        <div className='container'>
            <SectionTitle mainTitle='تیم' subTitle='تیم ما را بررسی کنید' />
            <div className='team-style'>
                <Members {...membersObj[0]} />
                <Members {...membersObj[1]} />
                <Members {...membersObj[2]} />
                <Members {...membersObj[3]} />
            </div>
        </div>
    )
}


export default Team;