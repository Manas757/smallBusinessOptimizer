import React from 'react';
import { useState } from 'react';
import '../CSS/BsSignIn.css';
import SignIn from './SignIn';

const BsSignIn = () => {
    const [currentPage, setCurrentPage] = useState('business');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [bscat, setBscat] = useState('');

const handleSubmit = async (e) => {
        e.preventDefault(); 
        const formData = {
            username, 
            email, 
            password, 
            state, 
            city, 
            street, 
            ZIPCode: zipcode,
            BSCat: bscat      
        };
      


    try {
      
      const response = await fetch('http://localhost:5050/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        alert("Success! User ID: " + result.id);
        console.log("Server Response:", result);
      } else {
        alert("Registration Failed");
      }

    } catch (error) {
      console.error("Error connecting to server:", error);
      alert("Error: Could not connect to backend.");
    }}

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
              value = {username} onChange =
              {e => setUsername(e.target.value)} 
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="business@example.com"
              value = {email} onChange =
              {e => setEmail(e.target.value)} 
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              placeholder="........" 
              value = {password} onChange =
              {e => setPassword(e.target.value)}
              />
          </div>

          <div className="form-group address-group">
            <label>Address</label>
            <input 
              type="text" 
              name="street" 
              placeholder="Street" 
              className="mb-3" 
              value = {street} onChange =
              {e => setStreet(e.target.value)}
            />
            <div className="row">
              <input type="text" name="city" placeholder="City" value = {city} onChange =
              {e => setCity(e.target.value)} />
              <input type="text" name="state" placeholder="State" value = {state} onChange =
              {e => setState(e.target.value)} />
            </div>
            <input type="text" name="zip" placeholder="ZIP Code"  value = {zipcode} onChange =
              {e => setZipcode(e.target.value)}/>
          </div>

          <div className="form-group">
            <label htmlFor="category">Business Category</label>
            <div className="select-wrapper">
              <select id="category" name="category" value = {bscat} onChange =
              {e => setBscat(e.target.value)}>
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

          <button type="submit" className="btn-primary" onClick={handleSubmit}>
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
  );}


export default BsSignIn;
