import { useContext, useState } from "react";
import { Context } from "../../main";
import FoodItemCard from "../foodItemCard/FoodItemCard";

const OurFood = () => {
  const { foods } = useContext(Context);
  const [show, setShow] = useState();
  let Foods = foods;
  if (!show) {
    Foods = foods.slice(0, 6);
  }
  const Showhundle = () => {
    setShow(!show);
  };
  return (
    <div className=" container ">
      <h3
        className="text-2xl md:text-4xl font-bold text-center text-white mb-10   underline
      "
      >
        Our Foods
      </h3>
      <div className="my-5 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-20 justify-items-center ">
          {Foods?.map((item) => (
            <FoodItemCard data={item} key={item.id} />
          ))}
        </div>
      </div>
      <div className="text-center block mt-10">
        {show ? (
          <button className="btn bg-[#f1550c] text-white " onClick={Showhundle}>
            Hide
          </button>
        ) : (
          <button className="btn bg-[#f1550c] text-white " onClick={Showhundle}>
            Show More
          </button>
        )}
      </div>
    </div>
  );
};
export default OurFood;
