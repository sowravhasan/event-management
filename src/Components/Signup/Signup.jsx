
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Navbar from "../Navbar/NAvbar";

const Signup = () => {
    const {createUser} = useContext(AuthContext);
    const [errorRegister, setErrorregister] = useState('');
    const [success, setSuccess] = useState('');

    const handleSignup = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        if(password.length < 6){
            setErrorregister(" characters")
        }

        
        setErrorregister('');
        setSuccess('');

        
    

        createUser(email, password)
        .then(result => {
            setSuccess(result.user);
        })
        .catch(error => {
            setErrorregister(error.message);
        })

    }
    return (
        <div>
            <Navbar></Navbar>
            
            <div className="px-10 py-10 md:px-96 md:py-20" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="2000">
            <div className="bg-slate-200 p-10 rounded-md">
                <h1 className="font-bold text-3xl mb-10 text-center">Register Your Account</h1>
                <form onSubmit={handleSignup}>
                <div>
                    <p className="font-semibold mb-3">Your Name</p>
                    <input required className="p-2 rounded-md mb-3 w-full" type="text" name="name" placeholder="Enter your full name" />
                </div>
                <div>
                    <p className="font-semibold mb-3">Photo URL</p>
                    <input required className="p-2 rounded-md mb-3 w-full" type="text" name="photo" placeholder="Enter your photo url" />
                </div>
                <div>
                    <p className="font-semibold mb-3">Email Address</p>
                    <input required className="p-2 rounded-md mb-3 w-full" type="email" name="email" placeholder="Enter your email address" />
                </div>
                <div>
                    <p className="font-semibold mb-3">Password</p>
                    <input required className="p-2 rounded-md mb-8 w-full" type="password" name="password" placeholder="Enter your email password" />
                </div>
                <button className="bg-slate-900 p-3 rounded-md text-white w-full">Register</button>
                </form>
                <p className="text-center mt-4">Already Have An Account ? <Link to={"/login"} className="text-[#D72050] font-semibold">Login</Link></p>
            </div>
            {
                errorRegister && alert('user Already Exists')
            }
            {
                success && alert('Successful')
            }
        </div>
        </div>
    );
};

export default Signup;