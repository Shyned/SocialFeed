import React, { useState } from 'react';



const AddPost = (props) => {

    const [name,setName] =useState('')
    const [post,setPost]=useState('')


    // function to handle page reloads
    function handleSubmit(event){
        event.preventDefault();
        let newPost = {name: name,
        post: post}
        console.log(newPost)
    }

    return ( 
// calls function to stop page reload when create is clicked
        <form onSubmit={handleSubmit}>
            <label>Name </label>
             {/*event target value allows user to input new value */}
            <input type="text" name="Name" value={name} onChange={(event) => setName(event.target.value)}/>
            <label>Post </label> 
            <input type="text" name="Post" value={post} onChange={(event) => setPost(event.target.value)}/>
            <button type='submit'> Create </button>
        </form>

     );
}
 
export default AddPost;