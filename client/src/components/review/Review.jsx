

const RestaurantReview = () => {
  return (
    <div className=" px-5 rounded-md shadow-md my-20">
      <h3 className="text-center text-2xl md:text-3xl text-white font-bold underline mb-10">
        Our Customer Says
      </h3>
      <div className="flex items-center justify-between mb-4 flex-col md:flex-row">
        <h2 className="md:text-2xl text-xl font-bold text-white">
          Amazing Chinese Cuisine
        </h2>
        <div className="rating">
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            checked
            className="mask mask-star-2 bg-orange-400"
          />
        </div>
      </div>
      <img
        src="https://media-cdn.tripadvisor.com/media/photo-s/19/b9/5f/18/din.jpg"
        alt="Restaurant"
        className="w-full mb-4 rounded-md shadow-md h-[450px]"
      />
      <ol type="dote" className=" list-decimal">
        <li>
          <p className="mb-4">
            I recently dined at this Chinese restaurant and had an incredible
            experience. The food was absolutely delicious, and the service was
            top-notch.
          </p>
        </li>
        <li>
          <p className="">
            The menu had a wide variety of options, and I was impressed with the
            authenticity of the dishes. The flavors were rich and well-balanced,
            and each dish was beautifully presented.
          </p>
        </li>
        <li>
          <p className=" mt-4">
            The staff was friendly and attentive. They made sure that all our
            needs were met and provided helpful recommendations. The overall
            ambiance of the restaurant was pleasant, creating a comfortable
            dining atmosphere.
          </p>
        </li>
      </ol>
    </div>
  );
};

export default RestaurantReview;
