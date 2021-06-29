import React from "react";
import Image from "next/image";
const ImageBox = (props) => {
  return (
    <div className="col">
      <div className="card imagebox-start-mealkit-brand">
        {/* {console.log(props.rest.image)} */}
        <Image
          src={props.rest.image}
          width="448px"
          height="272px"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{props.rest.title}</h5>
          <small> {props.rest.small}</small>
          <p className="card-text">{props.rest.cardText}</p>
          <a href={props.rest.readMoreId} className="ReadMore">
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default ImageBox;
