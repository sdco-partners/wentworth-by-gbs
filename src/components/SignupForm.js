import MailchimpSubscribe from "react-mailchimp-subscribe";

export default function SignupForm () {
  const url = process.env.REACT_APP_MAILCHIMP_URL;

  const CustomMailchimpForm = ({ status, message, onValidated }) => {
    let email;
    const submit = () =>
      email &&
      email.value.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email.value,
      });
      
  return (
    <>
      {status === "sending" && <div className="subscribe-status">sending...</div>}
      {status === "error" && (<div className="subscribe-status" dangerouslySetInnerHTML={{ __html: message }}/>)}
      {status === "success" && (<div className="subscribe-status" dangerouslySetInnerHTML={{ __html: message }}/>)}
      <input
        ref={node => (email = node)}
        type="email"
        placeholder="enter your email"
      />
      <button onClick={submit}>Submit</button>
    </>
  );
  };

  return (
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
          <CustomMailchimpForm
            status={status}
            message={message}
            onValidated={formData => subscribe(formData)}
          />
        )}
      />
  );
}