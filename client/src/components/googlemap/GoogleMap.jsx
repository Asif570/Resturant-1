const Googlemap = () => {
  return (
    <div className="w-full my-10">
      <h3 className="text-center mb-5 text-xl md:text-3xl text-white underline">
        Our Location
      </h3>
      <div>
        <iframe
          width="100%"
          height="400"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Beijing+(My%20Busin%20%20%20%20D%C7%90ng%20T%C3%A0i%20F%C4%93ngess%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.maps.ie/distance-area-calculator.html">
            measure acres/hectares on map
          </a>
        </iframe>
      </div>
    </div>
  );
};

export default Googlemap;
