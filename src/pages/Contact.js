import React from "react";
import { useLocation } from "react-router-dom";

function Contact() {
  const queryString = useLocation().search;

  const queryParams = new URLSearchParams(queryString);
  const name = queryParams.get("name"); //?name=mario

  return (
    <div>
      <h2>Hi {name}, Contact us here...</h2>
    </div>
  );
}

export default Contact;
