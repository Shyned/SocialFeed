



const DisplayWall= (props) => {
    return (  
        <section>
      {/* Wall to post new entries */}
      {/* use dot notaion to access the post object and attributes */}
        {props.posts.map((el,index)=>{
            return(
                <div key={index+1} style={{ borderBottom:"1px grey solid"}}>
                    <h3>{el.name}</h3>
                    <p>{el.entry}</p>
                    {/* place holder for like and dislike icons */}
                    <button className="like-dislike">
                        {/* like */}
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-thumb-up" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3"></path>
                        </svg>
                    </button>
                    <button className="like-dislike">
                        {/* dislike */}
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-thumb-down" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M7 13v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v7a1 1 0 0 0 1 1h3a4 4 0 0 1 4 4v1a2 2 0 0 0 4 0v-5h3a2 2 0 0 0 2 -2l-1 -5a2 3 0 0 0 -2 -2h-7a3 3 0 0 0 -3 3"></path>
                        </svg>
                    </button>
                </div>
            );
       })}
      </section>
    );
}
 
export default DisplayWall;