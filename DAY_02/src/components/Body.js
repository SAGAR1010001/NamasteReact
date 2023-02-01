import { useState, useEffect } from "react";
import { restaurantlist } from "../constant";
import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [allRestaurants,setAllRestaurants]=useState([])
  const [filteredRestaurants,setFilteredRestaurants] =useState([])
  //searchText is a local state variable
  const [searchText, setSearchText] = useState(""); //to create state variable
  //   const [searchClicked, setSearchClicked] = useState("false");


  function filterData(searchText, restaurants) {
    const filterData = restaurants.filter((restaurant) =>
      restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return filterData;
  }

  console.log("render()");

  useEffect(
    // below call back function not immedu=iately but whenever useffect want to call it
    () => {
      console.log(
        "call this when searcText local react state variable changes"
      );
      //API CALL
      getRestaurants();
    },
    // [restaurants] this will cause infinte rendering 
    []
  );


  async function getRestaurants() {
  const data = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.6227799&lng=85.1285437&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    // Optional chaining
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards)
      setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
}

// conditional rendering
  //if restaurant is empty => shimmer UI
  // IF RESTAURANT HAS DATA => actual data UI
  if (!allRestaurants) return <h1>All restaurante are not there!!</h1>;


  if(filteredRestaurants?.length ===0) return <h1>No Restaurant is found!!</h1>


  return (allRestaurants?.length ===0 ?<Shimmer/> : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />

        <button
          clas
          sName="search-btn"
          onClick={() => {
            //need to filter the data
            const data = filterData(searchText, allRestaurants);
            //then update the restaurant variable
            setFilteredRestaurants(data);
          }}
        >
          Search-{searchText} 
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants.map((restaurant) => {
          return <RestrauntCard {...restaurant.data} />;
        })}
      </div>
    </>
  )
  );
};

export default Body;
