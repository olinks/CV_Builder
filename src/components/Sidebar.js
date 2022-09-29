const Sidebar = () => {
    return(
        <ul className="flex flex-col bg-slate-400 p5 m-5 rounded-sm shadow-outline">
            <li className="font-bold p-2 text-wrap m-1 text-indigo-600 hover:text-indigo-500 hover:bg-black">Change Art</li>
            <li className="font-bold p-2 text-wrap m-1 text-indigo-600 hover:text-indigo-500 hover:bg-black">Change Background<span> </span></li>
            <li className="font-bold p-2 text-wrap m-1 text-indigo-600 hover:text-indigo-500 hover:bg-black">Change Computer</li>
            <li className="font-bold p-2 text-wrap m-1 text-indigo-600 hover:text-indigo-500 hover:bg-black">Mint</li>
        </ul>
    )
}
export default Sidebar;