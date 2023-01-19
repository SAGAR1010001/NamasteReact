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

// const heading = React.createElement(
//   "h1",
//   {
//     id: "heading",
//     className: "mdk",
//     style: { color: "red" },
//   },
//   "Namaste Everyone!"
// );
// console.log(heading); //   React element is nothing but an OBJECT

// console.log(heading);

// const heading2 = React.createElement(
//   "h2",
//   {
//     id: "heading2",
//     className: "header2",
//     key:"h2",
//     style: { color: "red" },
//   },
//   "HEADING 2"
// );

// <div class="header">
//   <h1>Namaste React</h1>
//   <ul>
//     <li>About us</li>
//     <li>Support </li>
//     <li>Home</li>
//   </ul>
// </div>

const heading = React.createElement(
  "h1",
  {
    id: "heading1",
    className: "header1",
    key: "h1",
    style: { color: "red" },
  },
  "HEADING 1"
);

const ul = React.createElement("ul", {}, [
  React.createElement("li", {}, "About Us"),
  React.createElement("li", {}, "Support"),
  React.createElement("li", {}, "Home"),
]);

const container = React.createElement(
  "div",
  {
    className: "container",
  },
  [heading, ul]
);

console.log(container);

/**
 *
 * JSX
 *
 *
 *
 */

const heading2 = (
  <h1 className="title" key="h2">
    Namaste React
  </h1>
);
console.log(heading2);

/**
 * functional component
 */

// const HeaderComponent = () => {
//   return (
//     <div>
//       <h1>Namaste React Functional component</h1>
//       <h2>This is a h2 tag </h2>
//     </div>
//   );
// };

//OR

const Title = () => (
  <h1 id="title" key="h2">
    Food Villa
  </h1>
);

var xyz = 10;
const HeaderComponent = () => (
  <div>
    {heading}
    {xyz}
    {console.log(xyz)}
    {/* <Title/>   this is known as Component composition  which is component inside a component*/}
    <p>
      <Title />
    </p>
    <h5>{Title()}</h5>
    <h1>Namaste React Functional component</h1>
    <h2>This is a h2 tag </h2>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

//WHEN I HAVE TO RENDER MY REACT ELLEMENT
// root.render(heading2);

//WHEN I HAVE TO RENDER MY REACT COMPONENT
root.render(<HeaderComponent />);
