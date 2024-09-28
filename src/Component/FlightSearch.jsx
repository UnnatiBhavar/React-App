import React, { useState } from 'react';
// import './FlightSearch.css'; // Import CSS for styling
import './FlightSearch.css';
import ModifySearchDetails from './ModifySearchDetails';

//Flightsearch component
const FlightSearch = () => {
    // Defining  state variables for the  search flight 
    const [search, setSearch] = useState('');// Search input field.

    const [user, setUser] = useState({
        departureCity: "",
        arrivalCity: "",
        departureDate: "",
        returnDate: ""
    })
    const [nonStop, setNonStop] = useState(false); // Checkbox for non-stop flight
    const [studentFare, setStudentFare] = useState(false);
    const [armedForces, setArmedForces] = useState(false);
    const [seniorCitizen, setSeniorCitizen] = useState(false);
    const [adults, setAdults] = useState(1); // Number of adult travelers
    const [children, setChildren] = useState(0);
    const [travelClass, setTravelClass] = useState('Select');
    const [results, setResults] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false)

    // Create Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Flight search initiated.");// alert the user when search is initiated
        setIsSubmitted(true)

    };

    // Create Function to reset the form 

    const handleReset = () => {
        // Reset all input fields and checkboxes to default values

        setUser();
        setSearch('');
        setNonStop(false);
        setStudentFare(false);
        setArmedForces(false);
        setSeniorCitizen(false);
        setAdults(1);
        setChildren(0);
        setTravelClass('Select');

    };

    // Create Function to increment or decrement the number of travelers
    const handlePassengerCount = (type, operation) => {
        if (type === 'adults') {
            setAdults(prev => Math.max(1, prev + operation));

        } else if (type === 'children') {
            setChildren(prev => Math.max(0, prev + operation));

        }
    };

    return (
        <>
            {!isSubmitted &&
                <div className="flight-search-container">
                    <h1>Find Your Flight</h1>
                    <div>
                        <label className="bold-text me-2" htmlFor="search">Search Flight: </label>
                        <input
                            className="stylish-input me-1 rounded-4"
                            type="text"
                            id="search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search Flight"
                            required
                        />
                        <button className='btn btn-outline-light rounded-4' style={{ backgroundColor: '#007bff' }} type="submit">
                            Search Flights
                        </button>
                    </div>

                    {/* Add departure city and arrival city also  departure  date and return date */}

                    <form onSubmit={handleSubmit} className="flight-search-form">
                        <div className="form-group">
                            <label htmlFor="departure-city">Departure City:</label>
                            <select
                                type="text"
                                id="departure-city"
                                value={user.departureCity}
                                onChange={(e) => setUser(e.target.value)}
                                placeholder="Enter departure city"
                                required>
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
                        <div className="form-group">
                            <label htmlFor="arrival-city">Arrival City:</label>
                            <select
                                type="text"
                                id="arrival-city"
                                value={user.arrivalCity}
                                onChange={(e) => setUser(e.target.value)}
                                placeholder="Enter arrival city"
                                required>
                                <option value={''}>Select Arrival Place</option>
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
                        <div className="form-group">
                            <label htmlFor="departure-date">Departure Date:</label>
                            <input
                                type="date"
                                id="departure-date"
                                value={user.departureDate}
                                onChange={(e) => setUser(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="return-date">Return Date:</label>
                            <input
                                type="date"
                                id="return-date"
                                value={user.returnDate}
                                onChange={(e) => setUser(e.target.value)}
                            />
                        </div>

                        {/* Add travel class selection */}

                        <div className="form-group">
                            <label htmlFor="travel-class">Class:</label>
                            <select
                                id="travel-class"
                                value={travelClass}
                                onChange={(e) => setTravelClass(e.target.value)}
                                required
                            >
                                <option value="select">Select</option>
                                <option value="Economy">Economy</option>
                                <option value="Business">Business</option>
                                <option value="First Class">First Class</option>
                            </select>
                        </div>

                        {/* Add Adult and Children passengers Numbers */}

                        <div className="passenger-container">
                            <label className='bold-text' htmlFor="passenger-count">Travellers:</label>
                            <div className="passenger-selection">
                                <label>1. Adults:</label>
                                <button type='button' onClick={() => handlePassengerCount('adults', -1)}>-</button>
                                <span>{adults}</span>
                                <button type='button' onClick={() => handlePassengerCount('adults', 1)}>+</button>
                            </div>

                            <div className="passenger-selection">
                                <label>2. Children:</label>
                                <button type='button' onClick={() => handlePassengerCount('children', -1)}>-</button>
                                <span>{children}</span>
                                <button type='button' onClick={() => handlePassengerCount('children', 1)}>+</button>
                            </div>
                        </div>

                        {/* Add additional options */}

                        <div>
                            <label className="bold-text form-label me-3">Select Options:</label>
                            <div>
                                <input
                                    className="form-check-input me-1"
                                    type="checkbox"
                                    id="non-stop"
                                    checked={nonStop}
                                    onChange={(e) => setNonStop(e.target.checked)}
                                />
                                <label className="form-check-label me-3" htmlFor="non-stop">Non-Stop</label>

                                <input
                                    className="form-check-input me-1"
                                    type="checkbox"
                                    id="student-fare"
                                    checked={studentFare}
                                    onChange={(e) => setStudentFare(e.target.checked)}
                                />
                                <label className="form-check-label me-3" htmlFor="student-fare">Student Fare</label>
                            </div>
                            <div>
                                <input
                                    className="form-check-input me-1"
                                    type="checkbox"
                                    id="armed-forces"
                                    checked={armedForces}
                                    onChange={(e) => setArmedForces(e.target.checked)}
                                />
                                <label className="form-check-label me-3" htmlFor="armed-forces">Armed Forces</label>

                                <input
                                    className="form-check-input me-1"
                                    type="checkbox"
                                    id="senior-citizen"
                                    checked={seniorCitizen}
                                    onChange={(e) => setSeniorCitizen(e.target.checked)}
                                />
                                <label className="form-check-label me-3" htmlFor="senior-citizen">Senior Citizen</label>
                            </div>
                        </div>
                        {/* Create Buttons to submit and reset the form */}

                        <div>
                            <button className='btn btn-outline-light me-3' style={{ backgroundColor: '#007bff' }} type="submit">
                                Search Flights
                            </button>
                            <button className='btn btn-outline-light me-3' style={{ backgroundColor: '#007bff' }} type="button" onClick={handleReset}>
                                Reset Flights
                            </button>
                        </div>
                    </form>


                </div>}
            {isSubmitted && <ModifySearchDetails submitted={setIsSubmitted} />}
        </>
    );
};

export default FlightSearch;
