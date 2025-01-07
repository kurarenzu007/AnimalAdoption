import React, { useState } from 'react';
import './DonationForm.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 
import { useNavigate } from 'react-router-dom';


const DonationForm = () => {
  const navigate = useNavigate();
  const [donationAmount, setDonationAmount] = useState('');
  const [donorName, setDonorName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [isCardNumberVisible, setIsCardNumberVisible] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(''); 
  const [gcashNumber, setGcashNumber] = useState('');
  const [remarks, setRemarks] = useState('');
  const [message, setMessage] = useState('');
  const [isFormValid, setIsFormValid] = useState(true);
  const [processing, setProcessing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!donationAmount || !donorName || isNaN(donationAmount) || donationAmount <= 0) {
      setIsFormValid(false);
      return;
    }

    setProcessing(true);

    setTimeout(() => {
      setProcessing(false);
      setMessage(`Thank you, ${donorName}, for your generous donation of ₱${donationAmount}!`);
      setDonationAmount('');
      setDonorName('');
      setAddress('');
      setPhoneNumber('');
      setCardNumber('');
      setGcashNumber('');
      setRemarks('');
    }, 2000);
  };

  const handleBack = () => {
    
    navigate('/donate'); 
  };

  return (
    <div className="donation-form">
      <h2>Donate to Our Animal Shelter</h2>

      {/* Back Button */}
      <button className="back-button" onClick={handleBack}>Back</button>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="donorName">Your Name</label>
          <input
            type="text"
            id="donorName"
            name="donorName"
            value={donorName}
            onChange={(e) => setDonorName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="donationAmount">Donation Amount (₱)</label>
          <input
            type="number"
            id="donationAmount"
            name="donationAmount"
            value={donationAmount}
            onChange={(e) => setDonationAmount(e.target.value)}
            placeholder="Enter donation amount"
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Your Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your address"
          />
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter your phone number"
          />
        </div>

        <div className="form-group">
          <label htmlFor="paymentMethod">Payment Method</label>
          <select
            id="paymentMethod"
            name="paymentMethod"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="">Select Payment Method</option>
            <option value="gcash">Gcash</option>
            <option value="card">Credit Card</option>
          </select>
        </div>

       
        {paymentMethod === 'gcash' && (
          <div className="form-group">
            <label htmlFor="gcashNumber">Enter Gcash Number</label>
            <input
              type="text"
              id="gcashNumber"
              name="gcashNumber"
              value={gcashNumber}
              onChange={(e) => setGcashNumber(e.target.value)}
              placeholder="Enter Gcash number"
            />
          </div>
        )}

       
        {paymentMethod === 'card' && (
          <div className="form-group">
            <label htmlFor="cardNumber">Credit Card Number</label>
            <div className="card-input">
              <input
                type={isCardNumberVisible ? 'text' : 'password'}
                id="cardNumber"
                name="cardNumber"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                placeholder="Enter card number"
              />
              <button
                type="button"
                className="show-password"
                onClick={() => setIsCardNumberVisible(!isCardNumberVisible)}
              >
                {isCardNumberVisible ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
        )}

        <div className="form-group">
          <label htmlFor="remarks">Remarks</label>
          <textarea
            id="remarks"
            name="remarks"
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
            placeholder="Enter any remarks (optional)"
          />
        </div>

        {!isFormValid && (
          <p className="error-message">Please enter a valid donation amount and your name.</p>
        )}

        <div className="form-group">
          <button type="submit" disabled={processing}>
            {processing ? 'Processing...' : 'Donate Now'}
          </button>
        </div>
      </form>

      {message && <p className="success-message">{message}</p>}
    </div>
  );
};

export default DonationForm;
