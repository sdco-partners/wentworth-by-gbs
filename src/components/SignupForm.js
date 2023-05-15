import { useState } from "react";

export default function SignupForm () {
      const [email, setEmail] = useState(""); 
      
      const handleEmailChange = (e) => {
        setEmail(e.target.value);
      }
      
  
      const handleSubmit = async (e) => {
        e.preventDefault()
        try {
          // TO-DO!
        } catch (err) {
          console.log(err);
        }
      }
    
      return (
        <form className="newsletter__signup" onSubmit={handleSubmit}>
          <input
            aria-label="enter your email"
            name="email_address"
            placeholder="enter your email"
            required
            type="text"
            onChange={handleEmailChange}
            value={email}
          />
          <button className="newsletter__submit">SUBMIT</button>
        </form>
      )
}