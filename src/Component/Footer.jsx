import React from "react";
import './Footer.css'
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { IoShareSocialSharp } from "react-icons/io5";



const Footer = () =>
    
{
   
    return(
<div className="footer">
    <div className="sb_footer section _padding">
        <div className="sb_footer-links">
    

            <div className="sb_footer-links_div">
                <h4>Site Directory</h4>
<a href="/Contact"><p>Support</p></a>
<a href="/Contact"><p>Contact</p></a>
<a href="/Login"><p>LogIn/SignUp</p></a>
<a href="/ModifySearchDetails"><p>Modify-Booking</p></a>
<a href="/CancelBooking"><p>Cancel Booking</p></a>
  <a href="/"><p>Go Back To Home!</p></a>
</div>
            <div className="sb_footer-links_div">
                <h4>Top Deomestic-Routes</h4>
<a href="/TopRoutes"><p>Mumbai-Delhi</p></a>
<a href="/TopRoutes"><p>Chennai-Mumbai</p></a>
<a href="/TopRoutes"><p>Delhi-Port Blair</p></a>
<a href="/TopRoutes"><p>Guwahati-Shillong </p></a>
<a href="/TopRoutes"><p>Mumbai-Bengaluru </p></a>
<a href="/TopRoutes"><p>Delhi-Bengaluru </p></a>
<a href="/TopRoutes"><p>Mumbai-Pune</p></a>


            </div>
            <div className="sb_footer-links_div">
                <h4>Explore us!</h4>
<div className="socialmedia">
<a href="https://www.facebook.com/"><h2><TiSocialFacebook/></h2></a>
<a href="https://in.linkedin.com/"><h2><TiSocialLinkedin/></h2></a>
<a href="https://www.instagram.com/"><h2><SlSocialInstagram/></h2></a>
<a href="/"><h2><IoShareSocialSharp/></h2></a>
<a href="/Contact" ><img src="/assets/Call.jpeg" alt="" className="Call" /></a>


</div>
        </div>

        </div>
        <hr />
        <div className="sb_footer-below">
            <div className="sb_footer-copyright">
                <p>
                    @{new Date().getFullYear()} Fly-Bharat. All right reserved.
                </p>
            </div>
            <div className="sb-footer-below-links">
            <a href="/"><p>Go Back To Home!</p></a>
            <a href="/Terms"><p>Terms&Conditions</p></a>
            </div>

        </div>
    </div>
</div>
    )
}
export default Footer;