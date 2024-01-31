import React from "react";
import { useSelector } from "react-redux";
import LinkItem from "./LinkItem";

const ListLink = () => {
  const links = useSelector((state) => state.link);
  const newLinks = [...links].reverse();
  return (
    <div>
      <h1 className="text-3xl font-bold flex mb-5 justify-center">
        DANH SÁCH ĐƯỜNG DẪN ĐÃ ĐƯỢC THÊM
      </h1>
      <ul className="max-w-[700px] mx-auto text-xl">
        {newLinks?.map((link) => (
          <LinkItem
            key={link.id}
            id={link.id}
            linkSocial={link.linkSocial}
            time={link.time}
          />
        ))}
      </ul>{" "}
    </div>
  );
};

export default ListLink;
