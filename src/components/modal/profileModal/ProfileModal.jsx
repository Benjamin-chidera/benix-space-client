import React, { useRef, useState } from "react";
import { Modal } from "@mantine/core";

export const ProfileModal = ({ opened, close }) => {
  const [uploadImage, setUploadImage] = useState({
    coverImage: null,
    image: null,
  });

  const coverImageRef = useRef();
  const profileImageRef = useRef();

  const handleUpdateImage = (e, type) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setUploadImage((prev) => ({
        ...prev,
        [type]: URL.createObjectURL(img),
      }));
    }
  };

  return (
    <>
      <Modal opened={opened} onClose={close} top>
        <form>
          <h3 className="font-bold text-center text-xl">Your Info</h3>

          <div className="mt-2">
            <p className="text-xs text-center mb-5">
              Profile Image and Cover Image
            </p>

            <div className="relative">
              {uploadImage.coverImage && (
                <img
                  src={uploadImage.coverImage}
                  alt="cover"
                  className="w-full h-32 object-cover rounded-xl"
                  onClick={() => coverImageRef.current.click()}
                />
              )}
              <input
                type="file"
                ref={coverImageRef}
                onChange={(e) => handleUpdateImage(e, "coverImage")}
                className="hidden"
              />
              <input
                type="file"
                ref={profileImageRef}
                onChange={(e) => handleUpdateImage(e, "image")}
                className="hidden"
              />
              {uploadImage.image && (
                <img
                  src={uploadImage.image}
                  alt="profile"
                  className=" h-24 w-24 object-cover  rounded-full px-13 outline-none absolute -bottom-12 left-1/2 transform -translate-x-1/2"
                />
              )}
            {!uploadImage.coverImage &&  <button
                type="button"
                onClick={() => coverImageRef.current.click()}
                className={" w-full h-32 bg-gray-200 bg-opacity-50 flex items-center justify-center text-sm font-medium text-gray-700"}
              >
                Change Cover Image
              </button>}
             {!uploadImage.image && <button
                type="button"
                onClick={() => profileImageRef.current.click()}
                className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-gray-200 bg-opacity-50 flex items-center justify-center font-medium text-gray-700 rounded-full text-xs"
              >
                Change Profile Image
              </button>}
            </div>
          </div>

          <div className="flex items-center gap-5 mt-14">
            <input
              type="text"
              placeholder="First Name"
              className="bg-gray-200 h-12 w-full px-3 rounded-xl outline-none"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="bg-gray-200 h-12 w-full px-3 rounded-xl outline-none"
            />
          </div>

          <div className="mt-2">
            <input
              type="text"
              placeholder="Works at"
              className="bg-gray-200 h-12 w-full px-3 rounded-xl outline-none"
            />
          </div>

          <div className="flex items-center gap-5 mt-2">
            <input
              type="text"
              placeholder="Lives In"
              className="bg-gray-200 h-12 w-full px-3 rounded-xl outline-none"
            />
            <input
              type="text"
              placeholder="Country"
              className="bg-gray-200 h-12 w-full px-3 rounded-xl outline-none"
            />
          </div>

          <div className="mt-2">
            <input
              type="text"
              placeholder="Relationship status"
              className="bg-gray-200 h-12 w-full px-3 rounded-xl outline-none"
            />
          </div>

          <button className="btn mt-3 w-full py-3">Update</button>
        </form>
      </Modal>
    </>
  );
};
