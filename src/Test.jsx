import React, { useState } from "react";
import JSONDATA from "./Services.json";
import "./assests/style.css";

export default function Test() {
  const [data, setData] = useState("");
  return (
    <>
      <section>
        <div className="container-fluid bg-light hght">
          <div className="container">
            <h2
              style={{
                color: "#6e736f",
                marginTop: "2px",
                marginBottom: "32px",
                fontSize: "35px",
              }}
            >
              <b>All Services</b>
            </h2>
            <form className="d-flex  " role="search">
              <input
                className="form-control me-3 mb-4  service-input input-width"
                type="text"
                placeholder="Search"
                onChange={(event) => {
                  setData(event.target.value);
                }}
              />
              <button className="btn btn-warning p-2 mb-4 btnn " type="submit">
                SEARCH
              </button>
            </form>
            <div className="row bg-white">
              
                {/* <b>CONSULT AN EXPERT</b> */}
                {JSONDATA.filter((value) => {
                  if (data == "") {
                    return value;
                  } else if (
                    value.consult?.toLowerCase().includes(data?.toLowerCase())
                  ) {
                    return value;
                  } else if (
                    value.tax?.toLowerCase().includes(data?.toLowerCase())
                  ) {
                    return value;
                  } else if (
                    value.documentation
                      ?.toLowerCase()
                      .includes(data?.toLowerCase())
                  ) {
                    return value;
                  }
                }).map((val) => {
                  
                    return(<ul>
                        <li>
                        
                          <a href="#" className="search_ser col-md-4 mt-2">
                            {val.consult}
                          </a>
                          <a href="#" className="search_ser col-md-4 mt-2">
                              {val.tax}
                            </a>
                            <a href="#" className="search_ser col-md-4 mt-2">
                              {val.documentation}
                            </a>
                            
                        </li>
                      </ul>);
                })}
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
