import React from "react";
import { ProfileCard } from "../../Home/profileSide/profileCard/ProfileCard";
import { UploadPost } from "../../Home/postSide/uploadPost/UploadPost";
import { Post } from "../../Home/postSide/post/Post";

export const ProfileCenter = () => {
  return (
    <main className=" overflow-auto">
      <ProfileCard />
      <UploadPost />
      <Post />
    </main>
  );
};
