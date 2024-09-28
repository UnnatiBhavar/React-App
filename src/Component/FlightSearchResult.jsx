import { useState } from "react";
import FlightData from "./FlightData.jsx"
import BookingTotal from "../Component/flight_details/BookingTotal.jsx";
import TravellerDetails from "../Component/flight_details/TravellerDetails.jsx";
import { BsDisplay } from "react-icons/bs";

const FlightSearchResult = ({ user }) => {
  const [selectedFlight, setSelectedFlight] = useState({});
  const [showTravellerDetails, setShowTravellerDetails] = useState(false);
  const [showflights, setShowflights] = useState(true);

  // Filter flight data based on the user's search parameters (from and to locations)
  const filteredFlights = FlightData.filter((flight) => {
    // Ensure that user data and flight data exist and match for filtering
    return (
      
      flight?.from?.toLowerCase().includes(user?.from?.toLowerCase().trim()) &&
      flight?.to?.toLowerCase().includes(user?.to?.toLowerCase().trim())
    );
  });

  // Handle flight selection

  const handleSelectFlight = (flight) => {
    // console.log("Selected flight:", flight); 

      setSelectedFlight(flight)
      setShowflights(false)
      setShowTravellerDetails(true)
  };

  return (
    <>
    { showflights &&(
    <div className="search-results">
      {filteredFlights.length > 0 ? (
        <>
          <h2>Search Results</h2>
          <table className="table table-bordered">
            <thead className="thead-dark">
              <tr>
                <th>Flight Id</th>
                <th>Departure</th>
                <th>Duration</th>
                <th>Arrival</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredFlights.map((flight) => (
                <tr key={flight.id}>
                  <td>{flight.id}</td>
                  <td>
                    {flight.from} <br />
                    {flight.departureTime} <br />
                    {user.departureDate}
                  </td>
                  <td>{flight.duration}</td>
                  <td>
                    {flight.to} <br />
                    {flight.arrivalTime} <br />
                    {user.returnDate}
                  </td>
                  <td>₹{flight.price}</td>
                  <td>
                    <button
                      className="btn btn-outline-primary"
                      onClick={() => handleSelectFlight(flight)}
                    >
                      Book
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          

         
          
        </>
      ) : (
         <p></p>
      )}
    </div>)}
     {showTravellerDetails && (<TravellerDetails flight={selectedFlight} />
          )} 
    </>
  );
};

export default FlightSearchResult;