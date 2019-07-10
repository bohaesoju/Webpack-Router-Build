import React from "react";
import Introduce from "./components/introduce";
import { BrowserRouter } from "react-router-dom";

const Root = () => {
  return (
    <div>
        <BrowserRouter>
            <Introduce />
        </BrowserRouter>
    </div>
  );
};

export default Root;
