import { NavLink } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col h-screen justify-center items-center">
            <h2 className="text-xl md:text-3xl lg:text-4xl text-gray-600 mb-7">404 Not Found</h2>
            <p className="mb-5">The page you are looking for does not exist.</p>
            <NavLink to={'/home'}>
                <button className="bg-slate-700 text-white p-4 rounded-md">Back To Home</button>
            </NavLink>
        </div>
    );
};

export default ErrorPage;