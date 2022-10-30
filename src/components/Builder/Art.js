import art from './images/art.jpg';
import './art.css';
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
        {/* -skew-y-6 */}
        <img className="w-full shadow art" alt="Art" src={art}></img>
        </>
    )
}
export default Art;