
import { useEffect, useState } from "react";
import SignleCard from "./SignleCard";
import Navbar from "../Navbar/NAvbar";


const Services = () => {
    const [myData, setMyData] = useState([]);
   useEffect( () => {
    fetch("/data.json")
    .then(res => res.json())
    .then(data => setMyData(data))
   }, [])
   console.log(myData);
    return (
        <div>
            <Navbar></Navbar>
            <div className="flex justify-between items-center px-20">
            <h1 className="text-3xl font-bold text-blue-700 text-center py-5" data-aos="fade-right"
     data-aos-anchor-placement="top-bottom" data-aos-duration="2000">Our Services</h1>
            <button className="text-white font-semibold px-3 py-2 bg-blue-700 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-800 focus:outline-none" data-aos="zoom-in" data-aos-duration="2000"> All Courses</button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10 md:px-20 lg:px-20 mt-4 mb-10">
                {myData.map(data => (<SignleCard key={data.id} data ={data}></SignleCard>))}
            </div>
        </div>
    );
};

export default Services;