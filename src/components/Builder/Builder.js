import Nav from '../Nav'
import Hobby from './Hobby';
import Computer from './Computer';
import Art from './Art';
import Sidebar from '../Sidebar';
const Builder = () => {
    return (
        <>
        <Nav />
        <div>
            <div style={{backgroundImage: url('../../img/netizensRoom.jpg')}} className='w-full px-5 flex flex-row flex justify-start bg-gradient-to-r from-purple-500 to-pink-500 h-full'>
                <div className='basis-1/3 hover:grow' >
                <Hobby span="Hobby"/>
                </div>
                <div className='basis-1/3 hover:grow'>
                <Computer />
                </div>
                <div className='basis-1/3 hover:grow'>
                <Art />
                </div>
                <div className='basis-1/6 hover:grow z-10 h-96' >
                <Sidebar className="bg-blue " />
                </div>
            </div>
        </div>
        </>
    )
}
export default Builder; 