import React from "react";
import { RiHomeFill } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { FaSnapchatGhost } from "react-icons/fa";
import { BiMessageDetail } from "react-icons/bi";
import { TrendCard } from "./trendCard/TrendCard";

export const RightSide = () => {
  return (
    <main className=" mt-4">
      <section className="flex items-center justify-between">
        <div>
          <button>
            <RiHomeFill size={24} color="orange" />
          </button>
        </div>
        <div>
          <button>
            <IoSettingsOutline size={24} />
          </button>
        </div>
        <div>
          <FaSnapchatGhost size={24} />
        </div>
        <div>
          <button>
            <BiMessageDetail size={24} />
          </button>
        </div>
      </section>

      <div>
        <TrendCard />
      </div>
    </main>
  );
};
