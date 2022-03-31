import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/system";
import ProductInformation from "./ProductInformation";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
//   bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const Upload = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <button
        onClick={handleOpen}
        className="bg-gray-200  border mt-3 h-32 w-32"
      >
        <img
          src={process.env.PUBLIC_URL + "../images/upload.png"}
          alt="upload"
          className="mr-0 sm:mr-3 mt-3 w-full  object-contain "
        />
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="">
          {/* <button className="px-8 py-2 rounded-3xl bg-gray-500 text-white">Choose from existing products</button>
          <button className="px-8 py-2 rounded-3xl bg-gray-500 text-white mt-3 ml-6">Add your own product</button> */}
          <ProductInformation/>
        </Box>
      </Modal>
    </div>
  );
};

export default Upload;
