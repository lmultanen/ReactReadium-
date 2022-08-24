import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AllAuthors = () => {
    const authors = useSelector((state) => state.authors);
    return (
      <div id="authors" className="column">
        {/* The below ternary operator checks if stories is a truthy value (which should be an array) and if it is truthy it then checks if stories.length is a truthy value (since a length value is 0 or higher, any length other than 0 will return a truthy value.)  If both of these conditions are met then the code will map over stories and render the below jsx.  */}
  
        {authors && authors.length
          ? authors.map((author) => (
              <Link to={`/authors/${author.id}`} key={author.id}>
                <div className="author row">
                  <img src={author.imageUrl}/>
                  <p>{author.name}</p>
                </div>
              </Link>
            ))
          : null}
      </div>
    );
  };
  
  export default AllAuthors;