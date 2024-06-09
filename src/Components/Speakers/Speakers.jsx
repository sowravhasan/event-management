import { BsHeadsetVr } from "react-icons/bs";

const Speakers = () => {
  return (
    <div id="speakers" className="bg-gray-50 py-10 mb-10">
      <div className="flex gap-5 px-16 mb-10">
        <div>
          <BsHeadsetVr className="text-5xl text-blue-600"></BsHeadsetVr>
        </div>
        <div>
          <h1 className="text-3xl font-bold text-blue-600">Event Speakers</h1>
        </div>
      </div>

      
                <div className="grid md:grid-cols-3 gap-10 px-16">
                <div data-aos="fade-up" data-aos-duration="2000" className="bg-gray-100 rounded-xl p-5">
                    <div className="flex justify-center items-center">
                    <div className=" bg-blue-700 hover:bg-blue-400 rounded-full w-32 h-32 flex justify-center items-center mb-5"><img src="/python.jpg" alt="" /></div>
                    </div>
                    <p className="text-center text-xl font-bold">David Lyod</p>
                    <p className="text-xl font-bold text-blue-600 text-center">Manager</p>
                    <p className=" text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed vel velit</p>
                </div>

      
                <div data-aos="fade-down" data-aos-duration="2000" className="bg-gray-100 rounded-xl p-5">
                    <div className="flex justify-center items-center">
                    <div className=" bg-blue-700 hover:bg-blue-400 rounded-full w-32 h-32 flex justify-center items-center mb-5"><img src="/python.jpg" alt="" /></div>
                    </div>
                    <p className="text-center text-xl font-bold">David Lyod</p>
                    <p className="text-xl font-bold text-blue-600 text-center">Manager</p>
                    <p className=" text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed vel velit</p>
                </div>

      
                <div data-aos="fade-up" data-aos-duration="2000" className="bg-gray-100 rounded-xl p-5">
                    <div className="flex justify-center items-center">
                    <div className=" bg-blue-700 hover:bg-blue-400 rounded-full w-32 h-32 flex justify-center items-center mb-5"><img src="/python.jpg" alt="" /></div>
                    </div>
                    <p className="text-center text-xl font-bold">David Lyod</p>
                    <p className="text-xl font-bold text-blue-600 text-center">Manager</p>
                    <p className=" text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed vel velit</p>
                </div>
                </div>
                <div className="flex justify-center mt-8">
                <button className="text-white font-semibold p-3 bg-blue-700 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-800 focus:outline-none">View All Speakers</button>
                </div>
    </div>
  );
};

export default Speakers;
