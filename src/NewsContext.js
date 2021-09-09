import React ,{createContext,useState, useEffect} from "react";
import ReactDOM from 'react-dom';
import axios from 'axios'
import './App.css';

const NewsContext = createContext()
export const  NewsContextProvider = (props) => 
{
     const [data, setnews] = useState();

     useEffect(()=>
     {
         axios.get('https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=3eb16d2ddedf48739142da75ef33c7dc')
         .then((res)=> setnews(res.data))
         .catch((err)=>console.log(err))
     },[data]);


    return(
        <NewsContext.Provider value={{data}}>{props.children}</NewsContext.Provider>

        
         
    )
};
export default NewsContext;


