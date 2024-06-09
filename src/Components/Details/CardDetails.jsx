
import { BsFillCartPlusFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/NAvbar';

const CardDetails = ({data}) => {
    const {id, course_name, title,rating, lesson_number, time,price, img, desctiption } = data || {};
    return (
        <div >
            <div className='-mt-10'>
            <Navbar></Navbar>
            </div>
            <div className='bg-slate-200 rounded-lg'>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 border">
                    <img className='w-full h-full rounded-l-lg' src={img} alt="" />
                </div>

                <div>
                <div>
            </div>
            <div className='py-4 px-4'>
                <p className='text-blue-700'>{course_name}</p>
                <h1 className='text-4xl font-bold mb-3'>{title}</h1>
                <p className='text-justify'>{desctiption}</p>
                <div className="flex items-center mb-2 mt-2">
                    <p className="">({rating})</p>
                    <div className="rating">
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500 w-4 h-4" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500 w-4 h-4" checked />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500 w-4 h-4" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500 w-4 h-4" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500 w-4 h-4" />
                    </div>
                </div>
                <p><span className='font-semibold'>Lessons:</span> {lesson_number}</p>
                <p><span className='font-semibold'>Duration:</span> {time}</p>
                <div className="flex gap-10 items-center mt-3 mb-3">
                    <h1 className="text-white rounded-md p-2 bg-blue-800">$ {price}</h1>
                    <button className="text-white font-semibold px-3 py-2 bg-blue-700 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-800 focus:outline-none"><BsFillCartPlusFill className="text-xl \"></BsFillCartPlusFill></button>
                    <Link to={`/details/${id}`} className="text-white font-semibold px-3 py-2 bg-blue-700 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-800 focus:outline-none">
                Enroll Now
                </Link>
                </div>
                
            </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default CardDetails;
