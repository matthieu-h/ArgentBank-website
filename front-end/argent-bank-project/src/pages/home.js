import React from "react";
import Banner from "../components/Banner";
import FeaturesItem from "../components/FeaturesItem";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="features">
        <h2 className="sr-only">Features</h2>
        <FeaturesItem
          src="./img/icon-chat.png"
          alt="Chat Icon"
          h3="You are our #1 priority"
          p="Need to talk to a representative? You can get in touch through our 24/7
          chat or through a phone call in less than 5 minutes."
        />
        <FeaturesItem
          src="./img/icon-money.png"
          alt="Money Icon"
          h3="More savings means higher rates"
          p="The more you save with us, the higher your interest rate will be!"
        />
        <FeaturesItem
          src="./img/icon-security.png"
          alt="Security Icon"
          h3="Security you can trust"
          p="We use top of the line encryption to make sure your data and money is
          always safe."
        />
      </div>
    </div>
  );
};

export default Home;
