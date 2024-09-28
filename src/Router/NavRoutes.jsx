import{BrowserRouter,Routes,Route} from'react-router-dom'
import Navbar from "../Router/Navbar";
import Contact from "../Component/Contact";
import CancelBooking from "../Component/CancelBooking";
import Terms from "../Component/Terms";
import TravellerDetails from "../Component/flight_details/TravellerDetails";
import FlightSearch from "../Component/FlightSearch";
import  MyAccount from "../Component/MyAccount"
import Login from "../Component/Login";
import SignUp from "../Component/signup";
import  ModifySearchDetails from '../Component/ModifySearchDetails'
import ImageSlider from '../Component/ImageSlider'


const NavRoutes = () =>{
    return(
         <BrowserRouter>
            <Routes>
                <Route path='/' element={<Navbar/>}> 
                <Route index element={<ImageSlider/>}/>
               <Route path='/Contact' element={<Contact/>}/>
                <Route path='/CancelBooking' element={<CancelBooking/>}/>
                <Route path='/Terms' element={<Terms/>}></Route>
                <Route path='/TravellerDetails' element={ <TravellerDetails/>}/>
                <Route path='/FlightSerach' element={ <FlightSearch/>}/>
                <Route path='/MyAccount' element={ < MyAccount/>}/>
                <Route path='/Login' element={ < Login/>}/>
                <Route path='/Signup' element={ < SignUp/>}/>
                <Route path='/ModifySearchDetails' element={ < ModifySearchDetails/>}/>
                



               
                </Route>  
                     
            </Routes>
         </BrowserRouter>
    );
}

export default NavRoutes;