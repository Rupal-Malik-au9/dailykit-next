import React, { PureComponent } from 'react'
import { useAuth } from "../store/auth";
export function Carddetails() {
    const { user } = useAuth();
  
        return (
            <form action="/api/setup-intent" method="POST">
            <div className="card pricing-box">
              <div className="card-body">
              <label>Number</label><input name="number"></input><br/><br/>
              <label>Expiry Month</label><input name="exp_month"></input><br/><br/>
              <label>Expiry Year</label><input name="exp_year"></input><br/><br/>
              <label>CVC</label><input name="cvc"></input><br/><br/>
              <input type="hidden" name="email" value={user.email} />
              </div> 
              <button type="submit" role="link">Select Plan</button>
            </div>  </form>
        )
    
}

export default Carddetails
