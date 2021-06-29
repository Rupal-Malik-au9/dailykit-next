import React from "react";
import Image from "next/image";
import SmallPara from "./SmallPara";
const Sidebar = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-xs-10 trend-responsive">
          <div className="sticky-top">
            <h3 className="sidebar_heading">{props.rest[0].sidebar_heading}</h3>
            <ul className="link_container">
              {props.rest[0].sidebar_link.map((link) => {
                let links = "#" + link;
                return (
                  <li key={link}>
                    <a href={links} className="sidebar_link">
                      {link}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        {/* <--initial Para--> */}
        <div className="col-md-6 col-xs-10">
          <p className="para_first">
            <span className="para_heading" id={props.rest[0].para_heading}>
              {props.rest[0].para_heading}{" "}
            </span>
            {props.rest[0].para.map((para) => {
              return (
                <>
                  {para}
                  <br />
                  <br />
                </>
              );
            })}
            {props.videourl && (
              <iframe
                src={props.videourl}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                className="startAMealVideo"
              ></iframe>
            )}
            {props.imageurl && (
              <Image
                src={props.imageurl}
                className="startAMealImage"
                alt="..."
              />
            )}
            {/* <--first Para--> */}
            {props.rest[0].para2.map((para) => {
              return (
                <>
                  <h4 className="para2_heading" id={para.para2_heading}>
                    {para.para2_heading}
                  </h4>
                  <SmallPara smallPara={para.para2} />
                  <br />
                  <br />
                </>
              );
            })}
          </p>
        </div>
        <div className="col-md-3 col-xs-10 form-display">
          <div
            className="ml-form-embed inner-form"
            data-account="3161173:g2o5g2c3i8"
            data-form="4175704:a4w7j9"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
