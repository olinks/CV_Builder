import Nav from '../Nav';
import Hobby from './Hobby';
import Computer from './Computer';
import Art from './Art';
import Sidebar from '../Sidebar';
import background from './images/room.jpg';
import {useState} from 'react';
const Builder = () => {
    // const roomstyle = {
    //     backgroundImage: 'url(${Room})'
    // } 
    const [mystate, setMySate] = useState(false);
    return (
        <>
        <Nav />
        <div className='flex flex-row w-full p-2'>
            <div style={{ backgroundImage: `url(${background})`, backgroundPosition: 'center', backgroundSize: 'cover' ,height: '550px' }} className='gap-4 place-items-stretch flex flex-row basis-4/5 rounded-sm p-[100px] bg-gradient-to-r from-purple-500 to-pink-500 h-full'>
                <div className='basis-1/4 border mr-[100px]' >
                    <Hobby span="Hobby"/>
                </div>
                <div className='basis-1/4 border mr-[100px]'>
                    <Computer />
                </div>
                <div className='basis-1/4 ml-2  ml-8'>
                    <Art />
                </div>
            </div>

            <div className='basis-1/6 ml-2 h-96 z-999' >
                <Sidebar className="bg-blue " />
            </div>

        </div>
        </>
    )
}
export default Builder; 