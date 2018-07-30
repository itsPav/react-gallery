import React from 'react';

const errorPage = () => (
  <div>
    <h1>404!</h1>
    <p>Path {window.location.pathname} not found.</p>
    <a href="/">Go back.</a>
  </div>
);

export default errorPage;