import t1 from './images/room.jpg';
import t2 from './images/netizensRoom.jpg';
import t3 from './images/art.jpg';
const Theme = ({r1}) => {
    const theme1 = () => r1(t3);
    return(
        <>
            <div className="accordion-body py-4 px-5 flex flex-col inline-block">
                <button className="py-2 hover:border-blue-500 hover:border-opacity-25" onClick ={theme1}><img src={t1} alt="theme-1"></img></button>
                <button className="py-2" onClick ={""}><img src={t1} alt="theme-1"></img></button>
                <button className="py-2" onClick ={""}><img src={t2} alt="theme-1"></img></button>
                <button className="py-2" onClick ={""}><img src={t3} alt="theme-1"></img></button>
                <button className="py-2" onClick ={""}><img src={t1} alt="theme-1"></img></button>
              </div>
        </>
    )
}

export default Theme;