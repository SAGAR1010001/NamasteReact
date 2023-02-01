import { IMG_CDN_URL } from "../constant";



 const RestrauntCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  lastMileTravel,
}) => {
  // console.log(props)
  return (
    <div className="card">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
        alt="burger king"
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(",")}</h3>
      <h4>{lastMileTravel} kms</h4>
    </div>
  );
};


export default RestrauntCard;


