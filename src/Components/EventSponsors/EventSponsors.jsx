import { useState } from "react";
import { Link } from "react-router-dom";
import "./EventSponsors.css";

const EventSponsors = () => {
    const [toggle, setToggle] = useState(1);

    const toggleTabs = id => {
        setToggle(id);
    }
    return (
        <div id="sponsors" className="py-16">
            <h1 className="text-3xl font-bold text-gray-500 px-16 mb-5">Event <span className="text-blue-600">Sponsors</span></h1>
            <div className="flex gap-4 px-16">
                <div className="p-3 border border-blue-600 rounded-md">
                    <ul>
                    <li>
            <Link onClick={() => toggleTabs(1)}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-blue-600 underline"
                  : ""
              }
            >
              <span className="text-gray-500 hover:text-blue-500 font-bold">Media Partners</span>
            </Link>
          </li>
                    </ul>
                </div>
                <div className="p-3 border border-blue-600 rounded-md">
                <ul>
                <li>
            <Link onClick={() => toggleTabs(2)}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-blue-600 underline"
                  : ""
              }
            >
              <span className="text-gray-500 hover:text-blue-500 font-bold">Gplden Partners</span>
            </Link>
          </li>
                </ul>
                </div>
            </div>

            <div className={toggle === 1 ? "show-content" : "content"}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-16 py-10">
                    <div className="p-5 bg-slate-100 rounded-md border border-blue-600 flex justify-center items-center">
                        <img className="w-20" src="/free.png" alt="" />
                    </div>
                    <div className="p-5 bg-slate-100 rounded-md border border-blue-600 flex justify-center items-center">
                        <img className="w-20" src="/free.png" alt="" />
                    </div>
                    <div className="p-5 bg-slate-100 rounded-md border border-blue-600 flex justify-center items-center">
                        <img className="w-20" src="/free.png" alt="" />
                    </div>
                    <div className="p-5 bg-slate-100 rounded-md border border-blue-600 flex justify-center items-center">
                        <img className="w-20" src="/free.png" alt="" />
                    </div>
                    <div className="p-5 bg-slate-100 rounded-md border border-blue-600 flex justify-center items-center">
                        <img className="w-20" src="/free.png" alt="" />
                    </div>
                    <div className="p-5 bg-slate-100 rounded-md border border-blue-600 flex justify-center items-center">
                        <img className="w-20" src="/free.png" alt="" />
                    </div>
                    <div className="p-5 bg-slate-100 rounded-md border border-blue-600 flex justify-center items-center">
                        <img className="w-20" src="/free.png" alt="" />
                    </div>
                    <div className="p-5 bg-slate-100 rounded-md border border-blue-600 flex justify-center items-center">
                        <img className="w-20" src="/free.png" alt="" />
                    </div>

                </div>
            </div>



            <div className={toggle === 2 ? "show-content" : "content"}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-16 py-10">
                <div className="p-2 bg-slate-100 rounded-md border border-blue-600 flex justify-center items-center">
                    <img className="w-20" src="/envato.png" alt="" />
                </div>
                <div className="p-2 bg-slate-100 rounded-md border border-blue-600 flex justify-center items-center">
                    <img className="w-20" src="/envato.png" alt="" />
                </div>
                <div className="p-2 bg-slate-100 rounded-md border border-blue-600 flex justify-center items-center">
                    <img className="w-20" src="/envato.png" alt="" />
                </div>
                <div className="p-2 bg-slate-100 rounded-md border border-blue-600 flex justify-center items-center">
                    <img className="w-20" src="/envato.png" alt="" />
                </div>
                <div className="p-2 bg-slate-100 rounded-md border border-blue-600 flex justify-center items-center">
                    <img className="w-20" src="/envato.png" alt="" />
                </div>
                <div className="p-2 bg-slate-100 rounded-md border border-blue-600 flex justify-center items-center">
                    <img className="w-20" src="/envato.png" alt="" />
                </div>
                <div className="p-2 bg-slate-100 rounded-md border border-blue-600 flex justify-center items-center">
                    <img className="w-20" src="/envato.png" alt="" />
                </div>
                <div className="p-2 bg-slate-100 rounded-md border border-blue-600 flex justify-center items-center">
                    <img className="w-20" src="/envato.png" alt="" />
                </div>
                
            </div>
            </div>

            <div className="flex justify-center">
                  <button className="text-white font-semibold p-3 bg-blue-700 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-800 focus:outline-none">View All Partners</button>
              </div>
        </div>
    );
};

export default EventSponsors;