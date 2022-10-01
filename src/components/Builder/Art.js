import art from './images/art.jpg';
import {FaTwitter, FaGithub, FaDiscord} from 'react-icons/fa'
const Art = () => {
    return(
        <>
        <p className="hidden hover:block" >the Art goes here</p>
        {/* <img className="pt-5 skew-y-6" alt="Art" src={art}></img> */}
        <img className="rounded-full shadow" alt="Art" src={art}></img>
        <div className="flex flex-row">
            <h3 className="font-medium pointer"><span><FaTwitter className='xl' fill='blue' /> </span>Twitter</h3>
            <h3 className="font-medium"><span><FaGithub className='xl' fill='blue' /></span>Github</h3>
            <h3 className="font-medium"><span><FaDiscord className='xl' fill='blue' /></span>Discord</h3>
        </div>
        </>
    )
}
export default Art;