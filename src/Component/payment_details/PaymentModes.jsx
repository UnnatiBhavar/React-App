import React, { useState } from 'react';
import CreditCardForm from './CreditCardForm';
import DebitCardForm from './DebitCardForm';
import UpiForm from './UpiForm';
import NetBankingForm from './NetBankingForm'
import TravellerDetails from '../flight_details/TravellerDetails';

const PaymentModes = () => {
  //  selected payment mode
  const [paymentMode, setPaymentMode] = useState('');

  //  handle payment mode selection
  const handlePaymentMode = (mode) => {
    setPaymentMode(mode);
  };

  return (
    <div className="container border border-primary rounded p-2 mt-3 w-52 text-bg-primary">
      <h3 className="text-center mb-2">Select Payment Mode</h3>

      {/* Payment Mode Select*/}
      <div className="row justify-content-center w-40">
        <div className="col-md-6">
          <div className="card p-4 shadow">
            <h4 className="card-title text-center mb-4">Choose Your Payment Method</h4>

            {/* Payment Mode Buttons */}
            <div className="d-grid gap-2 mb-4">
              <button className="btn btn-outline-primary" onClick={() => handlePaymentMode('creditCard')}>
                Credit Card
              </button>
              <button className="btn btn-outline-primary" onClick={() => handlePaymentMode('debitCard')}>
                Debit Card
              </button>
              <button className="btn btn-outline-primary" onClick={() => handlePaymentMode('netBanking')}>
                Net Banking
              </button>
              <button className="btn btn-outline-primary" onClick={() => handlePaymentMode('upi')}>
                UPI
              </button>
            </div>

            {/* Form Rendering Based on Selected Payment Mode */}
            {paymentMode === 'creditCard' && <CreditCardForm />}
            {paymentMode === 'debitCard' && <DebitCardForm />}
            {paymentMode === 'netBanking' && <NetBankingForm />}
            {paymentMode === 'upi' && <UpiForm />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentModes;


