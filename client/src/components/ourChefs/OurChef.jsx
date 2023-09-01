import { useContext, useState } from "react";
import { Context } from "../../main";
import ChefCardItem from "../chefCardItem/ChefCardItem";

const OurChef = () => {
  const { chefs } = useContext(Context);
  const [show, setShow] = useState(false);
  let Chefs = chefs;
  if (!show) {
    Chefs = chefs.slice(0, 6);
  }
  const Showhundle = () => {
    setShow(!show);
  };

  return (
    <div className=" my-20 container  ">
      <h3
        className="text-2xl md:text-4xl font-bold text-center text-white mb-10 underline
      "
      >
        Our Chefs
      </h3>
      <div className="my-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-20 justify-items-center">
          {Chefs?.map((item) => (
            <ChefCardItem data={item} key={item.id} />
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
export default OurChef;
