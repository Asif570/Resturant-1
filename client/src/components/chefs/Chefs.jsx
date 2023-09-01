import { useContext } from "react";
import { Context } from "../../main";
import ChefCardItem from "../chefCardItem/ChefCardItem";

const Chefs = () => {
  const { chefs } = useContext(Context);
  return (
    <div className="my-20">
      <h3 className="text-center text-white text-xl md:text-3xl underline my-5">
        Our Chefs
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-20 justify-items-center">
        {chefs?.map((item) => (
          <ChefCardItem data={item} key={item?.id} />
        ))}
      </div>
    </div>
  );
};
export default Chefs;
