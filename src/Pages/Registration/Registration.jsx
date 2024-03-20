import { Link } from "react-router-dom";
import Navbar from "../../Layouts/Navbar/Navbar";
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import auth from "../../Firebase/Firebase.init";
import { useState } from "react";
import { IoIosEyeOff, IoMdEye } from "react-icons/io";


const Registration = () => {

    const [registerError, setRegisterError] = useState('');
    const [successMessage, setSuccessMessage] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    //create google login system

    const googleLogin = () => {

        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error)
            })
    }

    const handleregistration = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;


        if (password.length < 6) {
            setRegisterError('password should be at least 6 character or more')
            return;
        } else if (!/[A-Z]/.test(password)) {
            setRegisterError('Password must have one Uppercase');
            return;
        }

        //reset error
        setRegisterError('');
        setSuccessMessage('');

        //create user

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user)
                setSuccessMessage('Account created successfully')
            })
            .catch(error => {
                console.error(error)
                setRegisterError('Email already in use');
            })

    }

    return (
        <>
            <Navbar></Navbar>
            <div>
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div>
                            <div className="divider">OR</div>
                            <button className="btn btn-outline btn-primary btn-wide">Continue with Facebook</button>
                            <br />
                            <br />
                            <button onClick={googleLogin} className="btn btn-outline btn-warning btn-wide">Continue with Google</button>
                        </div>
                        <div className="card shrink-0 w-full max-w-sm shadow-2xl">
                            <form onSubmit={handleregistration} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Full Name</span>
                                    </label>
                                    <input type="text" placeholder="Name" className="input bg-white input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input bg-white input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        placeholder="password"
                                        className="input bg-white input-bordered" required />
                                    <span onClick={() => setShowPassword(!showPassword)}>
                                        {
                                            showPassword ? <IoIosEyeOff></IoIosEyeOff> : <IoMdEye></IoMdEye>
                                        }
                                    </span>
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Registration</button>
                                </div>
                                <p className="text-black">Already Have an account ? <Link to="/login"><span className="text-yellow-500 font-bold">Login</span></Link> </p>
                            </form>
                            {
                                registerError && <p className="text-red-600">{registerError}</p>
                            }
                            {
                                successMessage && <p className="text-green-600">{successMessage}</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Registration;