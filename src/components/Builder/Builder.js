import './popup.css';
import axios from 'axios';
import Theme from './Theme';
import Nav from '../Nav';
import Hobby from './Hobby';
import Computer from './Computer';
import Art from './Art';
import Button from './Social_button';
import Sidebar from '../Sidebar';
import background from './images/room.jpg';
import { useState } from 'react';

const Builder = ({con, address}) => {
    const [bg, setBg] = useState(background);
    const r1 = (b) => {
        setBg(b)
    }
    const [urlG, setUrlG] = useState("");
    const {image_url} = urlG;
    // const options = {
    //     method: 'GET',
    //     url: 'https://deep-index.moralis.io/api/v2/0x8D2d8E8f7ea927817bFd5463673910841E1a1495/nft',
    //     params: {chain: 'eth', format: 'decimal'},
    //     headers: {accept: 'application/json', 'X-API-Key': 'test'}
    // };

    // axios
    // .request(options)
    // .then(function (response) {
    //     console.log(response.data);
    // })
    // .catch(function (error) {
    //     console.error(error);
    // });

    const opt = {method: 'GET'};
    fetch('https://api.opensea.io/api/v1/asset/0xe42cad6fc883877a76a26a16ed92444ab177e306/37533/?include_orders=false', opt)
    .then(response => response.json())
    // .then((response) => {console.log(response)})
    .then(response => setUrlG(response))
    .catch(err => console.error(err));

    return (
        <div className="bg-slate-400">
        <Nav con={con} address={address} className ="mx-auto px-2" />
        <div className='flex flex-row w-full p-2'>
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
                <div className='ml-[200px] w-1/2 mt-12' onClick=''  data-bs-toggle="modal" data-bs-target="#nftBackdrop" >
                    <Art />
                </div>
            </div>

            <div className='basis-1/6 ml-2 h-96 z-999' >
                <Sidebar className="bg-blue " changeBg={r1} />

            </div>

            {/* start pick Theme Modal Modal */}

            <div className="modal fade fixed top-[50px] left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1"
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

            {/* start pick NFT Art Modal */}

            <div className="modal fade fixed top-[50px] left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                id="nftBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1"
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
                        <img src={image_url} alt="img"> </img>
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