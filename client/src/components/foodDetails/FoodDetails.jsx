import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../main";

const FoodDetails = () => {
  const { FindFood } = useContext(Context);
  const { id } = useParams();
  const data = FindFood(id);

  return (
    <div className=" my-20 px-5">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <img
          src={data?.photo_url}
          alt="food img"
          className="md:w-[40%] rounded-md shadow-lg h-[400px] w-full"
        />
        <div className="flex flex-col">
          <h3 className="text-lg font-bold md:text-2xl text-white mb-10">
            {data?.name}
          </h3>
          <p className="w-[80%]">{data?.details}</p>
        </div>
      </div>
      <div className="mt-10 mb-5 ">
        <h3 className="text-lg font-bold text-2xl text-white">ingredients:</h3>
        <ul className="text-start">
          {data?.ingredients?.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default FoodDetails;
