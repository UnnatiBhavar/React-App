import React from "react";
import './contact.css';
import { MdOutlineMessage } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
const Contact=()=>{
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "1b75c5f5-fd8c-4f5b-9f6d-1aec47702186");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully!");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  

return (


  <section className="contact">
    <div className="content">
    <h2>Send us a message <MdOutlineMessage style={{width:'35px',marginLeft:'10px',}}/></h2>
    <p>
             Feel free to reach out through contact form or find our contact information
            below. your feedback, questions, and suggestions are  
            important to us as we strive to provide exceptional service to our flight Booking system. </p>
   </div>
   <div className="container">
    <div className="contactInfo">
      <div className="box">
        <div className="icon"><IoIosMail /></div>
        <div className="text">
          <h3>Email</h3>
          <p>Contact@FlyBharat.com </p>
         </div>
      </div>
      <div className="box">
        <div className="icon"><BsFillTelephoneForwardFill /></div>
        <div className="text">
          <h3>Phone</h3>
          <p> 123-432-456-00</p>
         </div>
      </div>


    </div>

    <div className="contactForm">
       
        
<form onSubmit={onSubmit} >
  <h2>Send Message</h2>
  <div className="inputBox">
    <input type="text" name="" required="required" />
    <span>Full Name</span>
  </div>
 <div className="inputBox">
  <input type="text" name="" required="required" />
  <span>Email</span>
  </div>    
  <div className="inputBox">
  <textarea required="required"></textarea>
  <span>Type Your Message here..</span>
  </div>  
  <div className="inputBox">
  <button className="btn btn-dark" type="submit">Submit Now<FaArrowRight/> </button>
  </div>
</form>
<span>{result}</span>


    </div>

   </div>
  </section>    

)
}
export default Contact;




{/* <div className=" contact">
    <div className="contact-col">
        <h3>Send us a message <MdOutlineMessage style={{width:'35px',marginLeft:'10px',}}/></h3>
        <p>Feel free to reach out through contact form or find our contact information
            below. your feedback, questions, and suggestions are  
            important to us as we strive to provide exceptional service to our flight Booking system. </p>
            <ul>
                <li><IoIosMail style={{width:'25px',marginRight:'10px'}}/>Contact@FlyBharat.com </li>
                <li><BsFillTelephoneForwardFill style={{width:'25px',marginRight:'10px'}}/> 123-432-456-00 </li>
            </ul>
    </div>
    
    <div className="contact-col">
       
        
<form onSubmit={onSubmit}>
  <div className="form-group">
    <label htmlFor="">Your name</label>
    <input type="text"class="form-control" name="name" placeholder="Enter Your Name" required/>
    </div>
    <div className="form-group">
    <label htmlFor="">Phone Number</label>
    <input type="tel" class="form-control" name="phone" placeholder="Enter Your Mobile Number" required />
    </div>
    <div className="form-group">
    <label htmlFor="">Write Your Message Here!</label>
    <textarea class="form-control" name="message" rows="6" placeholder="Enter Your Message" required></textarea>
    </div>
    <button className="btn btn-dark" type="submit">Submit Now<FaArrowRight/> </button>
   
</form>
<span>{result}</span>


    </div>
</div> */}

