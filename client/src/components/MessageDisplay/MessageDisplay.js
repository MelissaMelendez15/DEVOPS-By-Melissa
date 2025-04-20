import React from "react";

import "./MessageDisplay.css"

const MessageDisplay = ({ message }) => {
  if (!message) return null;

  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="bg-white p-4 rounded shadow text-center mt-3 messagedisplay">
          <h3 className="fs-4 fw-semibold">{message}</h3>
        </div>
      </div>
    </div>
  );
};

export default  MessageDisplay;