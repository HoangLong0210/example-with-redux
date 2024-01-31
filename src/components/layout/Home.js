import React from "react";

const Home = () => {
  return (
    <div className="max-w-[1000px] mx-auto">
      <h1 className="text-3xl font-bold flex mb-5 justify-center">
        HƯỚNG DẪN SỬ DỤNG ỨNG DỤNG
      </h1>
      <ol className="text-xl">
        <li className="my-3">
          Khi bấm vào ADD LINK sẽ chuyển đến trang của ADD LINK. Vui lòng nhập
          đường dẫn từ một trong ba MXH sau: Youtube, Instagram, Tiktok sau đó
          nhấn xác nhận để thêm mới đường dẫn vào danh sách đường dẫn.
        </li>
        <li className="my-3">
          Khi chọn vào một đường dẫn bất kỳ đã được thêm sẵn sẽ được chuyển đến
          trang hiển thị nội dung của đường dẫn.
        </li>
        <li className="my-3">
          Khi bấm vào LIST LINK sẽ chuyển đến trang của LIST LINK. Trang hiển
          thị các đường dẫn hợp lệ đã được thêm vào trước đó.
        </li>
        <li className="my-3">
          Khi bấm vào LINK DETAIL sẽ chuyển đến trang của LINK DETAIL. Nếu không
          chọn bất kỳ đường dẫn nào trang sẽ hiển thị VUI LÒNG CHỌN ĐƯỜNG DẪN
          TRƯỚC KHI XEM CHI TIẾT!.
        </li>
      </ol>
    </div>
  );
};

export default Home;
