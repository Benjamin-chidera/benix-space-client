import React from "react";
import "./home.css";
import { ProfileSide } from "../../components/Home/profileSide/ProfileSide";
import { PostSide } from "../../components/Home/postSide/PostSide";
import { RightSide } from "../../components/Home/rightSide/RightSide";

const Home = () => {
  return (
    <main className=" relative grid home gap-4 h-full">
      <ProfileSide />
      <PostSide />
      <RightSide />
    </main>
  );
};

export default Home;
