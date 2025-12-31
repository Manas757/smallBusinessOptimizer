import React from 'react';
import { useState } from 'react';
import '../CSS/BsSignIn.css';
import SignIn from './SignIn';

const BsSignIn = () => {
    const [currentPage, setCurrentPage] = useState('business');

  return (
    <div className="wrapper">
    {currentPage === "business" && (

        <div className="signin-container">
        <h1>Business Sign In</h1>
        <p className="subtitle">Manage your products and orders</p>

        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input 
              type="text" 
              id="username" 
              name="username" 
              placeholder="Enter your business username" 
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="business@example.com" 
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              placeholder="........" 
              />
          </div>

          <div className="form-group address-group">
            <label>Address</label>
            <input 
              type="text" 
              name="street" 
              placeholder="Street" 
              className="mb-3" 
            />
            <div className="row">
              <input type="text" name="city" placeholder="City" />
              <input type="text" name="state" placeholder="State" />
            </div>
            <input type="text" name="zip" placeholder="ZIP Code" />
          </div>

          <div className="form-group">
            <label htmlFor="category">Business Category</label>
            <div className="select-wrapper">
              <select id="category" name="category">
                <option value="electrical">Electrical</option>
                <option value="retail">Retail</option>
                <option value="services">Services</option>
              </select>
            </div>
          </div>

          <div className="form-group checkbox-group">
            <label className="checkbox-label">
              <input type="checkbox" name="terms" />
              <span className="checkmark"></span>
              I agree to the Terms and Conditions
            </label>
          </div>

          <button type="submit" className="btn-primary">
            Sign In as Business
          </button>

          <a href="#" className="customer-signin-link" onClick={()=>setCurrentPage('user')}>
            Sign in as Customer
          </a>
        </form>
      </div>
            )}
     {currentPage === 'user' && (
        <SignIn/>
     )}
    </div>
  );
};

export default BsSignIn;
