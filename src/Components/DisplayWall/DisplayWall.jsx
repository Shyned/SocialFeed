



const DisplayWall= (props) => {
    return (  
        <section>
      {/* Wall to post new entries */}
      {/* use dot notaion to access the post object and attributes */}
        {props.posts.map((el)=>{
            return(
        <       div>
                    <h3>{el.name}</h3>
                    <p>{el.entry}</p>
                </div>
            );
       })}
      </section>
    );
}
 
export default DisplayWall;