import { BsFillCartPlusFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

const SignleCard = ({data}) => {
    const {id, course_name, title,rating, lesson_number, time,price, img } = data || {};
    return (
        <div className="bg-slate-200 rounded-xl" data-aos="fade-up"
        data-aos-anchor-placement="top-bottom" data-aos-duration="2000">
            <div>
                <img className="h-64 w-full rounded-t-xl mb-3" src={img} alt="" />
                <div className="flex justify-between items-center px-3 mb-3">
                    <h1 className="text-white rounded-md p-2 bg-blue-800">$ {price}</h1>
                    <button className="text-white font-semibold px-3 py-2 bg-blue-700 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-800 focus:outline-none"><BsFillCartPlusFill className="text-xl \"></BsFillCartPlusFill></button>
                </div>
                <p className="px-3 text-blue-700">{course_name}</p>
                <h1 className="text-lg font-bold pl-3">{title}</h1>
                <div className="flex items-center mb-2 mt-2">
                    <p className="px-3">({rating})</p>
                    <div className="rating">
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500 w-4 h-4" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500 w-4 h-4" checked />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500 w-4 h-4" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500 w-4 h-4" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500 w-4 h-4" />
                    </div>

                </div>
                <div className="flex justify-between px-3 mb-3">
                    <p>Lesson: {lesson_number}</p>
                    <p>Duration: {time}</p>
                </div>
                <hr className="border-1 border-gray-400"/>
                <div className="px-3 py-4">
                <Link to={`/details/${id}`} className="text-white font-semibold px-3 py-2 bg-blue-700 w-full rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-800 focus:outline-none">
                View Details
                </Link>

                </div>

            </div>
        </div>
    );
};

export default SignleCard;