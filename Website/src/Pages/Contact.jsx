import '../styles/Contact.css'
import React from 'react'

function Contact(){

        const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e279ce31-0ead-47b7-8574-a05ae64e16ff");

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

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
      <h3 className='query'>Feel free to reach out through the form below or connect with me on social media:</h3>
      <label className='lblName' htmlFor='' >Name: </label>
        <input className='txtbox1' type="text" name="name" required/>
        <label className='lblEmail' htmlFor=''>Email Address: </label>
        <input className='txtbox2' type="email" name="email" required/>
        <label className='lblMessage' htmlFor=''>Message: </label>
        <textarea className='txtbox3' name="message" required></textarea>

        <button className='button1' type="submit" >Submit Form</button>

        <span className='resultMessage'>{result}</span>
      </form>

    </div>
  )
}
export default Contact