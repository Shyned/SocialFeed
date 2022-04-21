



const DisplayWall= (props) => {
    return (  
        <section>
      {/* Wall to post new entries */}
      {/* use dot notaion to access the post object and attributes */}
        {props.posts.map((el,index)=>{
            return(
                <div key={index+1}>
                    <h3>{el.name}</h3>
                    <p>{el.entry}</p>
                    {/* place holder for like and dislike icons */}
                    <button>Like</button>
                    <button>dislike</button>
                </div>
            );
       })}
      </section>
    );
}
 
export default DisplayWall;