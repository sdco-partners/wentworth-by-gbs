import { useState } from "react";

export default function SignupForm () {
    
    const SignUp = () => {

        let [email, setEmail] = useState(""); 
        
        const handleEmailChange = (e) => {
          setEmail(e.target.value);
        }
        

        const handleSubmit = async (e) => {
          // TODO
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
            <button>SUBMIT</button>
          </form>
        )
      }

    return (
        <>
          <SignUp></SignUp>
        </>
    )
}