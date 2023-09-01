import { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { toast } from "react-toastify";
const ChefCardItem = ({ data }) => {
  const [fav, setFav] = useState(false);
  const addFavHandler = () => {
    if (fav) {
      toast("Already Added in Favorite");
      return;
    }

    setFav(true);
    toast("Add Favorite Successfull !");
  };
  return (
    <div className="card w-[90%] border border-[#ffffff] overflow-clip shadow-xl  h-[480px]">
      <Link to={`/chefs/${data.id}`}>
        <img
          src={data?.photo_url}
          alt="Food"
          className=" cursor-pointer w-full h-[300px] rounded-t-md hover:opacity-60"
        />
      </Link>

      <div className="card-body ">
        <div className="flex-row items-center justify-between flex">
          <div>
            <h2 className="card-title text-2xl text-white">{data?.name}</h2>
            <p>
              <strong>Years of Exp :</strong>
              &nbsp;{data?.years_of_exp}
            </p>
            <p>
              <strong>Speacial items :</strong>
              &nbsp;{data?.speacial_foods_id.length}
            </p>
          </div>
          {fav ? (
            <AiFillHeart className="text-2xl" onClick={addFavHandler} />
          ) : (
            <AiOutlineHeart className="text-2xl" onClick={addFavHandler} />
          )}
        </div>
        <Link to={`/chefs/${data.id}`} className="btn text-white">
          Show Items
        </Link>
      </div>
    </div>
  );
};
export default ChefCardItem;
