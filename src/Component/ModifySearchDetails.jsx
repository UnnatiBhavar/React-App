import { useState } from "react";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { MdOutlineFlightTakeoff } from "react-icons/md";
import { MdOutlineFlightLand } from "react-icons/md";
import FlightSearchResult from "./FlightSearchResult";
import BookingTotal from "../Component/flight_details/BookingTotal";


const ModifySearchDetails = () => {
    const [user, setUser] = useState({
        from: "",
        to: "",
        departureDate: "",
        returnDate: ""
    })
    //event handler to handle from change event
    const handleFrom = (e) => {
        setUser({ ...user, from: e.target.value })
    }
    //event handler to handle to change event
    const handleTo = (e) => {
        setUser({ ...user, to: e.target.value })
    }
    //event handler to handle departure date field
    const handleDepartureDate = (e) => {
        setUser({ ...user, departureDate: e.target.value })
    }
    //event handler to handle return date field
    const handleReturnDate = (e) => {
        setUser({ ...user, returnDate: e.target.value })
    }
    const [isSubmitted, setIsSubmitted] = useState(false)
    //event handler to handle submite event
    const handleSubmit = (e) => {
        e.preventDefault();
        if (user.from === user.to) {
            alert("Departure and destination airports cannot be the same");
            return;
        }

        alert("Details have been modified. Please review and ensure everything is correct.")
        setIsSubmitted(true)

    }

    return (
        <>
            <h4 className="text-center mt-2">Booking Page</h4>
            {!isSubmitted &&

                <div className="container border border-dark  mt-2   rounded w-100">
                    <form className="d-flex m-2 " onSubmit={handleSubmit}>
                        <div>
                            <label className="form-lable" style={{ fontSize: 30 }} htmlFor="fr" ><MdOutlineFlightTakeoff color="cyan" />&nbsp; From</label>
                            <select className="form-select" id="fr"
                                value={user.from}
                                onChange={handleFrom}
                                required >
                                <option value={''}>Select Departure Place</option>
                                <option>AMD,Ahmedabad Airport</option>
                                <option>BOM,Chhatrapati Shivaji International Airport</option>
                                <option>DEL,Indira Gandhi International Airport</option>
                                <option>HYD,Rajiv Gandhi International Airport</option>
                                <option>IDR,Devi Ahilyabai Holkar Airport</option>
                                <option>Jaipur International Airport</option>
                                <option>MAA,Chennai International Airport</option>
                                <option>PNQ,Pune International Airport</option>
                            </select>
                        </div>
                        <div className="m-2 mt-3"><FaArrowRightArrowLeft size={56} />&nbsp;</div>
                        <div >
                            <lable className="form-lable " style={{ fontSize: 30 }} htmlFor="too"><MdOutlineFlightLand color="cyan" />&nbsp; To</lable>
                            <select className="form-select" id="too"
                                value={user.to}
                                onChange={handleTo}
                                required>
                                <option>AMD,Ahmedabad Airport</option>
                                <option>BOM,Chhatrapati Shivaji International Airport</option>
                                <option>DEL,Indira Gandhi International Airport</option>
                                <option>HYD,Rajiv Gandhi International Airport</option>
                                <option>IDR,Devi Ahilyabai Holkar Airport</option>
                                <option>Jaipur International Airport</option>
                                <option>MAA,Chennai International Airport</option>
                                <option>PNQ,Pune International Airport</option>
                            </select>
                        </div>
                        <div  >
                            <label className="form-lable ms-2" style={{ fontSize: 30 }} htmlFor="dd">Departure Date</label>
                            <input className="ms-2 " style={{ width: 200, height: 37 }} type="date" id="dd" value={user.departureDate} onChange={handleDepartureDate} required />
                        </div>
                        <div >
                            <label className="form-lable ms-2" style={{ fontSize: 30 }} htmlFor="rd" >Return Date</label>
                            <input className="ms-2" style={{ width: 180, height: 37 }} type="date" id="rd" value={user.returnDate} onChange={handleReturnDate} required />
                        </div>
                        <div className="text-center ms-2 mt-4" >
                            <button className="btn btn-outline-info" style={{ width: 180, height: 37 }} type="submit">Modify Booking</button>
                        </div>


                    </form>
                </div>
            }

            {isSubmitted && <FlightSearchResult user={user} />}
        </>

    )

}
export default ModifySearchDetails;