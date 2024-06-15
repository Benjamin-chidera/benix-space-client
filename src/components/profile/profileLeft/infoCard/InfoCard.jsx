import React from "react";
import { FaPencilAlt } from "react-icons/fa";
import { ProfileModal } from "../../../modal/profileModal/ProfileModal";
import { useDisclosure } from "@mantine/hooks";

export const InfoCard = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <main className="my-7 bg-white py-3 px-3 flex- rounded-xl">
      <div className=" flex justify-between items-center flex-[3]">
        <h4>Your Info</h4>
        <button onClick={open}>
          <FaPencilAlt />
        </button>
      </div>

      <ProfileModal opened={opened} open={open} close={close} />

      <section className="flex flex-col gap-3 mt-5">
        <div>
          <p>
            <b>Status</b> <span>in a Relationship</span>
          </p>
        </div>

        <div>
          <p>
            <b> Lives in </b>
            <span>Lagos Nigeria</span>
          </p>
        </div>

        <div>
          <p>
            <b>Works at</b> <span>Microsoft</span>
          </p>
        </div>
      </section>

      <div className="mt-32 flex items-end justify-end">
        <button className="btn px-5 py-2">Log Out</button>
      </div>
    </main>
  );
};
