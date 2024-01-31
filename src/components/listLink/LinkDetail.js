import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const LinkDetail = () => {
  const { id } = useParams();
  const links = useSelector((state) => state.link);
  const linkRender = links?.find((item) => item.id === id);
  const check = linkRender?.linkSocial;

  function checkLink(check) {
    if (check?.startsWith("https://www.youtube.com/")) {
      return (
        <iframe
          width="500"
          height="500"
          src={check}
          title="Embedded Youtube"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
          className="rounded-lg mx-auto"
        ></iframe>
      );
    } else if (check?.startsWith("https://www.instagram.com/")) {
      return (
        <iframe
          src={check?.split("?")[0] + "embed?show_text=false"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
          title="Embedded Instagram"
          width={"100%"}
          className="h-[600px] max-[480px]:h-[430px] w-[310px] max-[480px]:w-full rounded-lg mx-auto"
          loading="lazy"
          scrolling="no"
        ></iframe>
      );
    } else
      return (
        <div className="font-bold text-5xl justify-center flex text-red-500">
          TIKTOK CHƯA THỂ HIỂN THỊ VÌ LỖI!
        </div>
      );
  }

  return (
    <div>
      {linkRender ? (
        checkLink(check)
      ) : (
        <h2 className="font-bold text-5xl justify-center flex text-red-500">
          VUI LÒNG CHỌN ĐƯỜNG DẪN TRƯỚC KHI XEM CHI TIẾT!
        </h2>
      )}
    </div>
  );
};

export default LinkDetail;
