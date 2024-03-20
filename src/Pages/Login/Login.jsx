import { Link } from "react-router-dom";
import Navbar from "../../Layouts/Navbar/Navbar";
import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/Firebase.init";
import { useRef } from "react";


const Login = () => {


    const emailRef = useRef(null);

    const handlelogin = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error)
            })

    }

    const handleResetPassword = () => {

        const email = emailRef.current.value;

        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert('Please check your email')
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <>
            <Navbar></Navbar>
            <div>
                <div className="hero min-h-screen">
                    <div className="">
                        <div className="card shadow-2xl bg-base-100">
                            <form onSubmit={handlelogin} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input ref={emailRef} type="email" name="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a onClick={handleResetPassword} href="#" className="label-text-alt link link-hover">Forgot password?
                                        </a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                                <p className="text-white">Don't Have an account ? <Link to="/registration"><span className="text-yellow-500 font-bold">Create new account</span></Link> </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;