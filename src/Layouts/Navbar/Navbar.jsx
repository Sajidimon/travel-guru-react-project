import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/logo.png';

const Navbar = () => {

    const menu = <>

        <NavLink to='/'><li><a>Home</a></li></NavLink>
        <NavLink to='/news'><li><a>News</a></li></NavLink>
        <NavLink to='/blog'><li><a>Blog</a></li></NavLink>
        <NavLink to='/contact'><li><a>Contact</a></li></NavLink>


    </>
    return (
        <>
            <div>
                <div className="navbar text-black">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
                                {menu}
                            </ul>
                        </div>
                        <img src={logo} alt="" className="w-1/4 h-1/4" />
                        <div className="form-control ml-5">
                            <input type="text" placeholder="Search your destination" className="input input-bordered w-24 md:w-auto bg-white" />
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {menu}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <Link to='/login'><button className="btn btn-warning">Login</button></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;