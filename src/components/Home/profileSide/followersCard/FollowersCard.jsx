import React from "react";
import "./followersCard.css";
import "./../../../../App.css"
import one from "../../../../assets/img1.png";
import two from "../../../../assets/img2.png";
import three from "../../../../assets/img3.png";
import four from "../../../../assets/img4.jpg";

const followers = [
  {
    img: one,
    username: "Andrew Thomas",
    tag: "@AndrewThomas",
  },
  {
    img: one,
    username: "Andrew Thomas",
    tag: "@AndrewThomas",
  },
  {
    img: one,
    username: "Andrew Thomas",
    tag: "@AndrewThomas",
  },
  {
    img: one,
    username: "Andrew Thomas",
    tag: "@AndrewThomas",
  },
];

export const FollowersCard = () => {
  return (
    <main className=" my-7">
      <h3 className="font-semibold">Who is following you</h3>

      <div className=" space-y-4">
        {followers.map((f, i) => (
          <div key={i} className="flex items-center justify-between">
            <div className="flex items-center gap-3 ">
              <img src={f.img} alt={f.username} className="w-14 h-14 rounded-full"/>
              <div>
                <h4 className=" text-sm font-bold">{f.username}</h4>
                <p className="text-xs">{f.tag}</p>
              </div>
            </div>
            <button className="btn px-3 text-sm py-1.5">Follow</button>
          </div>
        ))}
      </div>

      <div className=" my-5 text-center font-semibold text-sm text-orange-400">
        <button>Show more</button>
      </div>
    </main>
  );
};
