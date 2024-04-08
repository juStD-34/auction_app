import Sidebar from "./components/Sidebar";

import { Card } from "flowbite-react";
import Mb from "./assets/mb.png";

import { GoPlus } from "react-icons/go";

export default function Payment() {
  return (
    <div className="flex py-32 pl-24">
      <Sidebar></Sidebar>
      <Card className="w-3/6 px-4">
        <div className="flex">
          <p className="text-xl my--4">Tài khoản ngân hàng của tôi</p>
          <button className="ml-auto px-2 py-1 text-white bg-red-500 rounded-sm">
            <GoPlus className="inline-block" />
            Thêm Tài Khoản Ngân Hàng
          </button>
        </div>
        <hr className="my-2 h-px border-t-0 bg-neutral-200" />
        <div className="flex">
          <img src={Mb} alt="Mb bank" className="w-14 h-14 mt-4" />
          <div className="flex-col pl-4 pb-4">
            <div className="flex pb-2">
              <p>MB-BANK: MB NGÂN HÀNG QUÂN ĐỘI</p>
              <p className="text-green-400 pl-4">Đã duyệt</p>
              <p className="bg-green-400 text-white mx-4 px-2 rounded-sm">
                Mặc định
              </p>
            </div>
            <p>Họ và tên: Ri Đỗ number1</p>
            <p>Số tài khoản: 1900100có1tôngvàomép1dépvàomồm</p>
            <div className="flex pt-2">
              <p className="text-md underline mt-1 cursor-pointer" onClick={console.log()}>Xoá tài khoản</p>
              <button className="ml-4 px-2 py-1 text-white bg-red-500 rounded-sm ">Thiết lập mặc định</button>
            </div>
          </div>
        </div>
        <hr className="my-2 h-px border-t-0 bg-neutral-200" />
        <div className="flex">
          <img src={Mb} alt="Mb bank" className="w-14 h-14 mt-4" />
          <div className="flex-col pl-4 pb-32">
            <div className="flex pb-2">
              <p>MB-BANK: MB NGÂN HÀNG QUÂN ĐỘI</p>
              <p className="text-green-400 pl-4">Đã duyệt</p>
              <p className="bg-green-400 text-white mx-4 px-2 rounded-sm">
                Mặc định
              </p>
            </div>
            <p>Họ và tên: Ri Đỗ number1</p>
            <p>Số tài khoản: 1900100có1tôngvàomép1dépvàomồm</p>
            <div className="flex pt-2">
              <p className="text-md underline mt-1 cursor-pointer" onClick={console.log()}>Xoá tài khoản</p>
              <button className="ml-4 px-2 py-1 text-white bg-red-500 rounded-sm ">Thiết lập mặc định</button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
