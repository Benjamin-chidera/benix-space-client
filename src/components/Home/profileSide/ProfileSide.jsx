import React from "react";
import "./profileSide.css";
import { LogoSearch } from "./logoSearch/LogoSearch";
import { ProfileCard } from "./profileCard/ProfileCard";
import { FollowersCard } from "./followersCard/FollowersCard";

export const ProfileSide = () => {
  return (
    <main className="profileSide overflow-auto">
      <LogoSearch />
      <ProfileCard />
      <FollowersCard/>
    </main>
  );
};
