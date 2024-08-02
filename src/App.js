import './App.css';
// import { useState } from 'react';
import Header from './components/Header.jsx';

import Home from './components/Home.jsx';
import Service from './components/Service.jsx';
import Chatbot from './components/Chatbot.jsx';
import About from './components/About.jsx';
import BlogPage from './components/BlogPage.jsx';





function App() {
  // let[modelStatus,setModelStatus]=useState(false)
  return (      
    
    
    <div className="App">
      
     {/* <button className='en'onClick={()=>setModelStatus(true)}>Details Section</button>
  
  <div  onClick={()=>setModelStatus(false)} className={`modelOverLay  ${modelStatus ? 'modelShow': ''}`}></div>
  <div className={`modelDiv  ${modelStatus ? 'showModelDiv': ''} ` }>
  
   <h3 className='next'>NextWebi <span onClick={()=>setModelStatus(false)}  className='span1' >&times;</span> </h3>
   <br /> 
   <p><b>With over 7+ years of our journey we have been proudly serving our clients in different industry verticals from small startups to large enterprises.<br></br><a href="https://www.nextwebi.com/">@nextwebi</a>  </b></p>
  </div> */}
  <Header />
  
  <Home/>
  <Service/>
  <About/>
  <BlogPage/>
  <Chatbot/>
 

  
   

    </div>
  );
}

export default App;
