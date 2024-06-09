import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Navbar from "../Navbar/NAvbar";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../Firebase/firebase.config";

const Login = () => {
    const {login} = useContext(AuthContext)

    const auth = getAuth(app)
    const provider = new GoogleAuthProvider();
    const handleGoogle = () => {
        signInWithPopup(auth, provider)
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.log(error.message);
        })
    }

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password')

        login(email, password)
        .then(result => {
            console.log(result.user);
        })
        .then(error => {
            console.error(error)
        })
    }

    
    return (
        <div>
            <Navbar></Navbar>
            <div className="px-10 py-10 md:px-96 md:py-20" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="2000">
            <div className="bg-slate-200 p-10 rounded-md">
                <h1 className="font-bold text-3xl mb-10 text-center">Login Your Account</h1>
                <form onSubmit={handleLogin}>
                <div>
                    <p className="font-semibold mb-3">Email Address</p>
                    <input className="p-2 rounded-md mb-3 w-full" type="email" name="email" placeholder="Enter your email address" />
                </div>
                <div>
                    <p className="font-semibold mb-3">Password</p>
                    <input className="p-2 rounded-md mb-8 w-full" type="password" name="password" placeholder="Enter your email password" />
                </div>
                <button className="bg-slate-900 p-3 rounded-md text-white w-full">Login</button>
                </form>
                <div onClick={handleGoogle} className="flex mt-5 items-center gap-5 bg-slate-900 p-3 rounded-md text-white w-full justify-center">
                    <FcGoogle className="text-3xl"></FcGoogle>
                    <button className="">Login With Google</button>
                </div>
                <p className="text-center mt-4">Dont’t Have An Account ? <Link to={"/signup"} className="text-[#D72050] font-semibold">Register</Link></p>
            </div>
        </div>

        </div>
    );
};

export default Login;