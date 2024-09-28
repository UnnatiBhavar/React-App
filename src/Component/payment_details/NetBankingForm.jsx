import React, { useState } from "react";


const NetBankingForm = () => {
  // save the selected bank
  const [selectedBank, setSelectedBank] = useState("");
  const [accNumber, setAccNumber] = useState({
    accountNumber:''
  });
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  
  const banksInIndia = [
    "State Bank of India (SBI)",
    "HDFC Bank",
    "ICICI Bank",
    "Axis Bank",
    "Kotak Mahindra Bank",
    "Punjab National Bank (PNB)",
    "Bank of Baroda",
    "Canara Bank",
    "Union Bank of India",
    "IDFC First Bank",
  ];



  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedBank) {
      setPaymentSuccess(true);
      alert(`Payment processed successfully with ${selectedBank}`);
      console.log("Selected Bank:", selectedBank);
    } else {
      alert("Please select a bank.");
    }
  };

  return (
 



    <div className="container mt-5">
     
{/* Display success msg */}
{paymentSuccess && (
  <div className="alert alert-success" role="alert">
    Payment processed successfully with {selectedBank}!
  </div>
)}
     
     <h5>Net Banking Payment</h5>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="bankSelection">Select Bank</label>
          <select
            id="bankSelection"
            className="form-control"
            value={selectedBank}
            onChange={(e) => setSelectedBank(e.target.value)}
            required
          >
            <option value=""> Select Your Bank </option>
            {banksInIndia.map((bank, index) => (
              <option key={index} value={bank}>
                {bank}
              </option>
            ))}
          </select>
        </div>
                {/* Account Number */}
                <div className="form-group">
          <label htmlFor="accountNumber">Account Number</label>
          <input
            type="text"
            id="accountNumber"
            name="accountNumber"
            className="form-control"
            value={accNumber.accountNumber}
            onChange={(e) => setAccNumber({...accNumber,accountNumber:e.target.value})}
            required 
            placeholder="Enter your account number"
            maxLength="18"
           />
        </div>

        <button type="submit" className="btn btn-primary mt-3">
          Pay
        </button>
      </form>
    </div>
  );
};

export default NetBankingForm;
