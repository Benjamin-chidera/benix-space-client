import React from "react";
import cover from "../../../../assets/cover.jpg";
import profileImg from "../../../../assets/profileImg.jpg";

export const ProfileCard = () => {
  const profilePage = true;

  return (
    <main className=" rounded-xl shadow-lg mt-5 mb-3 pb-5">
      <div className=" relative">
        <img
          src={cover}
          alt="cover-img"
          className=" rounded-tl-xl rounded-tr-xl w-full"
        />
        <img
          src={profileImg}
          alt="profile-img"
          className="w-20 h-20 rounded-full absolute -bottom-9 left-1/2 transform -translate-x-1/2"
        />
      </div>

      <div className=" mt-10 text-center pb-4">
        <h2 className="font-bold">Benjamin Chidera</h2>
        <p className=" text-gray-500 font-medium">Senior Fullstack Developer</p>
      </div>

      <div className="mb-2 bg-gray-300 h-[0.4px] w-[90%] mx-auto" />

      <section className="flex justify-between w-[70%] mx-auto">
        <div>
          <p className="font-bold text-center">6,886</p>
          <p className=" text-xs">Followers</p>
        </div>

        <div className=" bg-gray-300 h-11 w-[1.5px]" />

        <div>
          <p className="font-bold text-center">1</p>
          <p className=" text-xs text-gray-500">Followers</p>
        </div>

        {profilePage && (
          <>
            <div className=" bg-gray-300 h-11 w-[1.5px]" />
            {/* <div></div> */}
            <div className=" flex flex-col text-center">
              <span className="font-bold text-center">3</span>
              <span className=" text-xs text-gray-500">Posts</span>
            </div>
          </>
        )}
      </section>

      <div className="mb-3 bg-gray-300 h-[0.4px] w-[90%] mx-auto mt-2" />
      {profilePage ? null : (
        <div className=" text-center">
          <a
            href="#"
            className=" text-sm text-center font-bold text-orange-400"
          >
            My Profile
          </a>
        </div>
      )}
    </main>
  );
};
