import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => (
  <div className="container mt-4">
    <div>You might be lost <Link to="/">back home</Link></div>
  </div>);

export { NotFoundPage };
