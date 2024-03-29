import Logo from '../img/netizenlogo.jpg'
import { Link } from 'react-router-dom';
// import {init} from '../Web3Client';
// import { useState } from 'react';

const Nav = ({con, address}) => {
  // const [address, setAddress] = useState('Connect Wallet');
  // function connect () {
  //   let a = init();
  //   a = a.slice(0,5) + '. . . ' + a.slice(-5);
  //   setAddress(a);
  // }
    return (
        <div className='bg-slate-400'>
        <div className="relative bg-slate-400 px-4 pt-6 sm:px-2 lg:px-8">
          <nav className="relative flex items-center justify-between pb-                                                                                                                                                                                                                              5 sm:h-10 lg:justify-start" aria-label="Global">
            <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
              <div className="flex w-full items-center justify-between md:w-auto">
                <a href="/home">
                  <span className="sr-only">Netizens</span>
                  <img alt="Netizens" className="h-8 w-auto sm:h-10 rounded-full" src={Logo}></img>
                </a>
                <div className="-mr-2 flex items-center md:hidden">
                  <button type="button" className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            {/* Laptop Navigation  */}
            <div className="hidden md:ml-10 md:block md:space-x-8 md:pr-4 flex">
              <Link className="font-medium text-gray-500 hover:text-gray-900" to="/">Home</Link>
              <Link className="font-medium text-gray-500 hover:text-gray-900" to="/builder">Cv Builder</Link>
              <Link className="font-medium text-gray-500 hover:text-gray-900" to="/about">About</Link>
              <button className="font-medium text-indigo-600 hover:text-indigo-500 bg-black p-3 rounded-full flex-end" onClick={con}>{address}</button>
            </div>
          </nav>
        </div>
        {/* Mobile Menu */}
        <div className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden">
            <div className=" group overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                <div className="flex items-center justify-between px-5 pt-4 inline-block">
                  <div>
                      <img className="h-8 w-auto rounded-full" src={Logo} alt=""></img>
                  </div>
                  <div className="-mr-2">
                      <button type="button" className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close main menu</span>
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      </button>
                  </div>
                </div>
                {/* Mobile Navigation */}
                <div className="space-y-1 px-2 pt-2 pb-3 hidden">
                <Link className="font-medium px-5 py-5 text-gray-500 hover:text-gray-900" to="/">Home</Link>
                <br></br>
                <Link className="font-medium px-5 py-5 text-gray-500 hover:text-gray-900" to="/builder">CV Builder</Link>
                <br></br>
                <Link className="font-medium px-5 py-5 text-gray-500 hover:text-gray-900" to="/about">About</Link>              
                <br></br>
                </div>
                <button href="/builder" className="block w-full bg-gray-50 px-5 py-3 text-center font-medium text-indigo-600 hover:bg-gray-100 inline-block" onClick={con}> {address}</button>
            </div>
        </div>
      </div>
    )
}
export const conAddress = Nav.address;
export default Nav;