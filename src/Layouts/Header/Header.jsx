import Navbar from "../Navbar/Navbar";
import './Header.css';
import { FaLongArrowAltRight } from "react-icons/fa";

const Header = () => {
    return (
        <>
            <div className="header">
                <Navbar></Navbar>
                <div>
                    <div>
                        <h2>Cox's bazar</h2>
                        <p>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                        <button className="btn btn-warning">Booking <FaLongArrowAltRight></FaLongArrowAltRight></button>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;