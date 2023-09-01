import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const FoodItemCard = ({ data }) => {
  const [fav, setFav] = useState(false);
  const id = data.id;
  const addFavHandler = () => {
    if (fav) {
      toast("Already Added in Favorite");
      return;
    }
    setFav(true);
    toast("Add Favorite Successfull !");
  };
  return (
    <div className="card w-[90%] border overflow-clip border-[#ffffff] shadow-xl  h-[450px]">
      <Link to={`foods/${id}`}>
        <img
          src={data?.photo_url}
          alt="Food"
          className=" cursor-pointer w-full h-[300px] rounded-t-md hover:opacity-60"
        />
      </Link>

      <div className="card-body flex-row items-center justify-between">
        <h2 className="card-title text-white text-xl  ">{data?.name}</h2>

        <div className="card-actions justify-end">
          {fav ? (
            <AiFillHeart
              className="text-2xl text-red-600"
              onClick={addFavHandler}
            />
          ) : (
            <AiOutlineHeart
              className="text-2xl cursor-pointer"
              onClick={addFavHandler}
            />
          )}
        </div>
      </div>
      <Link to={`/foods/${id}`} className="btn">
        View Details
      </Link>
    </div>
  );
};
export default FoodItemCard;
