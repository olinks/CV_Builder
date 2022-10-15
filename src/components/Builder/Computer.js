import './popup.css';
const Computer = () => {


    return(
            <div className="popup group relative inline-block cursor-pointer select-none" onclick="">
                <span className="popuptext invisible group-hover:visible group-focus:visible absolute w-160 bg-slate-400 text-center rounded-md px-1 z-10 bottom-[20px] left-10" id="myPopup">A Simple Popup!</span>
            </div>
    )
}
export default Computer;