import { func } from 'prop-types'
import reacr from 'react'
import "./App.css"
import {NavLink as Link } from "react-router-dom";

 
function tips()
{
    return(
        <div className="tip">
            <Link  className='home' to='/'>HOME</Link>
           <Link className='home' to ='/about'>NEWS</Link>
            <h1 className="head">HEALTH TIPS</h1>
            
            <img className ='image' src="https://i.postimg.cc/mrDVYCjs/inspired-indian-man-doing-yoga-asanas-city-park-young-citizen-exercising-outside.jpg"></img>
          <p className='t1'>The start of a new decade brings with it new resolutions to improve one’s life, including a healthier lifestyle. Here are 20 practical health tips to help you start off towards healthy living in 2020.</p>
  
           <p className='t1'>Use can go through the following tips whic will  help you to make you feel better and make you fit..</p>
          
          <h3>1.EAT HEALTHY DIET</h3>
          <img className='image' src="https://i.postimg.cc/SsWw5H24/quinoa-mushrooms-lettuce-red-cabbage-spinach-cucumbers-tomatoes-bowl-buddha-dark-top-view.jpg"></img><br></br>
          <pre  className='first'>
            
             
              * Eat a combination of different foods, including fruit, vegetables, legumes, nuts and whole grains. <br></br>
              *Adults should eat at least five portions (400g) of fruit and vegetables per day. 
              *You can improve your intake of fruits and vegetables by always including<br></br>  veggies 
              in your  meal;eating fresh fruit and vegetables as
                 snacks; eating a variety of fruits and vegetables; and eating them in season.<br></br>
              * By eating healthy, you will reduce your risk of malnutrition and noncommunicable <br></br>
              diseases (NCDs) such as diabetes, heart disease, stroke and cancer.
          </pre>

<hr></hr>
          <h3>2.CONSUME LESS SUGAR AND SALT</h3>
          <img className='image' src='https://i.postimg.cc/KYTwV44w/4160.jpg'></img><br></br>
          <pre  className='first'>
              
              * Consuming excessive amounts of sugars increases the risk of tooth decay and unhealthy weight gain.<br></br>
             *In both adults and children, the intake of free sugars should be reduced to less than 10% of total energy intake.<br></br>
            * This is equivalent to 50g or about 12 teaspoons for an adult.<br>
            </br> *WHO recommends consuming less than 5% of total energy intake for additional health benefits.<br>
            </br> *You can reduce your sugar intake by limiting the consumption of sugary snacks, candies and sugar-sweetened beverages.
          </pre>

          <hr>
          </hr>
          <h3>3. DONT SMOKE</h3>
          <img className="image" src="https://i.postimg.cc/7ZqYV86g/pexels-jessica-ticozzelli-4333556.jpg"></img>
          <pre  className='first'>
          * Smoking tobacco causes NCDs such as lung disease, heart disease and stroke. <br>
          </br>*Tobacco kills not only the direct smokers but even non-smokers through second-hand exposure.<br></br>
          * Currently, there are around 15.9 million Filipino adults who smoke tobacco but 7 in 10 smokers are interested <br></br>
             or plan to quit.<br></br>

           * If you are currently a smoker, it’s not too late to quit. Once you do, you will experience immediate <br>
           </br>and long-term health benefits. If you are not a smoker, that’s great! Do not start smoking and fight for <br>
           </br>your right to breathe tobacco-smoke-free air.
          </pre>
          <hr>
          </hr>
          <h3>4.DO EXERCISE</h3>
          <img className="image" src='https://i.postimg.cc/NjbT8xgj/pexels-li-sun-2294354.jpg'></img>
          <pre  className='first'>
          
           * Physical activity is defined as any bodily movement produced by skeletal muscles that requires energy expenditure.<br></br>
           *  This includes exercise and activities undertaken while working, playing, carrying out household chores, travelling,<br></br>
            and engaging in recreational pursuits. <br></br>
            * The amount of physical activity you need depends on your age group but adults aged 18-64 years should do at least <br></br>
               150 minutes of moderate-intensity physical activity throughout the week.<br></br>
               *  Increase moderate-intensity physical activity to 300 minutes per week for additional health benefits.
              </pre>   
              
              <hr>
              </hr>
              <h3>5.PREPARE OUR FOOD CORRECTLY</h3>
              <img className='image' src="https://i.postimg.cc/fWVr1v53/pexels-trang-doan-936611.jpg"/>
              <pre  className='first'>
                 
                  <br>
                  </br>
                   * Unsafe food containing harmful bacteria, viruses, parasites or chemical substances, causes<br></br>
                      more than 200 diseases – ranging from diarrhoea to cancers.<br></br>
                 *  When buying food at the market or store, check the labels or the actual produce to ensure it is safe to eat.<br>
                </br> *If you are preparing food, make sure you follow the Five Keys to Safer Food: <br></br>    
             (1) keep clean; <br></br>
             (2) separate raw and cooked;<br></br>
             (3) cook thoroughly; <br></br>
            (4) keep food at safe temperatures;<br></br>
             (5) use safe water and raw materials<br></br>

            </pre> 
            
            <h2 className='end'>These are the tips which will definitely will help you!!</h2>   

             </div>
    )
    
}

export default tips;