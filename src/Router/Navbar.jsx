import { Link, Outlet} from "react-router-dom";
import './Navbar.css'
import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import { Dropdown } from "bootstrap";
import { MdFlight } from "react-icons/md";


 const Navbar = () => {
      const [selected, setSelected] = useState("");
    return(
      <>   
     <nav className='navbar navbar-expand-lg  ' style={{background:'#31d5eb7e'}}>
   
           <a className="navbar-links" href="/">  <li style={{color:"white"}} className='nav-item nav-link'> <MdFlight size={50}/><br />
           <i><h4 className="text-primary">Fly-Bharat</h4></i></li></a>
           <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu1" 
           aria-controls="menu1" aria-expanded="false" aria-label="Toggler Button" >
                <span className="navbar-toggler-icon"></span>
           </button>
            <div class="collapse navbar-collapse flot-start" id="menu1">
      <ul className="navbar-links navbar-nav ms-auto" >
     
      <li><Link className="" to="/Terms"></Link>
      </li>
        <li className='nav-item' ><Link className='nav-link' to="/FlightSerach">Flight</Link></li>
        <li className='nav-item'><Link className='nav-link' to="/MyAccount">My Account</Link></li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Manage Booking</Link>
    <ul className="dropdown-menu">
      <li className='nav-item'><Link class="dropdown-item" to="/ModifySearchDetails" style={{color:'black', background:'white',margin:'2px'}}>Modify Booking</Link></li>
      <li className='nav-item'><Link class="dropdown-item" to="/CancelBooking" style={{color:'black', background:'white',margin:'2px'}}>Cancel Booking</Link></li>
      
    </ul>

      </li>

         <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Support</Link>
    <ul className="dropdown-menu">
      <li className='nav-item'><Link class="dropdown-item" to="/Contact" style={{color:'black', background:'white'}}>Contact Support</Link></li>
      {/* <li className='nav-item'><Link class="dropdown-item" to="/bookings" style={{color:'black', background:'white'}}>FAQ</Link></li> */}
    </ul>

        </li>
        <li className='nav-item'><Link className='nav-link cntry'>
        <ReactFlagsSelect 
        selected={selected}
        onSelect={(code) => setSelected(code)}
        placeholder="Select Country"
        searchable
        searchPlaceholder="Search countries"
        className="menu-flags"
        />
        </Link></li>
      

     </ul>
      <ul className="navbar-links navbar-nav ms-auto float-end" id="buttons" >
            <li className='nav-item float-end rounded-4'><Link className='nav-link' to="/Login">Login</Link></li>
           <li className='nav-item rounded-4'><Link className='nav-link' to="/Signup">Sign Up</Link>
       </li>
      </ul> 
     
       </div>
 
      
       </nav>

<Outlet/>
   
   </> 

  )
 }



 export default Navbar;