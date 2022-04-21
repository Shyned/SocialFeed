import React, { useState,useEffect } from 'react';
import DisplayWall from './Components/DisplayWall/DisplayWall';
import AddPost from './Components/AddPost/AddPost';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


function App() {
  const [posts, setPosts] = useState([{name:"JJ vega",entry:"Its April Fools Day! Give this a dislike if you really like it."},{name:"Nevin Siebal",entry:"My Rubik's cube is fully charged and ready for battle. Right after I eat my meal that has appeared from the magical hand from behind my curtain."}, {name: "Nevin Seibiel", entry:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}])
  
  // function to take in an object add to an array and return updated array
  function addNewPost(newpost){
    let tempPost = [newpost,...posts];
    setPosts(tempPost);
  }
// pop up alert to let you know that person.name has a new post
// useEffect(()=>{
//   alert(posts[0].name + " has a new post")
// },[posts])
   
  return (
   <div>
    <div className='header'>
      <h1 >
        Soical<div className='mute-color'>feed</div>
      </h1>
    </div>
     {/* container around wall and post area */}
      <div className='content-area'>
        <div className='new-post'>
          <AddPost addNewPost = {addNewPost}/>
        </div>
        <div className='my-wall'>
          {/* child function to pass down new posts to be displayed on the wall */}
          <DisplayWall posts = {posts}/>
        </div>
      </div>
   </div>
  );
}

export default App;
