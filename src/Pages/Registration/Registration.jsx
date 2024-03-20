import { Link } from "react-router-dom";
import Navbar from "../../Layouts/Navbar/Navbar";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/Firebase.init";


const Registration = () => {


    const handleregistration = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
            console.log(result.user)
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
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div>
                            <div className="divider">OR</div>
                            <button className="btn btn-outline btn-primary btn-wide">Continue with Facebook</button>
                            <br />
                            <br />
                            <button className="btn btn-outline btn-warning btn-wide">Continue with Google</button>
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
                                    <input type="password" name="password" placeholder="password" className="input bg-white input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Registration</button>
                                </div>
                                <p className="text-black">Already Have an account ? <Link to="/login"><span className="text-yellow-500 font-bold">Login</span></Link> </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Registration;