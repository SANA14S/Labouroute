import React from 'react';
import '../styles/Claims.css'; // Updated path

function Claims() {
  return (
    <div className="claims">
      <h1>File Your Claims</h1>
      <p>Submit your labor-related claims here.</p>
      <form className="claims-form">
        <label htmlFor="name">Full Name</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="claim">Claim Details</label>
        <textarea id="claim" name="claim" rows="5" required></textarea>

        <button type="submit">Submit Claim</button>
      </form>
    </div>
  );
}

export default Claims;