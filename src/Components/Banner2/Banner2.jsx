
import { Link } from "react-router-dom";
import "./Banner2.css"

const Banner2 = () => {
    return (
        <div className="py-16">
            <nav id='bg' className="max-w-full flex justify-center items-center">
                    <div className="">
                        <div data-aos="zoom-out-up" data-aos-duration="2000" className='flex flex-col justify-center items-center'>
                            <h1 className='text-lg md:text-2xl lg:text-5xl font-bold text-white text-justify mb-4'>Start your learning journey today! <br /> Enroll now in our online course.</h1>
                            <p className="text-white text-justify mb-4">Start your learning journey today! Enroll now in our online course.</p>
                                <div className='flex justify-center'>
                                <Link to={"/signup"} className="rounded-lg focus:outline-none h-12 px-5 bg-blue-800 text-white font-semibold hover:bg-blue-600 transition duration-300 flex items-center">
                                Explore More
                                </Link>
                                </div>
                        </div>
                        
                    </div>
                </nav>
        </div>
    );
};

export default Banner2;