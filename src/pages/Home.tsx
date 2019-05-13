import React from "react";

import Counter from "../components/Counter";

const Home = () => (
  <div>
    <h2 className="text-center text-lg font-normal leading-normal mx-auto my-6 underline">
      This is a counter to introduce some logic
    </h2>
    <Counter initialValue={10} />
  </div>
);

export default Home;
