import React, { useState } from 'react'

const ModelPop = () => {
    let[modelStatus,setModelStatus]=useState(false)
  return (
    <div>
         <button className='en'onClick={()=>setModelStatus(true)}>Details Section</button>
  
  <div  onClick={()=>setModelStatus(false)} className={`modelOverLay  ${modelStatus ? 'modelShow': ''}`}></div>
   <div className={`modelDiv  ${modelStatus ? 'showModelDiv': ''} ` }>

  <h3 className='next'>NextWebi <span onClick={()=>setModelStatus(false)}  className='span1' >&times;</span> </h3>
 <br /> 
<p><b>With over 7+ years of our journey we have been proudly serving our clients in different industry verticals from small startups to large enterprises.</b></p>
</div> 
      
    </div>
  )
}

export default ModelPop
