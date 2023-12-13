import React, {FunctionComponent} from "react";

const HeaderOut:FunctionComponent=()=>{

    return (
        <header className="">
          {/* Navbar */}
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            {/* Container wrapper */}
            <div className="container-fluid">
              {/* Toggle button */}
              <button
                className="navbar-toggler"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="fas fa-bars"></i>
              </button>
    
              {/* Collapsible wrapper */}
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                {/* Navbar brand */}
                <a className="navbar-brand mt-2 mt-lg-0" href="#">
                  <img
                    src=""
                    height="50"
                    alt="MonBedou Logo"
                  />
                </a>
                {/* Left links */}
              </div>
              {/* Collapsible wrapper */}
    
              {/* Right elements */}
              <div className="d-flex align-items-center">
                {/* Add your right elements here */}
              </div>
              {/* Right elements */}
            </div>
            {/* Container wrapper */}
          </nav>
          {/* Navbar */}
        </header>
      );
}

export default HeaderOut;