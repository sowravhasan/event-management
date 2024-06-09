import { Link } from "react-router-dom";
import { BiCalendarEvent } from "react-icons/bi";
import "./Events.css";
import { BsFillCartPlusFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import ShowDetails from "../ShowDetails";

const Events = () => {
  const [workshop, setWorkshop] = useState([]);
  const [webinars, setWebinars] = useState([]);
  const [career, setCareer] = useState([]);
  const [education, setEducation] = useState([]);
  const [training, setTraining] = useState([]);
  const [seminar, setSeminar] = useState([]);
  const [toggle, setToggle] = useState(1)

  const toogleTabs = (id) => {
    setToggle(id)
  }

  useEffect( () => {
    fetch("/webinars.json")
    .then(res => res.json())
    .then(data => setWebinars(data));
  }, []);

  useEffect( () => {
    fetch("/workshop.json")
    .then(res => res.json())
    .then(data => setWorkshop(data));
  }, []);

  useEffect( () => {
    fetch("/careerFair.json")
    .then(res => res.json())
    .then(data => setCareer(data));
  }, []);

  useEffect( () => {
    fetch("/education.json")
    .then(res => res.json())
    .then(data => setEducation(data));
  }, []);

  useEffect( () => {
    fetch("/training.json")
    .then(res => res.json())
    .then(data => setTraining(data));
  }, []);

  useEffect( () => {
    fetch("/seminar.json")
    .then(res => res.json())
    .then(data => setSeminar(data));
  }, []);
  return (
    <div id="events">
      <div className="flex items-center">
        <div>
          <h1 className="text-3xl font-bold px-16 text-blue-600 mb-10">Our Services</h1>
        </div>
      </div>
      {/* Tabs */}
      <div className="flex flex-wrap gap-5 items-center px-16 mb-10">
      <div>
            <BiCalendarEvent className="text-5xl text-blue-600"></BiCalendarEvent>
        </div>
      <div>
        <ul className="flex flex-wrap gap-5 font-bold text-xl">
          <li>
            <Link onClick={() => toogleTabs(1)}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-blue-600 underline"
                  : ""
              }
            >
              <span className="hover:text-blue-600">Workshop</span>
            </Link>
          </li>
          <li>
            <Link onClick={() => toogleTabs(2)}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-blue-600 underline"
                  : ""
              }
            >
              <span className="hover:text-blue-600">Webinars</span>
            </Link>
          </li>
          <li>
            <Link onClick={() => toogleTabs(3)}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-blue-600 underline"
                  : ""
              }
            >
              <span className="hover:text-blue-600">Career Fairs</span>
            </Link>
          </li>
          <li>
            <Link onClick={() => toogleTabs(4)}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-blue-600 underline"
                  : ""
              }
            >
              <span className="hover:text-blue-600">Educational Conferences</span>
            </Link>
          </li>
          <li>
            <Link onClick={() => toogleTabs(5)}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-blue-600 underline"
                  : ""
              }
            >
              <span className="hover:text-blue-600">Seminar</span>
            </Link>
          </li>
          <li>
            <Link onClick={() => toogleTabs(6)}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-blue-600 underline"
                  : ""
              }
            >
              <span className="hover:text-blue-600">Training</span>
            </Link>
          </li>
        </ul>
      </div>
      </div>


         <div  className={toggle === 1 ? "show-content" : "content"} >
                          {/* Workshop Data */}
            <div className="grid md:grid-cols-2 gap-10 px-16">
              {
        workshop.map(details =>  (<ShowDetails details={details}></ShowDetails> ,<div key={details.id}>
          <div className="bg-slate-100 rounded-xl flex" data-aos="fade-up"
            data-aos-anchor-placement="top-bottom" data-aos-duration="2000">
              <div>
                <img className="h-64 w-full rounded-t-xl mb-3" src={details.img} alt="" />
              </div>
                <div>
                    <p className="px-3 text-blue-700 mt-3">Web Development</p>
                    <h1 className="text-lg font-bold pl-3">{details.title}</h1>
                    <div className="flex items-center mb-2 mt-2">
                        <p className="px-3">(5.0)</p>
                        <div className="rating">
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500 w-4 h-4" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500 w-4 h-4" checked />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500 w-4 h-4" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500 w-4 h-4" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500 w-4 h-4" />
                        </div>
                    </div>
                    
                    <div className="flex justify-between px-3 mb-3">
                        <p>Date: {details.date}</p>
                        <p>Location: {details.location}</p>
                    </div>
                    <div className="flex justify-between items-center px-3 mb-3">
                        <h1 className="text-lg font-bold text-blue-800">Starting From $ {details.price}</h1>
                        <button className="text-white font-semibold px-3 py-2 bg-blue-700 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-800 focus:outline-none"><BsFillCartPlusFill className="text-xl \"></BsFillCartPlusFill></button>
                    </div>
    
                    <hr className="border-1 border-gray-400"/>
                    <div className="px-3 py-4">
                    <Link to={`/eventDetails/${details.id}`} className="hover:text-white text-gray-600 font-semibold px-3 py-2 border-2 border-gray-400 w-full rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-700 focus:outline-none">
                    View Details
                    </Link>
    
                    </div>
    
                </div>
            </div>
          </div>))
      }
              </div>
              <div className="flex justify-center p-10">
                  <button className="text-white font-semibold p-3 bg-blue-700 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-800 focus:outline-none">See All</button>
              </div>
        </div>



        <div className={toggle === 2 ? "show-content" : "content"}>
                        {/* Webinars Data */}
      <div className="grid md:grid-cols-2 gap-10 px-16">
              {
        webinars.map(details => (<div key={details.id} >
          <div className="bg-slate-200 rounded-xl flex" data-aos="fade-up"
            data-aos-anchor-placement="top-bottom" data-aos-duration="2000">
              <div>
                <img className="h-64 w-full rounded-t-xl mb-3" src={details.img} alt="" />
              </div>
                <div>
                    <p className="px-3 text-blue-700 mt-3">Web Development</p>
                    <h1 className="text-lg font-bold pl-3">{details.title}</h1>
                    <div className="flex items-center mb-2 mt-2">
                        <p className="px-3">(5.0)</p>
                        <div className="rating">
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500 w-4 h-4" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500 w-4 h-4" checked />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500 w-4 h-4" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500 w-4 h-4" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500 w-4 h-4" />
                        </div>
                    </div>
                    
                    <div className="flex justify-between px-3 mb-3">
                        <p>Date: {details.date}</p>
                        <p>Location: {details.location}</p>
                    </div>
                    <div className="flex justify-between items-center px-3 mb-3">
                        <h1 className="text-lg font-bold text-blue-800">Starting From $ {details.price}</h1>
                        <button className="text-white font-semibold px-3 py-2 bg-blue-700 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-800 focus:outline-none"><BsFillCartPlusFill className="text-xl \"></BsFillCartPlusFill></button>
                    </div>
    
                    <hr className="border-1 border-gray-400"/>
                    <div className="px-3 py-4">
                    <Link to={`/webinarsDetails/${details.id}`} className="hover:text-white text-gray-600 font-semibold px-3 py-2 border-2 border-gray-400 w-full rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-700 focus:outline-none">
                    View Details
                    </Link>
    
                    </div>
    
                </div>
            </div>
          </div>))
      }
              </div>
              <div className="flex justify-center p-10">
                  <button className="text-white font-semibold p-3 bg-blue-700 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-800 focus:outline-none">See All</button>
              </div>
        </div>



        <div className={toggle === 3 ? "show-content" : "content"}>
                        {/* Career Fairs Data */}
      <div className="grid md:grid-cols-2 gap-10 px-16">
              {
        career.map(details => (<div key={details.id}>
          <div className="bg-slate-200 rounded-xl flex" data-aos="fade-up"
            data-aos-anchor-placement="top-bottom" data-aos-duration="2000">
              <div>
                <img className="h-64 w-full rounded-t-xl mb-3" src={details.img} alt="" />
              </div>
                <div>
                    <p className="px-3 text-blue-700 mt-3">Web Development</p>
                    <h1 className="text-lg font-bold pl-3">{details.title}</h1>
                    <div className="flex items-center mb-2 mt-2">
                        <p className="px-3">(5.0)</p>
                        <div className="rating">
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500 w-4 h-4" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500 w-4 h-4" checked />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500 w-4 h-4" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500 w-4 h-4" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500 w-4 h-4" />
                        </div>
                    </div>
                    
                    <div className="flex justify-between px-3 mb-3">
                        <p>Date: {details.date}</p>
                        <p>Location: {details.location}</p>
                    </div>
                    <div className="flex justify-between items-center px-3 mb-3">
                        <h1 className="text-lg font-bold text-blue-800">Starting From $ {details.price}</h1>
                        <button className="text-white font-semibold px-3 py-2 bg-blue-700 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-800 focus:outline-none"><BsFillCartPlusFill className="text-xl \"></BsFillCartPlusFill></button>
                    </div>
    
                    <hr className="border-1 border-gray-400"/>
                    <div className="px-3 py-4">
                    <Link to={`/careerDetails/${details.id}`} className="hover:text-white text-gray-600 font-semibold px-3 py-2 border-2 border-gray-400 w-full rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-700 focus:outline-none">
                    View Details
                    </Link>
    
                    </div>
    
                </div>
            </div>
          </div>))
      }
              </div>
              <div className="flex justify-center p-10">
                  <button className="text-white font-semibold p-3 bg-blue-700 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-800 focus:outline-none">See All</button>
              </div>
        </div>



        <div className={toggle === 4 ? "show-content" : "content"}>
                        {/* Educational Conferances Data */}
      <div className="grid md:grid-cols-2 gap-10 px-16">
              {
        education.map(details => (<div key={details.id}>
          <div className="bg-slate-200 rounded-xl flex" data-aos="fade-up"
            data-aos-anchor-placement="top-bottom" data-aos-duration="2000">
              <div>
                <img className="h-64 w-full rounded-t-xl mb-3" src={details.img} alt="" />
              </div>
                <div>
                    <p className="px-3 text-blue-700 mt-3">Web Development</p>
                    <h1 className="text-lg font-bold pl-3">{details.title}</h1>
                    <div className="flex items-center mb-2 mt-2">
                        <p className="px-3">(5.0)</p>
                        <div className="rating">
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500 w-4 h-4" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500 w-4 h-4" checked />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500 w-4 h-4" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500 w-4 h-4" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500 w-4 h-4" />
                        </div>
                    </div>
                    
                    <div className="flex justify-between px-3 mb-3">
                        <p>Date: {details.date}</p>
                        <p>Location: {details.location}</p>
                    </div>
                    <div className="flex justify-between items-center px-3 mb-3">
                        <h1 className="text-lg font-bold text-blue-800">Starting From $ {details.price}</h1>
                        <button className="text-white font-semibold px-3 py-2 bg-blue-700 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-800 focus:outline-none"><BsFillCartPlusFill className="text-xl \"></BsFillCartPlusFill></button>
                    </div>
    
                    <hr className="border-1 border-gray-400"/>
                    <div className="px-3 py-4">
                    <Link to={`/educationDetails/${details.id}`} className="hover:text-white text-gray-600 font-semibold px-3 py-2 border-2 border-gray-400 w-full rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-700 focus:outline-none">
                    View Details
                    </Link>
    
                    </div>
    
                </div>
            </div>
          </div>))
      }
              </div>
              <div className="flex justify-center p-10">
                  <button className="text-white font-semibold p-3 bg-blue-700 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-800 focus:outline-none">See All</button>
              </div>
        </div>



        <div className={toggle === 5 ? "show-content" : "content"}>
                      {/* Training Data */}
      <div className="grid md:grid-cols-2 gap-10 px-16">
              {
        training.map(details => (<div key={details.id}>
          <div className="bg-slate-200 rounded-xl flex" data-aos="fade-up"
            data-aos-anchor-placement="top-bottom" data-aos-duration="2000">
              <div>
                <img className="h-64 w-full rounded-t-xl mb-3" src={details.img} alt="" />
              </div>
                <div>
                    <p className="px-3 text-blue-700 mt-3">Web Development</p>
                    <h1 className="text-lg font-bold pl-3">{details.title}</h1>
                    <div className="flex items-center mb-2 mt-2">
                        <p className="px-3">(5.0)</p>
                        <div className="rating">
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500 w-4 h-4" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500 w-4 h-4" checked />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500 w-4 h-4" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500 w-4 h-4" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500 w-4 h-4" />
                        </div>
                    </div>
                    
                    <div className="flex justify-between px-3 mb-3">
                        <p>Date: {details.date}</p>
                        <p>Location: {details.location}</p>
                    </div>
                    <div className="flex justify-between items-center px-3 mb-3">
                        <h1 className="text-lg font-bold text-blue-800">Starting From $ {details.price}</h1>
                        <button className="text-white font-semibold px-3 py-2 bg-blue-700 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-800 focus:outline-none"><BsFillCartPlusFill className="text-xl \"></BsFillCartPlusFill></button>
                    </div>
    
                    <hr className="border-1 border-gray-400"/>
                    <div className="px-3 py-4">
                    <Link trainingDetails to={`/eventDetails/${details.id}`} className="hover:text-white text-gray-600 font-semibold px-3 py-2 border-2 border-gray-400 w-full rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-700 focus:outline-none">
                    View Details
                    </Link>
    
                    </div>
    
                </div>
            </div>
          </div>))
      }
              </div>
              <div className="flex justify-center p-10">
                  <button className="text-white font-semibold p-3 bg-blue-700 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-800 focus:outline-none">See All</button>
              </div>
        </div>



        <div className={toggle === 6 ? "show-content" : "content"}>
                      {/* Seminar Data */}
      <div className="grid md:grid-cols-2 gap-10 px-16">
              {
        seminar.map(details => (<div key={details.id}>
          <div className="bg-slate-200 rounded-xl flex" data-aos="fade-up"
            data-aos-anchor-placement="top-bottom" data-aos-duration="2000">
              <div>
                <img className="h-64 w-full rounded-t-xl mb-3" src={details.img} alt="" />
              </div>
                <div>
                    <p className="px-3 text-blue-700 mt-3">Web Development</p>
                    <h1 className="text-lg font-bold pl-3">{details.title}</h1>
                    <div className="flex items-center mb-2 mt-2">
                        <p className="px-3">(5.0)</p>
                        <div className="rating">
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500 w-4 h-4" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500 w-4 h-4" checked />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500 w-4 h-4" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500 w-4 h-4" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500 w-4 h-4" />
                        </div>
                    </div>
                    
                    <div className="flex justify-between px-3 mb-3">
                        <p>Date: {details.date}</p>
                        <p>Location: {details.location}</p>
                    </div>
                    <div className="flex justify-between items-center px-3 mb-3">
                        <h1 className="text-lg font-bold text-blue-800">Starting From $ {details.price}</h1>
                        <button className="text-white font-semibold px-3 py-2 bg-blue-700 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-800 focus:outline-none"><BsFillCartPlusFill className="text-xl \"></BsFillCartPlusFill></button>
                    </div>
    
                    <hr className="border-1 border-gray-400"/>
                    <div className="px-3 py-4">
                    <Link to={`/seminarDetails/${details.id}`} className="hover:text-white text-gray-600 font-semibold px-3 py-2 border-2 border-gray-400 w-full rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-700 focus:outline-none">
                    View Details
                    </Link>
    
                    </div>
    
                </div>
            </div>
          </div>))
      }
              </div>
              <div className="flex justify-center p-10">
                  <button className="text-white font-semibold p-3 bg-blue-700 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-800 focus:outline-none">See All</button>
              </div>
        </div>
    </div>
  );
};

export default Events;
// to={`/details/${id}`} 





