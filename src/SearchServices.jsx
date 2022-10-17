import React, { useState } from "react";
import JSONDATA from "./Services.json";
import "./assests/style.css"

export default function SearchServices() {
  const [data, setData] = useState("");
  return (
    <>
      <section>
        <div className="container-fluid bg-light">
          <div className="container">
            <h2
              style={{
                color: "#6e736f",
                marginTop: "2px",
                marginBottom: "32px",
                fontSize:"35px"
              }}
            >
              <b>All Services</b>
            </h2>
            <form className="d-flex">
              <input
                className="form-control me-3 mb-4  service-input input"
                type="text"
                placeholder="Search"
                onChange={(event) => {
                  setData(event.target.value);
                }}
              />
              <button className="btn btn-warning  mb-4 btnn " type="submit">
                SEARCH
              </button>
            </form>
            <div className="row bg-white">
              <div className="col-md-4">
              {/* <b className="heading">CONSULT AN EXPERT</b> */}
                {JSONDATA.filter((value) => {
                  
                  if (data == "") {
                    return value;
                  } else if (
                    value.consult?.toLowerCase().includes(data?.toLowerCase())
                  ) {
                    return value;
                  }
                }).map((val) => {
                  return (
                    <div>
                      <ul>
                
                        <li>
                          <a href="#" className="search_ser">
                            {val.consult}
                          </a>
                        </li>
                      </ul>
                    </div>
                  );
                })}
              </div>

              <div className="col-md-4">
                {/* <b className="heading">TAX & COMPLIANCE</b> */}
                {JSONDATA.filter((value) => {
                  if (data == "") {
                    return value;
                  } else if (
                    value.tax?.toLowerCase().includes(data?.toLowerCase())
                  ) {
                    return value;
                  }
                }).map((val) => {
                  return (
                    <div>
                      <ul>
                        <li>
                          <a href="#" className="search_ser">
                            {val.tax}
                          </a>
                        </li>
                      </ul>
                    </div>
                  );
                })}
              </div>

              <div className="col-md-4">
                {/* <b className="heading">DOCUMENTATION</b> */}
                {JSONDATA.filter((value) => {
                  if (data == "") {
                    return value;
                  } else if (
                    value.documentation
                      ?.toLowerCase()
                      .includes(data?.toLowerCase())
                  ) {
                    return value;
                  }
                }).map((val) => {
                  return (
                    <div>
                      <ul>
                        <li>
                          <a href="#" className="search_ser">
                            {val.documentation}
                          </a>
                        </li>
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
