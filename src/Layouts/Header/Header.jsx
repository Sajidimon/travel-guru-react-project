import Navbar from "../Navbar/Navbar";
import './Header.css';
import { FaLongArrowAltRight } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import slide1 from '../../assets/Sajek.png';
import slide2 from '../../assets/Sreemongol.png';
import slide3 from '../../assets/sundorbon.png';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <div className="header">
                <Navbar></Navbar>
                <div className="flex">
                    <div className="hero-left">
                        <h2 className="font-bold text-4xl uppercase">Coxs bazar</h2>
                        <p className="m-4">Coxs Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                        <Link to='/booking'><button className="btn btn-warning">Booking <FaLongArrowAltRight></FaLongArrowAltRight></button></Link>
                    </div>
                    <div>
                        <div className="carousel justify-center items-center w-full">
                            <div id="item1" className="carousel-item w-full">
                                <img src={slide1} className="w-full" />
                            </div>
                            <div id="item2" className="carousel-item w-full">
                                <img src={slide2} className="w-full" />
                            </div>
                            <div id="item3" className="carousel-item w-full">
                                <img src={slide3} className="w-full" />
                            </div>
                        </div>
                        <div className="flex justify-center w-full py-2 gap-2">
                            <a href="#item1" className="btn btn-xs">1</a>
                            <a href="#item2" className="btn btn-xs">2</a>
                            <a href="#item3" className="btn btn-xs">3</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;