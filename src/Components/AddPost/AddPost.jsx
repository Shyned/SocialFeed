import React, { useState } from 'react';



const AddPost = (props) => {

    const [name,setName] =useState('')
    const [entry,setEntry]=useState('')


    // function to handle page reloads
    function handleSubmit(event){
        event.preventDefault();
        let newPost = {name: name,entry: entry}
        console.log(newPost)
        props.addNewPost( newPost)
    }

    return ( 
// calls function to stop page reload when create is clicked
        <form onSubmit={handleSubmit}>
            <label>Name </label>
             {/*event target value allows user to input new value */}
            <input type="text" value={name} onChange={(event) => setName(event.target.value)}  />
            <label>Post </label> 
            <input type="text"  value={entry} onChange={(event) => setEntry(event.target.value)}/>
            <button type='submit'> Create </button>
        </form>

     );
}
 
export default AddPost;