import React, { useState } from 'react';

const Home = () => {

  let [cont,setCont] = useState(false)
  return (
    <div>
      <input type={cont ? "text" :"password"} />
        <button onClick={()=>{setCont(cont)}}>
{
  cont ? "hide" : "show"
}

        </button>
      
    </div>
  );
}

export default Home;
