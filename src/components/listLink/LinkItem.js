import React from "react";
import { Link } from "react-router-dom";

const LinkItem = ({ linkSocial, time, id }) => {
  return (
    <div className="flex items-center">
      <div className="p-2 m-2 border rounded border-slate-200">
        <Link to={`/${id}`}>{linkSocial}</Link>
      </div>
      <span className="p-2 m-2 border rounded border-slate-200">{time}</span>
    </div>
  );
};

export default LinkItem;
