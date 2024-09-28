import Coupon from "../../database/Coupon.js";
import { useState } from "react";
import FlightSearchResult from "../FlightSearchResult.jsx";
import FlightData from "../FlightData.jsx";
const BookingTotal = ({ adults, count, bagprice, price }) => {
  // State to track coupon code and discount
  const [ccode, setCcode] = useState("");
  const [off, setOff] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Event handler for coupon application
  const apply = (e) => {
    e.preventDefault();

    // Find the coupon from the database
    const check = Coupon.find((abc) => abc.code === ccode);

    if (check) {
      setOff(check.coupon);
      alert(`Coupon code applied successfully! Discount: ${check.coupon}`);
      setIsSubmitted(true);
    } else {
      alert("Invalid coupon code!");
    }
  };

  // Event handler for coupon code input change
  const change = (e) => {
    setCcode(e.target.value);
    setIsSubmitted(false); // Reset if user is changing the code
  };

  const totalAmount = (adults + 1) * price + bagprice;
  const grandTotal = totalAmount > off ? totalAmount - off : 0;


  return (
    <>
 



    
 <div className="form-control mt-2 ml-4">    <label>NUMBER OF PERSON  :&nbsp;<h5 style={{display:'inline-flex',backgroundColor:'red'}}>
   &nbsp;&nbsp; {(adults + 1)}  Person :
      &nbsp;  ₹ price&nbsp;&nbsp;</h5></label></div> 
<div className="form-control mt-2 ml-4">
      <label>EXTRA BAGGAGESS :&nbsp;<h5 style={{display:'inline-flex',backgroundColor:'red'}}> &nbsp;&nbsp; {count} kg 
         :&nbsp;&nbsp;&#8377; {bagprice}&nbsp;&nbsp;</h5></label></div>
         <div className="form-control mt-2 ml-4">
      <label>BOOKING TOTAL :&nbsp;<h5 style={{display:'inline-flex',backgroundColor:'red'}}> &nbsp;&nbsp; ₹  {totalAmount}&nbsp;&nbsp;
        </h5></label> </div>


      <form onSubmit={apply}>
        <div className="container form-control mt-2 ml-4">
          <label>COUPON CODE : </label>
          &nbsp;&nbsp;&nbsp;
          <input
            className="control-form btn btn-outline-primary" type="text" placeholder="Enter coupon code" value={ccode} onChange={change}/>&nbsp;&nbsp;&nbsp;
            
            <button className="btn btn-outline-primary  " type="submit">APPLY</button>
        </div>
        
    
      </form>
      <div className="container form-control mt-4 ml-5">
      <h3>GRAND TOTAL  :<h3 style={{display:'inline-flex',backgroundColor:'red'}}> &nbsp;&nbsp;₹  {grandTotal}&nbsp;&nbsp;</h3> </h3>
      </div>
    </>
  );
};

export default BookingTotal;
