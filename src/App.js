import React, { useState,useEffect } from 'react';


function App() {
  const [post, setpost] = useState([{name:'jj vega',post:'Its April Fools Day! Give this a dislike if you really like it. : )'},{name:'Nevin Siebal',post:"My Rubik's cube is fully charged and ready for battle. Right after I eat my meal that has appeared from the magical hand from behind my curtain."}])
  
  
  
  return (
   <div>
     <form>
       <label>NAME
         <input></input>
       </label>
       <label>POST
         <input></input>
       </label>
     </form>
   </div>
  );
}

export default App;
