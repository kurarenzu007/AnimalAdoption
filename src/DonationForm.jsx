
import React, { useState } from 'react';
import './DonationForm.css';
const DonationForm = () => {
  const [donationAmount, setDonationAmount] = useState('');
  const [donorName, setDonorName] = useState('');
  const [message, setMessage] = useState('');
  const [isFormValid, setIsFormValid] = useState(true);
  const [processing, setProcessing] = useState(false);

 
  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (!donationAmount || !donorName || isNaN(donationAmount) || donationAmount <= 0) {
      setIsFormValid(false);
      return;
    }

    setProcessing(true);

    
    setTimeout(() => {
      setProcessing(false);
      setMessage(`Thank you, ${donorName}, for your generous donation of $${donationAmount}!`);
      setDonationAmount('');
      setDonorName('');
    }, 2000);
  };

  return (
    <div className="donation-form">
      <h2>Donate to Our Animal Shelter</h2>
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
          <label htmlFor="donationAmount">Donation Amount ($)</label>
          <input
            type="number"
            id="donationAmount"
            name="donationAmount"
            value={donationAmount}
            onChange={(e) => setDonationAmount(e.target.value)}
            placeholder="Enter donation amount"
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
