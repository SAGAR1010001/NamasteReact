/**
 * Header
 *   -logo
 *   -Nav Items(Right side)
 *   -Cart
 *
 * Body
 *   -search bar
 *   -ReataurantList
 *       -RestaurantCard (many cards)
 *          -Image
 *          -Name
 *          -Rating
 *          -Tags
 *          -Cuisine
 *
 * Footer
 *    -links
 *    -copyrights
 *
 *
 *
 */

import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { IMG_CDN_URL } from "./constant";




//config driven UI
const config = [
  //   type: "caraousel" is dynamic in nature .It vary from place to place. And this is done by the backend.

  {
    type: "carousel",
    cards: [
      {
        offerName: "50% off",
      },
      {
        offerName: "No Delivery Charge",
      },
    ],
  },
  // AFTER MY CARAOUSEL
  {
    type: "restaurant",
    cards: [
      {
        name: "Burger King",
        image:
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/5f1c0c7b36787d89b63e9743838d4f5c",
        cuisines: ["Burger", "American"],
        rating: "4.2",
      },
      {
        name: "KFC",
        image:
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/5f1c0c7b36787d89b63e9743838d4f5c",
        cuisines: ["KFC", "American"],
        rating: "4.1",
      },
    ],
  },
];


const burgerKing = {
  name: "Burger King",
  image:
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/5f1c0c7b36787d89b63e9743838d4f5c",
  cuisines: ["Burger", "American"],
  rating: "4.2",
};


const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
