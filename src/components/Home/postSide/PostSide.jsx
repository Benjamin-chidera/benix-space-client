import React from "react";
import { UploadPost } from "./uploadPost/UploadPost";
import { Post } from "./post/Post";

export const PostSide = () => {
  return (
    <main className=" overflow-y-scroll">
      <UploadPost />
      <Post />
    </main>
  );
};
