import React, { useState } from "react";

const UpiForm = () => {
  // save the UPI 
  const [upiId, setUpiId] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [error, setError] = useState("");

  //  UPI validation
  const validateUpiId = (upi) => {
    const upiSymbol = /^[\w.-]+@[\w.-]+$/; // Basic pattern for UPI ID
    return upiSymbol.test(upi);
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateUpiId(upiId)) {
      setPaymentSuccess(true);
      setError("");
      alert(`Payment processed successfully with UPI ID: ${upiId}`);
      console.log("UPI ID:", upiId);
    } else {
      setPaymentSuccess(false);
      setError("Invalid... Please enter a valid UPI ID.");
    }
  };

  return (
    <div className="container mt-5">
     

      {/* Display success msg */}
      {paymentSuccess && (
        <div className="alert alert-success" role="alert">
          Payment processed successfully!
        </div>
      )}
 <h5>UPI Payment</h5>
      {/* Display error msg */}
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* UPI */}
        <div className="form-group mb-3">
          <label htmlFor="upiId">UPI ID</label>
          <input
            type="text"
            id="upiId"
            className="form-control"
            value={upiId}
            onChange={(e) => setUpiId(e.target.value)}
            placeholder="Enter your UPI ID (e.g., name@bank)"
            required
          />
        </div>

        {/* button */}
        <button type="submit" className="btn btn-primary btn-block">
           Pay
        </button>
      </form>
    </div>
  );
};

export default UpiForm;
