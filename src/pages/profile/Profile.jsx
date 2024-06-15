import React from "react";
import "./profile.css";
import "../home/home.css";
import { ProfileLeft } from "../../components/profile/profileLeft/ProfileLeft";
import { ProfileCard } from "../../components/Home/profileSide/profileCard/ProfileCard";
import { UploadPost } from "../../components/Home/postSide/uploadPost/UploadPost";
import { ProfileCenter } from "../../components/profile/profileCenter/ProfileCenter";
import { RightSide } from "../../components/Home/rightSide/RightSide";

const Profile = () => {
  return (
    <main className=" relative grid home gap-4 h-full">
      <ProfileLeft />
      <ProfileCenter />
      <RightSide />
    </main>
  );
};

export default Profile;
