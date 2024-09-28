import {useState} from "react";
import AddAdult from "./AddAdult";
import { Alert } from "bootstrap";
import ExtraBaggage from "./ExtraBaggage";
import BookingTotal from "./BookingTotal";
import PaymentModes from "../payment_details/PaymentModes";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { MdOutlineFlightTakeoff } from "react-icons/md";
import { MdOutlineFlightLand } from "react-icons/md";
//import { MdFlight } from "react-icons/md";





const TravellerDetails = ({flight})=>
{
    //save traveller details
    const [traveller,setTraveller]=useState({
        option:'',
        title:'',
        firstName:'',
        lastName:'',
        gender:'',
         meal:'',
         birthOFDate:''
    })

   
//save contact details
const [contact,setContact]=useState({

    emailId:'',
    phoneNo:''
})


   // adding and removing adults/child

    const [divs, setDivs] = useState([]);

    const Addnew =() =>{

        setDivs([...divs, <AddAdult/>]);
    }

    const DeleteDiv = (index) => {
       
        const updatedDivs = divs.filter((_, i) => i !== index);
        setDivs(updatedDivs);
      };

// geting values from extra ExtraBaggage
   
  
const [count, setCount] = useState(0);
const [bagprice, setBagprice] = useState(0);



//variable usestate
    const [isSubmitted,setIsSubmitted] = useState(false)

//event handler to handle form save event
const handleSubmit = e=> {
    e.preventDefault();
    alert("Traveller details saved")
    setIsSubmitted(true)
    console.log("saved:", traveller);
   


}
console.log(flight.id)


const handleContact = e=> {
    e.preventDefault();
    setIsSubmitted(true) 
    console.log("saved:",contact);

}

 // Continue to payment state for showing payment modes

 const [showPayment, setShowPayment] = useState(false);


 const handleContinueToPayment = () =>{
    setShowPayment(true) ; //when button is click then show payment modes
    console.log("saved:",showPayment);

};






return(<>
{/* flight details */}

      <div className="container border border-primary rounded p-2 mt-2 w-52 text-bg-primary">  
    
    <h5 className="text-LEFT">&nbsp;&nbsp;&nbsp;FLIGHT DETAILS</h5>
     </div>
     <div className="container border border-primary rounded p-2 mt-1 w-52 text-bg-light">
            
            <h5>flight No. : {flight.id}</h5>
    
                      <MdOutlineFlightTakeoff color="gray " size={40} />&nbsp; From {flight.from} 
                    
                          <FaArrowRightArrowLeft size={30} />    &nbsp;
                       <MdOutlineFlightLand color="gray" size={40}/>&nbsp; To {flight.to}  
                        <div  >
                        Departure Time :{flight. departureTime} 
                        </div>
                        <div >
                        flight duration :{flight.duration}
                        </div>
                        <h5 >
                           Price : {flight.price} 
                        </h5>


                  
     </div>

   
        {/* {!isSubmitted && */} <div className="container border border-primary rounded p-2 mt-2 w-52 text-bg-primary">  
    
           <h5 className="text-LEFT">&nbsp;&nbsp;&nbsp;TRAVELLER DETAILS</h5>
    </div>
<div className="container border border-primary rounded p-2 mt-1 w-52 text-bg-light">

    <form onSubmit={handleSubmit}>

     <div className="mb-3">

<div className="form-check me-3  ">
    <input className="form-check-input me-2" type="radio" name="option" id="o1" value="Adult" checked={traveller.option=="Adult"} required
    onChange={e=>setTraveller({...traveller,option:e.target.value})}/>
    <label className="form-check-label me-2" htmlFor="o1" >ADULT</label>
    
</div>
<div className="form-check me-3">
    <input className="form-check-input me-2" type="radio" name="option" id="o2" value="Child" checked={traveller.option=="Child"}
    onChange={e=>setTraveller({...traveller,option:e.target.value})}/>
    <label className="form-check-label me-2" htmlFor="o2" >CHILD</label>
</div>
</div> 

    <div className="mb-3">
<label className="form-label" htmlFor="ti">TITLE </label>
<select className="form-select" id="ti" 
value={traveller.title}
onChange={e=>setTraveller({...traveller,title:e.target.value})}>
<option>Mr</option>
<option>Mrs</option>
<option>Ms</option>
<option>Miss</option>
<option>Dr</option>
<option>Prof</option>
</select>
</div>

<div className="mb-3">
<label>FIRST/MIDDLE NAME </label>
            <input className="form-control" type="text" placeholder="FIRST NAME" value={traveller.firstName}
            onChange={e=>setTraveller({...traveller,firstName:e.target.value})} required/>
        </div>
        <div className="mb-3">
<label>LAST NAME </label>
            <input className="form-control" type="text" placeholder="LAST NAME" value={traveller.lastName}
            onChange={e=>setTraveller({...traveller,lastName:e.target.value})} required/>
        </div>



<div className="mb-3">
<label>SELECT GENDER</label>
<div style={{display:'flex'}}>
<div className="form-check me-3  ">
    <input className="form-check-input me-2" type="radio" name="gender" id="g1" value="Male" checked={traveller.gender=="Male"} required
    onChange={e=>setTraveller({...traveller,gender:e.target.value})}/>
    <label className="form-check-label me-2" htmlFor="g1" >Male</label>
    
</div>
<div className="form-check me-3">
    <input className="form-check-input me-2" type="radio" name="gender" id="g2" value="Female" checked={traveller.gender=="Female"}
    onChange={e=>setTraveller({...traveller,gender:e.target.value})}/>
    <label className="form-check-label me-2" htmlFor="g2" >Female</label>
</div>
</div>

<div className="mb-3">
                    <label >BIRTH OF DATE:</label>
                    <input className="form-control" type="date" id="bod" name="birthOfDate" checked={traveller.birthOFDate} required 
                    onChange={e=>setTraveller({...traveller,birthOFDate:e.target.value})}/>
                </div>

<div className="mb-3">
<label className="form-label" htmlFor="me">MEAL PREFERENCE </label>
<select className="form-select" id="me" 
value={traveller.meal}
onChange={e=>setTraveller({...traveller,meal:e.target.value})}>
<option>Hindu meal</option>
<option>Asian veg meal</option>
</select>

</div>
      
      

    
     

      

     {/* button */}
     <div >
        <button className="text-bg-primary" onClick={Addnew}> ADD ADULT/CHILD </button>
       
     </div>

        {divs.map((divContent, index) => (
            <div key={index} style={{ marginTop: '10px', padding: '10px', border: '1px solid black' }}>
              {divContent}
              <button className="btn btn-danger"
                onClick={() => DeleteDiv(index)} 
                style={{ marginLeft: '10px' }}>
                DELETE
              </button>
            </div>
          ))}
       

 </div> 


        <div className="text-center">
            <button className="btn btn-outline-primary me-2" type="submit">SAVE</button>
            <button className="btn btn-outline-primary me-2" type="reset"
            onClick={()=>setTraveller({
                option:'',
                title:'',
                firstName:'',
                lastName:'',
                gender:'',
                birthOFDate:''
              
            })}>RESET</button>
        </div>
    </form>
</div>
<div className="container border border-primary rounded p-2 mt-3 w-52 text-bg-primary">
    <h5 className="text-left">&nbsp;&nbsp;&nbsp;ADD EXTRA BAGGAGES</h5>
</div>
<div className="container border border-primary rounded p-2 mt-1 w-52 text-bg-light">
    
    <ExtraBaggage count={count} setCount={setCount} setBagprice={setBagprice} />

</div>

<div className="container border border-primary rounded p-2 mt-3 w-52 text-bg-primary">
    <h5 className="text-left">&nbsp;&nbsp;&nbsp;CONTACT DETAILS</h5>
</div>
<form onSubmit={handleContact}>
<div className="container border border-primary rounded p-2 mt-1 w-52 text-bg-light">
<div className="mb-3">
    
<label className="form-label me-3">EMAIL ADDRESS</label>
    <input className="form-control" type="email" placeholder="Person@example.com"
    value={contact.emailId}
    onChange={e=>setContact({...contact,emailId:e.target.value})} required/>
    &nbsp;&nbsp;&nbsp;&nbsp;
   <p className="text-bg-success" style={{ display:"inline-block"}}>(Your ticket will be send on this email address)</p>

</div> 

<div className="mb-3">
<label className="form-label me-3">MOBILE NO.</label>
    <input className="form-control" type="tel" placeholder=" + 91 -0000000000" value={contact.phoneNo}
    onChange={e=>setContact({...contact,phoneNo:e.target.value})}
    pattern="[0-9]{10}" maxLength={10} required/>

</div>
<div className="text-center">
<button className="btn btn-outline-primary me-2" type="submit">SAVE</button>
</div>

</div>
</form>
<div className="container border border-primary rounded p-2 mt-4 w-52 text-bg-primary">
    <h5 className="text-left"> &nbsp;&nbsp;&nbsp;BOOKING DETAILS</h5>

</div>
     
<div className="container border border-primary rounded p-2 mt-1 w-52 text-bg-light">

   <BookingTotal adults ={divs.length} count={count} bagprice={bagprice} price={flight.price} />
   

</div>
{/*continue to payment button*/}
<div className="text-center mt-3 ">
<button type="submit" className="btn btn-primary btn-block
 rounded border-6" onClick={handleContinueToPayment}><h5>&nbsp;&nbsp;CONTINUE TO PAYMENT&nbsp;&nbsp;</h5></button>
        
    
   </div>  
   {/* Show Payment Modes if Continue to Payment is clicked */}
   {showPayment && <PaymentModes />}
     


</>

)
}
export default TravellerDetails;


