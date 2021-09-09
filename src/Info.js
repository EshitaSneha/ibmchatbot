import  React from 'react'
import axios from 'axios'
import {NewsContextProvider} from './NewsContext'
import News from './component/News'
import tips from './tips'
import App from './App';
import {NavLink as Link } from "react-router-dom";

function Info()
{
    return(
        <div className='info'>
           <Link  className='home' to='/'>HOME</Link>
           <Link className='tips' to ='/tips'>HEALTH TIPS</Link>
            
               <h1>MEDICAL NEWS</h1>   
           
        <NewsContextProvider>
           <News>
          </News>
        </NewsContextProvider>
        
      </div>
    )
}

export default Info;
