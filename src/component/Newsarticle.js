import React from 'react'
import './App2.css'
function Newsarticles({data})
{
    return(
    <div className='news'>
       
        <h2 className='news_title'>{data.title}</h2>
        <p className='news_desc'>{data.description}</p>
        <p className='news_con'>{data.content}</p>
        <p className='news_p'>{data.publishedAt}</p><br></br>
        <p className='author'>{data.author}</p>
        </div>
    )

}
export default Newsarticles

