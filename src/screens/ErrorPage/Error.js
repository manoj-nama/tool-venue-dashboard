import React from "react";
import { useNavigate } from "react-router-dom";
import "./Error.css"


const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <>
     <div id="notfound">
    <div className ="notfound">
      <div className ="notfound-404">
        <h1 className="heading"><span className="spanerror">4</span><span className="styles.spanerror">0</span><span className="spanerror">4</span></h1>
      </div>
      <h2 className="errormessage">Oops!! Something went wrong</h2>
        <button className="err-btn"
          onClick={() => navigate("/")}
        >
          Back to Dashboard
        </button>
    </div>
  </div>

    </>
  );
};


export default ErrorPage;