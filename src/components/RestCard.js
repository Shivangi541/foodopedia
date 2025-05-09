import { CDN_URL } from "../utils/constants";

const RestCard = ({ resObj }) => {
  if (!resObj) return null;

  const {
    info: { name, cuisines, avgRating, costForTwo, cloudinaryImageId },
  } = resObj;

  return (
    <div className="card">
      <img
        className="card-image"
        src={CDN_URL + cloudinaryImageId}
        alt="Cakes"
      />
      <div>
        <h2>{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{avgRating} stars</h4>
        <h5>{costForTwo}</h5>
      </div>
    </div>
  );
};

export const withOpenLabel = (RestCard) => {
  return (props) => {
    return (
      <div>
        <label>OPEN</label>
        <RestCard {...props} />
      </div>
    );
  };
};
export default RestCard;
