import Nav from '../Nav';
import Hobby from './Hobby';
import Computer from './Computer';
import Art from './Art';
import './popup.css';
import Sidebar from '../Sidebar';
import background from './images/room.jpg';
import { useState } from 'react';
import Theme from './Theme';
// import t1 from './images/netizensRoom.jpg';

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
                <div className="popup basis-1/2 mr-[50px] group relative inline-block cursor-pointer select-none" onclick=""  data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    <span className="popuptext invisible group-hover:visible group-focus:visible relative w-160 bg-slate-400 text-center rounded-md px-1 z-10 bottom-5 left-10" id="myPopup">Change Computer</span>
                    <Computer />
                </div>
                <div className='basis-1/4 ml-2 mt-10 pl-5 ml-8'>
                    <Art />
                </div>
            </div>

            <div className='basis-1/6 ml-2 h-96 z-999' >
                <Sidebar className="bg-blue " changeBg={r1} />
            </div>

            {/* start Modal */}

            <div className="modal fade fixed top-[50px] left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog relative w-auto pointer-events-none">
                    <div
                    className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                    <div
                        className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                        <h5 className="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel">
                        Modal title
                        </h5>
                        <button type="button"
                        className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                        data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body relative p-4">
                        <Theme func={r1} />
                    </div>
                    <div
                        className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                        <button type="button"
                        className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                        data-bs-dismiss="modal">Close</button>
                        <button type="button"
                        className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1">Understood</button>
                    </div>
                    </div>
                </div>
            </div>

            {/* End Modal */}

        </div>
        </div>
    )
}
export default Builder; 