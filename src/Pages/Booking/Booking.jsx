import Navbar from "../../Layouts/Navbar/Navbar";


const Booking = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="booking">
                <div className="flex">
                    <div className="hero-left">
                        <h2 className="text-4xl font-bold uppercase">Coxs bazar</h2>
                        <p className="m-4">Coxs Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                        <button className="btn btn-warning">Booking</button>
                    </div>
                    <div>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-gray-200">Shoes!</h2>
                                <p className="text-gray-200">If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions">
                                    <button className="btn btn-warning">Booking</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Booking;