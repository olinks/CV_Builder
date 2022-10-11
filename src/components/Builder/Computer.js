import { FaUser } from "react-icons/fa";
const Computer = () => {
    return(
        <>
            <div className="">
                <form className="flex flex-col">
                    <div className="flex gap">
                        <label>Skills<FaUser /></label>
                        <input className="border rounded-full" type="text" placeholder="Username"></input>
                    </div>
                    <div>
                        <label>Experience</label>
                        <input className="border rounded-full" type="text"></input>
                    </div>
                    <div>
                        <label>Projects</label>
                        <input className="border rounded-full" type="text"></input>
                    </div>
                    <div>
                        <label>Portifolio</label>
                        <input className="border rounded-full" type="text"></input>
                    </div>
                </form>
                
            </div>
        </>
    )
}
export default Computer;