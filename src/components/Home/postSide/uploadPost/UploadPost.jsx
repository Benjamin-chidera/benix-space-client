import React, { useState, useRef } from "react";
import "../../profileSide/logoSearch/logoSearch.css";
import img from "../../../../assets/profileImg.jpg";
import { HiOutlinePhotograph, HiOutlineLocationMarker } from "react-icons/hi";
import { FiPlayCircle } from "react-icons/fi";
import { SlCalender } from "react-icons/sl";
import { IoMdClose } from "react-icons/io";

export const UploadPost = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();

  const handleImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];

      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };

  console.log(image);

  return (
    <main className=" bg-white pt-5 pb-[5px] px-5 rounded-xl">
      <section className="flex items-center gap-4">
        <img src={img} alt="profile-img" className="w-10 h-10 rounded-full" />
        <input
          type="text"
          className=" w-full px-3 search rounded-xl h-10 outline-none"
          placeholder={`What's happening?`}
        />
      </section>

      <section className=" flex items-center gap-5 my-5 ms-20 justify-between me-5">
        <div
          className="flex items-center gap-0.5 cursor-pointer"
          style={{ color: "var(--photo)" }}
          onClick={() => imageRef.current.click()}
        >
          <HiOutlinePhotograph size={24} />
          <p className="text-sm font-medium">Photos</p>
        </div>
        <div
          className="flex items-center gap-0.5 cursor-pointer"
          style={{ color: "var(--video)" }}
        >
          <FiPlayCircle size={24} />
          <p className="text-sm font-medium">Video</p>
        </div>
        <div
          className="flex items-center gap-0.5 cursor-pointer"
          style={{ color: "var(--location)" }}
        >
          <HiOutlineLocationMarker size={24} />
          <p className="text-sm font-medium">Location</p>
        </div>
        <div
          className="flex items-center gap-0.5 cursor-pointer"
          style={{ color: "var(--schedule)" }}
        >
          <SlCalender size={24} />
          <p className="text-sm font-medium">Schedule</p>
        </div>

        <button className="btn py-2 px-5">Share</button>

        <div className=" hidden">
          <input
            type="file"
            name="myImage"
            ref={imageRef}
            onChange={handleImage}
          />
        </div>
      </section>
      <div className="relative">
        {image && <img src={image.image} className="w-40 h-40 relative" />}
        {image && (
          <button onClick={() => setImage(null)} className="absolute -top-2 -left-2 bg-red-500 rounded-full">
            <IoMdClose size={24} color="white"/>
          </button>
        )}
      </div>
    </main>
  );
};
