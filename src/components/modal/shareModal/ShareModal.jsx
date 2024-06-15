import React from "react";
import { Modal } from "@mantine/core";
import { UploadPost } from "../../Home/postSide/uploadPost/UploadPost";

export const ShareModal = ({ opened, close }) => {
  return (
    <main>
      <Modal opened={opened} onClose={close} center size={"50rem"}>
        <UploadPost />
      </Modal>
    </main>
  );
};
