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
        <form onSubmit={handleSubmit} >
            <label style={{ color:"grey" }}>Name </label>
             {/*event target value allows user to input new value */}
            <input type="text" style={{ width:"50%" }} value={name} onChange={(event) => setName(event.target.value)}  />
            <label style={{ color:"grey" }}>Post </label> 
            <input type="text"  style={{ width:"50%", height:"200px"}} value={entry} onChange={(event) => setEntry(event.target.value)}/>
            <button type='submit' className='submit-button'> Create </button>
        </form>

     );
}
 
export default AddPost;