import Nav from './Nav'
import Banner from './Banner'
import Banner_image from '../img/netizens.jpg'
const Home = ({con, address}) =>{
    return(
    <div className="App bg-slate-400">
      <div className="relative bg-slate-400 overflow-hidden">
        <div className="mx-auto max-w-7xl bg-slate-400">
          <div className="relative z-10 bg-slate-400 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
            <Nav con={con} address={address} />
            <Banner />
            <svg className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true" fill="#9da8b9">
              <polygon points="40,0 90,0 50,100 0,100" />
            </svg>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          {/* <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full" src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt=""></img> */}
          <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full" src={Banner_image} alt=""></img>
        </div>
      </div>
      {/* Testing */}
                
                

      {/* Testing */}
    </div>
    )
}
export default Home;