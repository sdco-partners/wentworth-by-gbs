import { useState } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

export default function SignupForm () {
      const url = process.env.REACT_APP_MAILCHIMP_URL;

      return (
        <MailchimpSubscribe url={url}/>
        // <form className="newsletter__signup" onSubmit={handleSubmit}>
        //   <input
        //     aria-label="enter your email"
        //     name="email_address"
        //     placeholder="enter your email"
        //     required
        //     type="text"
        //     onChange={handleEmailChange}
        //     value={email}
        //   />
        //   <button className="newsletter__submit">SUBMIT</button>
        // </form>
      )
}