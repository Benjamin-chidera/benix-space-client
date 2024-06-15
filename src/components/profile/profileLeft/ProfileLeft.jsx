import React from "react";
import { LogoSearch } from "../../Home/profileSide/logoSearch/LogoSearch";
import { FollowersCard } from "../../Home/profileSide/followersCard/FollowersCard";
import { InfoCard } from "./infoCard/InfoCard";

export const ProfileLeft = () => {
  return (
    <main>
      <LogoSearch />
      <InfoCard />
      <FollowersCard />
    </main>
  );
};
