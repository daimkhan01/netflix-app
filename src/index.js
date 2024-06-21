import React from "react";
import ReactDOM from "react-dom";
import Cards from "./Cards";
import Sdata from "./Sdata";
import "./index.css";

ReactDOM.render(
  <>
    <h1 className="heading_style"> List of top Netflix Series in 2024 </h1>
    <div className="main_card">
      {Sdata.map((val) => {
        return (
          <Cards
            key={val.id}
            imgsrc={val.imgsrc}
            tittle={val.tittle}
            sname={val.sname}
            link={val.link}
          />
        );
      })}
    </div>
    <h1 className="footer_style"> Copyright (c) 2024 © Daim Rafi </h1>
  </>,
  document.getElementById("root")
);
