import Navbar from "../../Layouts/Navbar/Navbar";


const Login = () => {
    return (
        <>
            <Navbar></Navbar>
            <div>
                <div className="hero min-h-screen">
                    <div className="">
                        <div className="card shadow-2xl bg-base-100">
                            <form className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </form>
                        </div>
                        <div>
                            <div className="divider">OR</div>
                            <button className="btn btn-outline btn-primary btn-wide">Continue with Facebook</button>
                            <br />
                            <br />
                            <button className="btn btn-outline btn-warning btn-wide">Continue with Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;