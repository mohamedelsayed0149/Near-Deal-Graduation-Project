import React from "react";
import "../css/Payment.css";
import { FaUserCircle } from "react-icons/fa";

const Payment = () => {


  return (
    <div className="payment">
      <div className="title">
        <FaUserCircle className="header-icon" />
        <h2>My Info</h2>
      </div>

      <div className="form">
        <form>
          <div className="input">
            <label>Email</label>
            <input type="text" placeholder='eg: yourname@gmail.com' />
          </div>
          <div className="input">
            <label>Username</label>
            <input type="text" placeholder='eg: jaison.justus' />
          </div>
          <div className="input">
            <label>Password</label>
            <input type="password" placeholder='123456789' />
          </div>
          <div className="input">
            <label>Confirm Password</label>
            <input type="password" placeholder='123456789' />
          </div>
          
          <div className='input'>
            <button className='confirm'>Confirm</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Payment;
