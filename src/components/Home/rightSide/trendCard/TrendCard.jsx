import React from "react";
import "./../../../../App";
import { ShareModal } from "../../../modal/shareModal/ShareModal";
import { useDisclosure } from "@mantine/hooks";

const trends = [
  {
    trend: "#Devs",
    shares: 97,
  },
  {
    trend: "#WebDevs",
    shares: 97,
  },
  {
    trend: "#Reactjs",
    shares: 97,
  },
  {
    trend: "#Reactjs",
    shares: 97,
  },
  {
    trend: "#Nextjs",
    shares: 97,
  },
  {
    trend: "#React Native",
    shares: 97,
  },
];
export const TrendCard = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <main className="mt-8 bg-white w-full p-5 rounded-xl">
      <section>
        <p className=" font-bold">Trend for you</p>
      </section>

      <section className=" space-y-3 mt-7">
        {trends.map((t, i) => {
          return (
            <section key={i}>
              <p className="text-lg font-bold">{t.trend}</p>
              <p className="text-sm">{t.shares}k shares</p>
            </section>
          );
        })}
      </section>

      <div className="mt-10 text-center">
        <button className="btn w-full py-3 font-medium" onClick={open}>Share</button>

        <ShareModal opened={opened} open={open} close={close} />
      </div>
    </main>
  );
};
