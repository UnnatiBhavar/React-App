import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { SlArrowDown } from "react-icons/sl";
import Accordion from 'react-bootstrap/Accordion';
import Figure from 'react-bootstrap/Figure';
import './Footer.css'
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { IoShareSocialSharp } from "react-icons/io5";

function ImageSlider() {
  return (
    <>
    <div>
    <Carousel>
      <Carousel.Item interval={1000} >
      <img src="/assets/mountain2.jpg" style={{width:'100%',height:'550px'}}  alt="slide1" />
        <Carousel.Caption>
          <h3>Mountains are always calling!</h3>
          <p>Discover the real value of travel</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img src="/assets/AgattiIslandLAKSAWADWEEP.jpg"  style={{width:'100%',height:'550px'}}   alt="slide2"  />
         <Carousel.Caption>
          <h3>Beaches are always Calling!</h3>
          <p>Just Book your Flight to enjoy yourself on flight & Salt water heals everything.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
      <img src="/assets/flight1.jpeg" style={{width:'100%',height:'550px'}}   alt="slide3"  />

        <Carousel.Caption>
          <h3>Like to fly then Go for Booking</h3>
          <p>
          A visit to a museum is a search for beauty, truth, and meaning in our lives
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000} >
      <img src="/assets/kashmir.jpeg" style={{width:'100%',height:'550px'}}  alt="slide4" />
        <Carousel.Caption>
          <h3>Best Place to visit is the LAKSHADWEEP</h3>
          <p>Lakshadweep: 99% fun and 1% Land/ enjoy the coral paradise.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500} >
      <img src="/assets/flight4.webp" style={{width:'100%',height:'550px'}}  alt="slide5" />
        <Carousel.Caption>
          <h3>Fly-Bharat</h3>
          <p>“Craft Your Adventure Story”</p>
        </Carousel.Caption>
      </Carousel.Item>

      

    </Carousel>
    </div>
   
   <div>

   <h3 style={{color:'white', textAlign:'center'}}>------Exclusive Offers-----</h3>
   
  

   <CardGroup>
 <Card  className="mb-2 ">
   
   <Card.Body>
     <Card.Title>Offer On New user</Card.Title>
     <Card.Text>
       New user Offer is your first flight then here you go, 
       use code to get this Offer
       

     </Card.Text>
   </Card.Body>
   <Card.Footer>
     <small className="text-muted">Use Code:DISCOUNT10</small>
   </Card.Footer>
 </Card>
 <Card className="mb-2">
   
   <Card.Body>
     <Card.Title>Invite & Earn</Card.Title>
     <Card.Text>
       Invite & Earn up to 500 &#8377{' '}
     </Card.Text>
   </Card.Body>
   <Card.Footer>
     <small className="text-muted">Use Code:SUMMER20</small>
   </Card.Footer>
 </Card>
 <Card className="mb-2">
 
   <Card.Body>
     <Card.Title>Offer on Last minute Booking</Card.Title>
     <Card.Text>
       Flat 25% off with last minute Booking
     </Card.Text>
   </Card.Body>
   <Card.Footer>
     <small className="text-muted">Use Code:OFFER30</small>
   </Card.Footer>
 </Card>

 <Card className="mb-2">
   
   <Card.Body>
     <Card.Title>Flat 20% Off</Card.Title>
     <Card.Text>
       Flat 20% OFF on Select 6E Add-Ons

     </Card.Text>
   </Card.Body>
   <Card.Footer>
     <small className="text-muted">Use Code:22fe84</small>
   </Card.Footer>
 </Card>
</CardGroup>
   </div>
<div>
<h3 style={{color:'white', textAlign:'center'}}>----Stories-----</h3>
    <CardGroup>
       <Card>
        <Card.Img variant="top" style={{height:'300px'}} src="/assets/kashmir2.jpeg"/>
        <Card.Body>
          <Card.Title>Kashmir</Card.Title>
          <Card.Text>
        


    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Read More About Kashmir</Accordion.Header>
        <Accordion.Body>
        Kashmir is heaven on earth with its alpine peaks and snow-clad ranges. 
        From trekking to solo trips to leisurely family vacations, Kashmir is a complete package. 
        An unbelievably beautiful landscape, valley of flowers, serene lakes and amazing trekking trails,
         Kashmir has a little of everything to offer to its visitors. <br/>
         </Accordion.Body>
         </Accordion.Item>
         <Accordion.Item eventKey="1">
        <Accordion.Header>Looking to decode Kashmir for your next trip?</Accordion.Header>
        <Accordion.Body>
         Here is a complete list of places you must visit during your tour:
        The capital of J&K, Srinagar is one of the most beautiful places in Kashmir.
         Take a shikara ride on the peaceful Dal Lake, view the city from the top of Shankaracharya Temple
          and stay in the iconic house boats on your next trip. You'll definitely fall in love with Kashmir!
           Srinagar is home to the Shalimar Gardens that are on the back of the Rs. 10 Indian Currency Note.
How to reach:To reach Srinagar by train, one could take a train to either Jammu Tavi or Udhampur Railway Station. 
From there you can take a taxi or a bus to this beautiful place.
Must Do: Stay in a Houseboat
Best time to visit:February to July

<Figure>
      <Figure.Image
        width={500}
        height={180}
        alt="500x180"
        src="/assets/srinagar.jpg"
      />
      <Figure.Caption>
        Shrinagar in Kashmir
      </Figure.Caption>
    </Figure>
    </Accordion.Body>
</Accordion.Item>
      </Accordion>
 


          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card>
        <Card.Img variant="top" style={{height:'300px'}} src="/assets/agra-taj-mahal.avif" />
        <Card.Body>
          <Card.Title>Taj Mahal</Card.Title>
          <Card.Text>
       
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Read More About Taj Mahal</Accordion.Header>
        <Accordion.Body>
        The Taj Mahal was designated as a UNESCO World Heritage Site in 1983 for being 
        “the jewel of Muslim art in India and one of the universally admired masterpieces of the world's heritage”. 
        It is regarded by many as the best example of Mughal architecture and a symbol of India's rich history. <br/>
         </Accordion.Body>
         </Accordion.Item>
         <Accordion.Item eventKey="1">
        <Accordion.Header>Looking to decode Taj Mahal for your next trip?</Accordion.Header>
        <Accordion.Body>
        You can buy the tickets from the Archaeological Survey of India office on 
        Agra Mall Road between 10:00 am and 06:00 pm. The price for an adult Indian tourist is INR 510,
         and for an international tourist is INR 750. Children between 3 and 15 years need to pay INR 500 to gain entry.
         But there are ways of making the visit more rewarding. The key thing is to visit at the right time of year:
          mid-September to October is the optimal season,
        after the monsoon rains and searing summer temperatures, but before the big crowds arrive

<Figure>
      <Figure.Image
        width={500}
        height={180}
        alt="500x180"
        src="/assets/agra-taj-mahal.avif"
      />
      <Figure.Caption>
        Taj Mahal in Agra
      </Figure.Caption>
    </Figure>
    </Accordion.Body>
</Accordion.Item>
      </Accordion>
          </Card.Text>
        </Card.Body>
       
      </Card>


      
      <Card>
        <Card.Img variant="top" style={{height:'300px'}} src="/assets/Hoi_An.avif" />
        <Card.Body>
          <Card.Title>Hoi An-Vietnam</Card.Title>
          <Card.Text>
         
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Read More About Hoi-Vietnam</Accordion.Header>
        <Accordion.Body>
        Hoi An old town is a small city located within the much larger town of Hoi An. Lined with ancient houses, 
        designer boutiques, art galleries, museums, and coffee shops, it is a UNESCO World Heritage Site.
         There are 22 cultural sights, while the centerpiece is the Japanese Covered Bridge. It is a pedestrian-only zone, 
        and cars and bikes are not allowed after 10:00 AM. There is an entry ticket of VND 120000 to enter Old Town. <br/>
         </Accordion.Body>
         </Accordion.Item>
         <Accordion.Item eventKey="1">
        <Accordion.Header>Looking to decode Hoi-An for your next trip?</Accordion.Header>
        <Accordion.Body>
        The best time to visit Hoi An is from February to April. During these months is the dry season, 
        where you can expect minimal rainfall, moderate temperatures, and a cooling but sunny weather
        Hoi An, Hue & Danang in the centre of Vietnam have hot and dry weather from mid-January to late August, with temperatures often reaching the mid-30's °C. 
        During the winter months the rainfall increases with October and November achieving peak levels, 
        occasionally in the form of typhoons.
<Figure>
      <Figure.Image
        width={500}
        height={180}
        alt="500x180"
        src="/assets/Hoi_An.avif"
      />
      <Figure.Caption>
        Hoi-An in Vietnam
      </Figure.Caption>
    </Figure>
    </Accordion.Body>
</Accordion.Item>
      </Accordion>
          </Card.Text>
        </Card.Body>
       
      </Card>
    </CardGroup>

</div>

   <div>

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

   </div>
   </>

  );
}
export default ImageSlider;