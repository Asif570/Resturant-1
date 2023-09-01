import { useContext } from "react";
import { Context } from "../../main";
import { useParams } from "react-router-dom";
import FoodItemCard from "../foodItemCard/FoodItemCard";

const ChefDetails = () => {
  const { FindChef, foods } = useContext(Context);
  const { id } = useParams();
  const data = FindChef(id);
  const Foods = data?.speacial_foods_id.map((spid) => {
    return foods?.find((item) => item.id == spid);
  });
  const top_3_speacial_food = Foods?.slice(0, 3);
  return (
    <div className="mb-20">
      <div className="mb-10">
        <div className="relative">
          <img
            className="w-full h-full object-cover max-h-[400px]"
            src="https://thumbs.dreamstime.com/b/chef-banner-design-horizontal-background-african-american-showing-hand-to-copy-space-yong-smiling-handsome-cook-man-points-162914452.jpg"
            alt="Banner Image"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex justify-center items-center flex-col gap-3">
            <h1 className="text-4xl md:text-6xl text-white font-bold tracking-widest">
              Hello , This is
              <span className="block font-bold text-xl md:text-5xl mt-5 text-[#f1550c]">
                {data?.name}
              </span>
            </h1>
            <p className=" text-black text-lg">Chef of Dǐng Tài Fēng</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <img
          src={data?.photo_url}
          alt="Chef image"
          className="h-[200px] md:h-[400px] w-full"
        />
        <div className=" flex flex-col gap-5">
          <h3 className="text-xl md:text-3xl text-white font-bold">
            {data?.name}
          </h3>
          <p className="text-md md:text-lg">
            <strong>Years of Exprience : </strong>
            {data?.years_of_exp}
          </p>
          <p className="text-md md:text-lg">
            <strong>Bio :</strong>
            {data?.bio}
          </p>
          <p className="text-md md:text-lg">
            <strong>Number of items : </strong>
            {data?.speacial_foods_id.length}
          </p>
        </div>
      </div>
      <hr className="my-10" />
      <h3 className="text-xl md:text-3xl text-white text-center underline mb-5 mt-10">
        <strong className=" block"> {data?.name}'s</strong>
        Top 3 Items
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-20">
        {top_3_speacial_food?.map((item) => (
          <FoodItemCard data={item} key={item?.id} />
        ))}
      </div>
    </div>
  );
};
export default ChefDetails;
