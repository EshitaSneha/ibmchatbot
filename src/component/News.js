import React, { useContext } from 'react'
import  NewsContext from '../NewsContext'
import Newsarticles from './Newsarticle'
import './App2.css'
function News(props)

{
    const {data} = useContext(NewsContext)
    return(
        <div className='all_news'>
            
            {data ? data.articles.map(news=> <Newsarticles data={news} key={news.url}/>):
            "loading"}
         
        </div>
    )
}

export default News;