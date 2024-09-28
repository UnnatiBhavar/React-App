import { useState } from "react";
const DebitCardForm = () => {

  const [debit,setDebit] =useState({
    cardNumber:'',
    expiryDate:'',
     cvv:''
  });
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();


   
      const { cardNumber, expiryDate, cvv } = debit;
     // payment processing (you can add validation)
   if (cardNumber && expiryDate && cvv) {
      setPaymentSuccess(true);
      alert("Congratulations! Payment Procceed Successfully")
      console.log("saved:", debit);
    }
  };


    return (
      <div>
         {/* Display success msg */}
         {paymentSuccess && (
              <div className="alert alert-success" role="alert">
                Payment processed successfully!
              </div>
            )}

        <h5>Debit Card Payment</h5>
        <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label>Card Number</label>
          <input type="text" className="form-control" placeholder="1234 5678 9012 3456" maxLength="16" value={debit.cardNumber} 
                              onChange={e=>setDebit({...debit,cardNumber:e.target.value})}/> 
        </div>
        <div className="form-group mb-3">
          <label>Expiry Date</label>
          <input type="text" className="form-control" placeholder="MM/YY" maxLength="4" value={debit.expiryDate}
           onChange={e=>setDebit({...debit,expiryDate:e.target.value})}/>
        </div>
        <div className="form-group mb-3">
          <label>CVV</label>
          <input type="text" className="form-control" placeholder="123" maxLength="3" value={debit.cvv} onChange={e=>setDebit({...debit,cvv:e.target.value})} />
        </div>
        <button type="submit" onClick={handleSubmit} className="btn btn-primary btn-block">Pay</button>
        </form>
      </div>
    );
  };
  export default DebitCardForm;
  