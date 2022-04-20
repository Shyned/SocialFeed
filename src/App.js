import React, { useState,useEffect } from 'react';
import DisplayWall from './Components/DisplayWall/DisplayWall';

function App() {
  const [posts, setpost] = useState([{name:"JJ vega",entry:"Its April Fools Day! Give this a dislike if you really like it."},{name:"Nevin Siebal",entry:"My Rubik's cube is fully charged and ready for battle. Right after I eat my meal that has appeared from the magical hand from behind my curtain."}, {name: "Nevin Seibiel", entry:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}])
  
  
  
  return (
   <div>
     <form>
       <label>Name</label>
       <input type='text' name='name'></input>
       <label>Post</label>
       <input type='text' name='Post'></input>
       {/* child function to pass down new posts to be displayed on the wall */}
      <DisplayWall posts={posts}/>
     </form>
   </div>
  );
}

export default App;
