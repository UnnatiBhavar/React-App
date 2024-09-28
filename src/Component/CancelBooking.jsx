import React, { useState } from 'react';
import './CancelBooking.css';
import Table from 'react-bootstrap/Table';

const CancelBooking = () => {
    const [formData, setFormData] = useState({
        bookingId: '',
        flightNumber: '',
        email: ''
      });
      const [cancellationStatus, setCancellationStatus] = useState(null);

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
      

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting cancellation for:', formData);

    // Simulate API call to cancel flight
    try {
      setCancellationStatus('success');
      alert('Your flight has been successfully cancelled!');
    } catch (error) {
      setCancellationStatus('error');
      alert('There was an issue cancelling your flight. Please try again.');
    }

    // Reset form fields
    setFormData({ bookingId: '', flightNumber: '', email: '' });
  };

  return (
  <>
 
    <div className="cancellation-page">
      <h2>Cancel Your Flight</h2>
      <form onSubmit={handleSubmit} className="cancellation-form">
        <div>
          <label>Booking ID</label>
          <input
            type="text"
            name="bookingId"
            value={formData.bookingId}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Flight Number</label>
          <input
            type="text"
            name="flightNumber"
            value={formData.flightNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Cancel Flight</button>
      </form>

      {cancellationStatus === 'success' && (
        <div className="success-message">
          <p>Your flight has been successfully cancelled.</p>
        </div>
      )}

      {cancellationStatus === 'error' && (
        <div className="error-message">
          <p>There was an issue canceling your flight. Please try again.</p>
        </div>
      )}

      <section className="cancellation-policy">
        <h3>Cancellation Policy</h3>
        <p>
          Please review our cancellation policy before proceeding. Cancellations
          may incur a fee, and refunds will be processed within 7-10 business
          days. For more information, contact our support team.
        </p>
      </section>

      <section className="cancellation-charges">
        <h3>Cancellation Charges</h3>
        <table className="charges-table">
          <thead>
            <tr>
              <th>Time of Cancellation</th>
              <th>Charge</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>24+ hours before departure</td>
              <td>&#8377;50</td>
            </tr>
            <tr>
              <td>12-24 hours before departure</td>
              <td>&#8377;100</td>
            </tr>
            <tr>
              <td>0-12 hours before departure</td>
              <td>&#8377;200</td>
            </tr>
            <tr>
              <td>After departure</td>
              <td>No refund</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>

<p>
<h2 className="cancellation-charges">Enjoy 100% Money Back on Flight Cancellation</h2>
What else do you need to know?
Customers are eligible to avail the complete Airline waiver only if they cancel the ticket 24 hours prior to the departure
In case of date change in itinerary and partial cancellation, zero cancellation offer will not be valid
Cancellation protection service is available only on non-stop domestic flights
To avail benefits of Cancellation Protection, You need to cancel online on easemytrip.com
Customers will not be eligible for waiver if they cancel directly with airline
Customers, who are travel agents by occupation, are barred from making bookings for their customers and EaseMyTrip reserve the rights to deny the offer or cancel the booking
In Round-Trip sector partial cancellation is not allowed in case of single PNR
Cancellation protection can be availed on one way booking of domestic flights only
The offer is valid for bookings made on EaseMyTrip's website & Mobile site</p>
    
<Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th> Regular Fare </th>
          <th> Flexi Plus Fare</th>
          <th> Return Fare </th>
          <th> Domestic</th>
          <th>  Lite Fare </th>
          </tr>
      </thead>
      <tbody>
        <tr>
          <td> 
       <b> Domestic  </b>  <br />
0-3 (Days left for departure)

INR 3500 or Airfare charges  (Whichever is lower). Cancellation fee will depend upon the time of cancellation.

4 Days left for departure and above

INR 3000 or Airfare charges  (Whichever is lower). Cancellation fee will depend upon the time of cancellation. 
        </td>
        <td>
            
<b>International</b><br />

0-3 (Days left for departure)

Upto INR 6500 or Airfare charges (Whichever is lower). 
Cancellation fee will depend upon the time of cancellation. Click here to check sector specific rates

4 Days left for departure and above

Upto INR 6000 or Airfare charges (Whichever is lower). 
Cancellation fee will depend upon the time of cancellation. Click here to check sector specific rates

        </td>

<td>
<b>Domestic</b><br />

0-3 (Days left for departure)

INR 3999 or Airfare charges  (Whichever is lower). 
Cancellation fee will depend upon the time of cancellation. 

4 Days left for departure and above

INR 2999 or Airfare charges  (Whichever is lower). 
Cancellation fee will depend upon the time of cancellation. 
</td>


<td>


<b>International</b> <br />

0-3 (Days left for departure)

Upto INR 3999 -  7499 or Airfare charges (Whichever is lower). 
Cancellation fee will depend upon the time of cancellation. Click here to check sector specific rates

4 Days left for departure and above

Upto INR 2999 -  6499 or Airfare charges (Whichever is lower). 
Cancellation fee will depend upon the time of cancellation. Click here to check sector specific rates
</td>


<td>

<b>International</b><br />

0-3 (Days left for departure)

Upto INR 5999 or Airfare charges (Whichever is lower).
 Cancellation fee will depend upon the time of cancellation. Click here to check sector specific rates

4 Days left for departure and above

Upto INR 3999 or Airfare charges (Whichever is lower). 
Cancellation fee will depend upon the time of cancellation. Click here to check sector specific rates

</td>


         
        </tr>
        
        
      </tbody>
    </Table>
    </>
  );
};



export default CancelBooking;
