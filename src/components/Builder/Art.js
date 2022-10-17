import art from './images/art.jpg';
// import {FaTwitter, FaGithub, FaDiscord} from 'react-icons/fa';

// import  { useState } from 'react';
const Art = () => {
    // const [count, setCount] = useState(4);
    // function decrementCount(){
    //     setCount(prevCount => prevCount - 1);
    // }
    // function incrementCount(){
    //     setCount(prevCount => prevCount + 1);
    // }
    return(
        <>
        <p className="hidden hover:block" >the Art goes here</p>
        {/* <img className="pt-5 skew-y-6" alt="Art" src={art}></img> */}
        <img className="rounded-full shadow" alt="Art" src={art}></img>
        <div className="flex flex-col">
            {/* <h3 className="font-medium pointer"><span><FaTwitter className='xl' fill='blue' /> </span>Twitter</h3>
            <h3 className="font-medium"><span><FaGithub className='xl' fill='blue' /></span>Github</h3>
            <h3 className="font-medium"><span><FaDiscord className='xl' fill='blue' /></span>Discord</h3> */}
            {/* <div>
                <button onClick={decrementCount}>
                    -
                </button>
                <span>{count}</span>
                <button onClick={incrementCount}>
                    +
                </button>
            </div> */}
        </div>
        </>
    )
}
export default Art;