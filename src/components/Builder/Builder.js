import Nav from '../Nav';
import Hobby from './Hobby';
import Computer from './Computer';
import Art from './Art';
import './popup.css';
import Sidebar from '../Sidebar';
import background from './images/room.jpg';
import { useState } from 'react';
import t1 from './images/netizensRoom.jpg';

const Builder = () => {
    const [bg, setBg] = useState(background);
    const r1 = (b) => {
        setBg(b)
    }
    return (
        <div className="bg-slate-400">
        <Nav className ="mx-auto px-2" />
        <div className='flex flex-row w-full p-5'>
            <div style={{ backgroundImage: `url(${bg})`, backgroundPosition: 'center', backgroundSize: 'cover' ,height: '550px' }} className='overflow-x gap-4 place-items-stretch flex flex-row basis-4/5 rounded-sm p-[100px] bg-gradient-to-r from-purple-500 to-pink-500 h-full'>
                <div className='basis-1/4 mr-[100px] group relative inline-block cursor-pointer select-none' >
                    <span className="popuptext invisible group-hover:visible group-focus:visible absolute w-160 bg-slate-400 text-center rounded-md px-1 z-10 bottom-[20px] left-10" id="myPopup">Change Hobby</span>
                    <Hobby />
                </div>
                {/* <div className='basis-1/2 border mr-[50px]' style={{backgroundColor: ""}}> */}
                <div className="popup basis-1/2 mr-[50px] group relative inline-block cursor-pointer select-none" onclick="">
                    <span className="popuptext invisible group-hover:visible group-focus:visible absolute w-160 bg-slate-400 text-center rounded-md px-1 z-10 bottom-[20px] left-10" id="myPopup">Change Computer</span>
                    <Computer />
                </div>
                <div className='basis-1/4 ml-2 mt-10 pl-5 ml-8'>
                    <Art />
                </div>
            </div>

            <div className='basis-1/6 ml-2 h-96 z-999' >
                <Sidebar className="bg-blue " changeBg={r1} />
            </div>

        </div>
        </div>
    )
}
export default Builder; 