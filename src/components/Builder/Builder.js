import Nav from '../Nav';
import Hobby from './Hobby';
import Computer from './Computer';
import Art from './Art';
import Sidebar from '../Sidebar';
import background from './images/room.jpg';
const Builder = () => {
    return (
        <div className="bg-white">
        <Nav />
        <div className='flex flex-row w-full p-2'>
            <div style={{ backgroundImage: `url(${background})`, backgroundPosition: 'center', backgroundSize: 'cover' ,height: '550px' }} className='overflow-x gap-4 place-items-stretch flex flex-row basis-4/5 rounded-sm p-[100px] bg-gradient-to-r from-purple-500 to-pink-500 h-full'>
                <div className='basis-1/4 border mr-[100px]' >
                    <Hobby />
                </div>
                <div className='basis-1/2 border mr-[50px]' style={{backgroundColor: "#ffffff63"}}>
                    <Computer />
                </div>
                <div className='basis-1/4 ml-2 mt-10 pl-5 ml-8'>
                    <Art />
                </div>
            </div>

            <div className='basis-1/6 ml-2 h-96 z-999' >
                <Sidebar className="bg-blue " />
            </div>

        </div>
        </div>
    )
}
export default Builder; 