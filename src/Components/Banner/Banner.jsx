import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Banner = () => {
    
    return (
        <div className="px-5 bg-gradient-to-r from-cyan-500 to-blue-500 h-screen flex items-center">
            <div className="carousel w-full h-auto rounded-md">
  <div id="slide1" className="carousel-item relative w-full">
      {/* Banner 1 */}
      <div className="max-w-6xl mx-auto rounded-xl flex flex-wrap md:gap-10 p-6">
        
        <div className="flex items-center left-0">
          <div data-aos="fade-up" data-aos-duration="2000">
          <div className="max-w-lg">
            <h1 className="text-5xl text-white font-bold mb-4">
              Unlock New Opportunities: Elevate Your Expertise with Our Online
              Courses
            </h1>
            <p className="text-white mb-5">
            In today's dynamic and competitive professional landscape, continuous learning and skill development are essential for achieving your career goals.
            </p>
          </div>
          <div className="flex">
            <div>
              <input
                className="border-2 border-gray-300 bg-white h-12 px-5 pr-10 rounded-l-full text-sm focus:outline-none focus:border-indigo-500 transition duration-300 ease-in-out hover:border-indigo-300"
                type="text"
                id="exampleInput"
                placeholder="Find events"
              />
            </div>
            <div className="-ml-3">
              <button className="rounded-r-full focus:outline-none h-12 px-5 pr-10 bg-blue-800 text-white font-semibold hover:bg-blue-600 transition duration-300">
                Search
              </button>
            </div>
          </div>
          </div>
        </div>

        <div>
          <img className=" -mb-6" src="/src/assets/images/Untitled-1.png" data-aos="fade-up-left" data-aos-duration="2000"/>
        </div>
      </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
      {/* Banner 2 */}
      <div className="max-w-6xl mx-auto rounded-xl flex flex-wrap md:gap-5 p-6">
        
        <div className="flex items-center">
          <div>
          <div className="max-w-lg">
            <h1 className="text-5xl text-white font-bold mb-4">
            Learn, Grow, Succeed: Elevate Your Career with Our Online Learning Resources
            </h1>
            <p className="text-white mb-5">
            In today's dynamic and competitive professional landscape, continuous learning and skill development are essential for achieving your career goals.
            </p>
          </div>
          <div className="flex">
            <div>
              <input
                className="border-2 border-gray-300 bg-white h-12 px-5 pr-10 rounded-l-full text-sm focus:outline-none focus:border-indigo-500 transition duration-300 ease-in-out hover:border-indigo-300"
                type="text"
                id="exampleInput"
                placeholder="Find events..."
              />
            </div>
            <div className="-ml-3">
              <button className="rounded-r-full focus:outline-none h-12 px-5 pr-10 bg-blue-800 text-white font-semibold hover:bg-blue-600 transition duration-300">
                Search
              </button>
            </div>
          </div>
          </div>
        </div>

        <div>
          <img className="object-cover -mb-6" src="/src/assets/images/Untitled-1.png"/>
        </div>
      </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
            {/* Banner 3 */}
            <div className="max-w-6xl mx-auto rounded-xl flex flex-wrap md:gap-10 p-6">
        
        <div className="flex items-center left-0">
          <div>
          <div className="max-w-lg">
            <h1 className="text-5xl text-white font-bold mb-4">
            Empower Yourself: Expand Your Skills Through Our Online Learning
            </h1>
            <p className="text-white mb-5">
            In today's dynamic and competitive professional landscape, continuous learning and skill development are essential for achieving your career goals.
            </p>
          </div>
          <div className="flex">
            <div>
              <input
                className="border-2 border-gray-300 bg-white h-12 px-5 pr-10 rounded-l-full text-sm focus:outline-none focus:border-indigo-500 transition duration-300 ease-in-out hover:border-indigo-300"
                type="text"
                id="exampleInput"
                placeholder="Find events..."
              />
            </div>
            <div className="-ml-3">
              <button className="rounded-r-full focus:outline-none h-12 px-5 pr-10 bg-blue-800 text-white font-semibold hover:bg-blue-600 transition duration-300">
                Search
              </button>
            </div>
          </div>
          </div>
        </div>

        <div>
          <img className="object-cover -mb-6" src="/src/assets/images/Untitled-1.png"/>
        </div>
      </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
      {/* Banner 2 */}
      <div className="max-w-6xl mx-auto rounded-xl flex flex-wrap md:gap-5 p-6">
        
        <div className="flex items-center">
          <div>
          <div className="max-w-lg">
            <h1 className="text-5xl text-white font-bold mb-4">
            Learn, Grow, Succeed: Elevate Your Career with Our Online Learning Resources
            </h1>
            <p className="text-white mb-5">
            In today's dynamic and competitive professional landscape, continuous learning and skill development are essential for achieving your career goals.
            </p>
          </div>
          <div className="flex">
            <div>
              <input
                className="border-2 border-gray-300 bg-white h-12 px-5 pr-10 rounded-l-full text-sm focus:outline-none focus:border-indigo-500 transition duration-300 ease-in-out hover:border-indigo-300"
                type="text"
                id="exampleInput"
                placeholder="Find events..."
              />
            </div>
            <div className="-ml-3">
              <button className="rounded-r-full focus:outline-none h-12 px-5 pr-10 bg-blue-800 text-white font-semibold hover:bg-blue-600 transition duration-300">
                Search
              </button>
            </div>
          </div>
          </div>
        </div>

        <div>
          <img className="object-cover -mb-6" src="/src/assets/images/Untitled-1.png"/>
        </div>
      </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;