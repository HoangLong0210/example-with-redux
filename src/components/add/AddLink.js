/* eslint-disable array-callback-return */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addLink } from "../../redux/linkSlice";

const AddLink = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  let today = new Date();
  let dateNow =
    today.getDate() +
    "/" +
    today.getMonth() +
    1 +
    "/" +
    today.getFullYear() +
    " " +
    today.getHours() +
    ":" +
    today.getMinutes();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateLink(value)) {
      dispatch(addLink({ linkSocial: value, time: dateNow }));
      alert("Thêm thành công");
      setValue("");
    } else {
      alert("Link không hợp lệ!");
    }
  };
  const validateLink = (value) => {
    return (
      value.startsWith("https://www.youtube.com/") ||
      value.startsWith("https://www.tiktok.com/") ||
      value.startsWith("https://www.instagram.com/reel/")
    );
  };

  return (
    <form className="max-w-[500px] mx-auto my-10" onSubmit={handleSubmit}>
      <span className="text-2xl">Nhập link:</span>
      <input
        type="text"
        placeholder="Nhập link từ một trong 3 MXH: Youtube, Tiktok, Instagram"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        className="p-4 transition-all bg-white border border-gray-100 rounded-lg outline-none w-[500px] focus:border-blue-500"
      />
      <button
        type="submit"
        className="w-[150px] p-3 mt-5 font-semibold text-white bg-blue-500 rounded-lg"
      >
        Xác nhận
      </button>
    </form>
  );
};

export default AddLink;
