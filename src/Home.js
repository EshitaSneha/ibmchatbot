import Info from "./NewsContext"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import './App.css';
 import 'react-router-dom';
 import {NavLink as Link , Switch, Route, BrowserRouter} from "react-router-dom";
 import Typewriter from "typewriter-effect";
 import {useGoogleOneTapLogin} from 'react-google-one-tap-login'
 import {useState} from 'react'

 function Home() {

  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  useGoogleOneTapLogin({
    
onSuccess:(res)=>
{
  setname(res.given_name)
  setemail(res.email)
},
onError:(err)=>
{
  console.log(err)
},
    
    googleAccountConfigs:
    {
      client_id:
      "964550562134-pocm6ll06fv76335c6ue5b7vgk0fpdr3.apps.googleusercontent.com"
    }
  });

    return (
     
      <div className='App'>
       <img  className='avatar' src="https://i.postimg.cc/bY5ygrrQ/user.png"/><br></br>
       <div className='user'> 
      
     {name}
       <br></br>
        {email}
         </div>
         
         <Link  className='home' to='/about'>NEWS</Link>
         <Link className='tips' to ='/tips'>HEALTH TIPS</Link>
         
         <h1 className='title'>MED APP</h1> 
         
         
         <img src="https://i.postimg.cc/k43ZbB37/doctor.png"></img>
         
         <div className='text'>
         <Typewriter
  
       onInit={(typewriter)=> {
  
       typewriter
        
       .typeString("WELCOME TO MED APP BOT!")
         
       .pauseFor(1000)
       .deleteAll()
       .typeString("WELCOME TO MED APP BOT!, We are here to help you to book online appointment.")
       .start();
       }}
       />
       </div>
      
         
        
         <AliceCarousel autoPlay autoPlayInterval="3000">
        <img src='https://i.postimg.cc/TPbtt0qn/health.jpg' className="sliderimg"/>
        <img src= 'https://i.postimg.cc/Jhp8K11f/health1.jpg' className="sliderimg"/>
        <img src= 'https://i.postimg.cc/8kMpggw6/health2.jpg'className="sliderimg"/>
        <img src= 'https://i.postimg.cc/cL9ZBx1V/health3.jpg'className="sliderimg"/>
        <img src= '  https://i.postimg.cc/D0HLGkJs/health5.jpg' className="sliderimg"/>
        <img src= 'https://i.postimg.cc/mrLzt2XJ/health4.jpg'className="sliderimg"/>
       
          </AliceCarousel>
          
  
          <h1>Introduction</h1>
          <p>
            Welcome to our Med App! We are are glad that you choose this webiste fot appointment.<br></br>
            Here We are providing you withe the online Booking Appointment for medical purpose so that <br></br>
            you can make our health  better and we feel satisfied.<br></br><br></br>
            Our  CHATBOT at the bottom right corner will help you to appoint the online booking for medical <br></br>
            purpose. Here you will get the news related to Medical and doctors  details.
            
          </p>
          <h3>YOU CAN EXPRESS YOUR WORRIES AND CAN  BOOK A APPOINTMENT!!<br></br> GO  TO THE BOTTOM RIGHT CORNER TO THE ICONS AND BOOK THE APPOINTMENT</h3>
              <h3>To see more Click here :</h3><br></br>
          <Link className='about' to='/about'>Read Me</Link>

          <br></br><br></br><br></br>

          <p class='contact'>For any queries contact:<br></br>
          Sneha.saurav20@gmail.com<br></br> 
          eshitamehta2000@gmail.com</p>
        
         </div>
        
         
        
      
  
    );
  }

  export default Home;
  