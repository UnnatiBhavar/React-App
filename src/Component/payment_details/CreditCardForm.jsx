import { useState } from "react";

const CreditCardForm = () => {
  
    const [credit,setCredit] =useState({
      nameOnCard:'',
      cardNumber:'',
      expiryDate:'',
       cvv:''
    });
    const [paymentSuccess, setPaymentSuccess] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();


     
        const { nameOnCard, cardNumber, expiryDate, cvv } = credit;
       //  payment processing (you can add validation)
     if (cardNumber && expiryDate && cvv && nameOnCard) {
        setPaymentSuccess(true);
        alert("Congratulations! Payment Procceed Successfully")
        console.log("saved:", credit);
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

        <h5>Credit Card Payment</h5>
        <form onSubmit={handleSubmit}>
              {/* Name on Card */}
              <div className="form-group mb-3">
                <label htmlFor="nameOnCard">Name on Card</label>
                <input
                  type="text"
                  className="form-control"
                  value={credit.nameOnCard}
                  onChange={(e) => setCredit({...credit,nameOnCard:e.target.value})}
                  placeholder="First Last Name"
                  required
                />
              </div>

        <div className="form-group mb-3">
          <label>Card Number</label>
          <input type="text" className="form-control" placeholder="1234 5678 9012 3456"
           value={credit.cardNumber} onChange={(e) => setCredit({...credit,cardNumber:e.target.value})}
           maxLength="16" required />
        </div>
        <div className="form-group mb-3">
          <label>Expiry Date</label>
          <input type="text" className="form-control" placeholder="MM/YY"
          value={credit.expiryDate} 
          onChange={(e) => setCredit({...credit,expiryDate:e.target.value})}
           maxLength="5" required />
        </div>
        <div className="form-group mb-3">
          <label>CVV</label>
          <input type="text" className="form-control" placeholder="123" maxLength="3"
                  value={credit.cvv}
                  onChange={(e) => setCredit({...credit,cvv:e.target.value})}
 />
        </div>
        <button type="submit" className="btn btn-primary btn-block" onClick={handleSubmit}>Pay</button>

        </form>
      </div>
    
    )
  };
  export default CreditCardForm;