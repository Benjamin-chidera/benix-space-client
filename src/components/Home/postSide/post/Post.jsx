import React from "react";
import img1 from "../../../../assets/postpic1.jpg";
import img2 from "../../../../assets/postpic2.jpg";
import img3 from "../../../../assets/postpic3.jpg";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import { BiMessageDetail } from "react-icons/bi";
import { IoShareSocialOutline } from "react-icons/io5";

const posts = [
  {
    img: img1,
    name: "Chidera",
    description: "Happy Birthday To Me",
    likes: 2300,
    liked: true,
  },
  {
    img: img1,
    name: "Chidera",
    description: "Happy Birthday To Me",
    likes: 2300,
    liked: false,
  },
  {
    img: img1,
    name: "Chidera",
    description: "Happy Birthday To Me",
    likes: 2300,
    liked: true,
  },
];

export const Post = () => {
  return (
    <main className=" flex flex-col gap-8 mt-5 rounded-xl">
      {posts.map((p, i) => (
        <div key={i}>
          <img src={p.img} alt="posted-img" className="rounded-xl" />

          <section className="flex items-center gap-4 py-3">
            <div>
              {p.liked ? (
                <button>
                  <IoIosHeart size={24} color="orange" />
                </button>
              ) : (
                <button>
                  <IoIosHeartEmpty size={24} color="orange" />
                </button>
              )}
            </div>

            <div>
              <button>
                <BiMessageDetail size={24} />
              </button>
            </div>

            <div>
              <button>
                <IoShareSocialOutline size={24}/>
              </button>
            </div>
          </section>

          <div className="text-sm text-gray-600">
            <p>{p.likes} likes</p>
          </div>

          <div className="flex items-center gap-2">
            <p className=" font-bold">{p.name}</p>
            <p>{p.description}</p>
          </div>
        </div>
      ))}
    </main>
  );
};
