import art from './images/art.jpg';
const Art = () => {
    return(
        <>
        <p>the Art goes here</p>
        {/* <img className="pt-5 skew-y-6" alt="Art" src={art}></img> */}
        <img className="pt-5 rounded-full skew-y-6 pl-5 shadow" alt="Art" src={art}></img>
        </>
    )
}
export default Art;