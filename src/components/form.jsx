import { useState } from "react";
const Form = () => {
  const [result, setResult] =useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "262708f1-75b3-43c5-a128-86df4db82550");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return(
    <>
    <form onSubmit={onSubmit}>
        <label>
            <p>Name</p>
            <input name='Name' type="text" required/>
        </label>
        <label>
            <p>email</p>
            <input name='email' type="email"required/>
        </label>
        <label>
            <p>message</p>
            <textarea name='message' required></textarea>
        </label>
        <button type="submit">Send Message</button>
    </form>
    <p className="result">{result}</p>
    </>
  )
}
export default Form