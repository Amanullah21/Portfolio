import React from "react";
import { social } from "./Data";
const Contact = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row mt-5">
          <div
            className="col-12 text-center fw-bold fs-1 text-white px-5 mb-5"
            id="heading"
          >
            Contact<span style={{ color: "orange" }}> Me</span>
            <hr
              style={{
                width: "10%",
                margin: "auto",
                height: "7%",
              }}
            />
          </div>
          <div className="col-2"></div>
          <div className="col-12 mt-3 text-center" id="section2">
            {social.map((Val) => {
              return (
                <>
                  <a
                    href={`${Val.link}`}
                    key={Val.id}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-3"
                  >
                    <i className={`${Val.icon}`} id="icons" ></i>
                  </a>
                </>
              );
            })}
          </div>
          <div className="w-100 my-4 text-center">
          <span style={{ color: "orange"}}>Mail </span><a href="mailto:1amanpce@gmail.com"> 1amanpce@gmail.com</a> <br/>
          <span style={{ color: "orange" }}> Contact</span> <a href="tel:555-555-5555" > 7070476900</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
