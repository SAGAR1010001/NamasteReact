/**
 * 
 * 
 * parcel is a beast
 * 
 * 
 * 
 * 
 * 
 *? HMR : Hot Module Replacement

 *?  FILE WATCHER algorithm - C++


*  BUNDLING
*Created a Server
 * MINIFY
 * 
 * Cleaning our Code
 * 
 * 
 * Dev and Production Build
 * 
 * Super Fast build algorithm
 * 
 * 
 * Image Optimization
 * 
 * Caching while development
 * 
 * Compression
 * 
 * compatible with older version of browser i.e add polyfills to it
 * 
 * 
 * HTTPS on dev ====> npx parcel index.html --https
 * 
 * PORT NUMBER
 * 
 * 
 * 
 *Consistent Hashing algorithm to cache things up
 * 
 * 
 * 
 * Zero config bundler
 * 
 * 
 */

import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  {
    id: "heading",
    className: "mdk",
    style: { color: "red" },
  },
  "Namaste Everyone!"
);
console.log(heading); //   React element is nothing but an OBJECT

const heading1 = React.createElement(
  "h1",
  {
    id: "heading",
    className: "mdk",
    style: { color: "red" },
  },
  "HEADING 1"
);

const heading2 = React.createElement(
  "h1",
  {
    id: "heading",
    className: "mdk",
    style: { color: "red" },
  },
  "HEADING 2"
);

const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading1, heading2]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
