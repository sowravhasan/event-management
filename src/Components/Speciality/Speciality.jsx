import { FaCalendarAlt, FaLocationArrow, FaMicroscope,  } from "react-icons/fa";

const Speciality = () => {
    return (
        <div className="px-16 py-10">
            <h1 className="text-3xl font-bold text-blue-600 py-6">Our Speciality</h1>
            <div className="grid md:grid-cols-3">
                <div data-aos="fade-up" data-aos-duration="2000" className="bg-gray-50 rounded-xl p-5">
                    <div className="flex justify-center items-center">
                    <div className=" bg-blue-700 hover:bg-blue-400 rounded-full w-32 h-32 flex justify-center items-center mb-5"><FaCalendarAlt className="text-5xl text-white "></FaCalendarAlt></div>
                    </div>
                    <p className="mb-3 text-center text-xl font-bold">7/24 EVENT AVALIABLE</p>
                    <p className=" text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed vel velit</p>
                    <div className="flex justify-center p-10">
                  <button className="text-white font-semibold p-3 bg-blue-700 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-800 focus:outline-none">Details</button>
                    </div>
                </div>
                <div data-aos="fade-down" data-aos-duration="2000" className="bg-gray-50 rounded-xl p-5">
                    <div className="flex justify-center items-center">
                    <div className=" bg-blue-700 hover:bg-blue-400 rounded-full w-32 h-32 flex justify-center items-center mb-5"><FaLocationArrow className="text-5xl text-white "></FaLocationArrow></div>
                    </div>
                    <p className="mb-3 text-center text-xl font-bold">GREAT LOCATIONS</p>
                    <p className=" text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed vel velit</p>
                    <div className="flex justify-center p-10">
                  <button className="text-white font-semibold p-3 bg-blue-700 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-800 focus:outline-none">Details</button>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="2000" className="bg-gray-50 rounded-xl p-5">
                    <div className="flex justify-center items-center">
                    <div className=" bg-blue-700 hover:bg-blue-400 rounded-full w-32 h-32 flex justify-center items-center mb-5"><FaMicroscope className="text-5xl text-white "></FaMicroscope></div>
                    </div>
                    <p className="mb-3 text-center text-xl font-bold">MORE THEN 200 SPEAKERS</p>
                    <p className=" text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed vel velit</p>
                    <div className="flex justify-center p-10">
                  <button className="text-white font-semibold p-3 bg-blue-700 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-800 focus:outline-none">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Speciality;