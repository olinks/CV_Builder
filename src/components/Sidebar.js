// import useCollapse from 'react-collapsed';
import t1 from './Builder/images/netizensRoom.jpg';
import t2 from './Builder/images/art.jpg';
const Sidebar = ({changeBg}) => {
  const onSelect = () => {
    changeBg(t1);
  }
    return(
        <div className="accordion accordion-flush" id="accordionFlushExample">
          {/* Theme */}
          <div className="accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
            <h2 className="accordion-header mb-0" id="flush-headingOne">
              <button className="accordion-button relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                aria-expanded="false" aria-controls="flush-collapseOne">
                Theme
              </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse border-0 collapse show max-h-[150px] overflow-y-auto"
              aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body py-4 px-5 flex flex-col inline-block">
                <button className="py-2" onClick ={onSelect}><img src={t1} alt="theme-1"></img></button>
                <button className="py-2"><img src={t1} alt="theme-1"></img></button>
                <button className="py-2"><img src={t1} alt="theme-1"></img></button>
                <button className="py-2"><img src={t1} alt="theme-1"></img></button>
              </div>
            </div>
          </div>
          {/* Road Map */}
          <div className="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
            <h2 className="accordion-header mb-0" id="flush-headingTwo">
              <button className="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo"
                aria-expanded="false" aria-controls="flush-collapseTwo">
                Roadmap
              </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse border-0 collapse" aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample">
              <div className="accordion-body py-4 px-5">
                Roadmap Roadmap
              </div>
            </div>
          </div>
          {/* Community */}
          <div className="accordion-item border-l-0 border-r-0 border-b-0 rounded-none bg-white border border-gray-200">
            <h2 className="accordion-header mb-0" id="flush-headingThree">
              <button className="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree"
                aria-expanded="false" aria-controls="flush-collapseThree">
                Community
              </button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample">
              <div className="accordion-body py-4 px-5">
                Community Community
              </div>
            </div>
          </div>
          {/* Product */}
          <div className="accordion-item border-l-0 border-r-0 border-b-0 rounded-none bg-white border border-gray-200">
            <h2 className="accordion-header mb-0" id="flush-headingFour">
              <button className="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour"
                aria-expanded="false" aria-controls="flush-collapseFour">
                Product
              </button>
            </h2>
            <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour"
              data-bs-parent="#accordionFlushExample">
              <div className="accordion-body py-4 px-5">Product Product</div>
            </div>
          </div>
          {/* Paper */}
          <div className="accordion-item border-l-0 border-r-0 border-b-0 rounded-none bg-white border border-gray-200">
            <h2 className="accordion-header mb-0" id="flush-headingFive">
              <button className="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive"
                aria-expanded="false" aria-controls="flush-collapseFive">
                Paper
              </button>
            </h2>
            <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive"
              data-bs-parent="#accordionFlushExample">
              <div className="accordion-body py-4 px-5">
                Paper Paper
              </div>
            </div>
          </div>
</div>

    )
}
export default Sidebar;