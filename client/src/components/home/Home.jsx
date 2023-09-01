import Googlemap from "../googlemap/GoogleMap";
import OurChef from "../ourChefs/OurChef";
import OurFood from "../ourFood/OurFood";
import Ourfounder from "../ourfounder/Ourfounder";
import RestaurantReview from "../review/Review";
import Banner from "./banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner />
      <OurFood />
      <OurChef />

      <Googlemap />
      <Ourfounder />
      <RestaurantReview />
    </div>
  );
};
export default Home;
