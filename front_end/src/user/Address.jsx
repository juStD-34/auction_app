import Sidebar from "./components/Sidebar";
import NavbarUser from "../shared/Navbar";
import { Card } from "flowbite-react";

import { GoPlus } from "react-icons/go";

export default function Address() {
  const user = [
    {
      name: "Lê Bá KevilLe",
      phone: "(+84) 0364865875",
      address: "Số 7 Lạc Long Quân, Phường Mỹ Đình 2, Quận Ba Đình, Hà Nội",
      default: true,
    },
    {
      name: "Trần Tuấn Nichan",
      phone: "(+84) 012346578",
      address: "Số 7 Chân Cầu, Phường Ăn xin, Quận Biến Thái, Nhật Bản",
      default: false,
    },
  ];

  return (
    <div>
      <NavbarUser></NavbarUser>
      <div className="flex py-8 pl-24">
        <Sidebar></Sidebar>
        <Card className="w-3/6 px-8">
          <div className="flex">
            <p className="text-xl">Địa chỉ của tôi</p>
            <button className="ml-auto px-2 py-1 text-white bg-red-500 rounded-sm">
              <GoPlus className="inline-block" />
              Thêm Địa Chỉ Mới
            </button>
          </div>
          <hr className="my-2 h-px border-t-0 bg-neutral-200" />
          {user.map((item, index) => (
            <>
              <div key={index} className="grid grid-cols-2 mb-2">
                <div className="col-span-1 flex">
                  <p className="border-r border-gray-500 pr-4">{item.name}</p>
                  <p className="text-sm pl-4 pt-0.5 text-gray-500">{item.phone}</p>
                </div>
                <p className="text-blue-500 cursor-pointer text-md justify-self-end">
                  Cập nhật
                </p>
                <div>
                  <p>{item.address}</p>
                </div>
                <button className="border border-gray-500 p-2 mt-2 mb-4 text-sm justify-self-end">
                  Thiết lập mặc định
                </button>
                {item.default ? (
                  <p className="border max-w-20 px-2 text-center text-sm text-red-500 border-red-500">
                    Mặc định
                  </p>
                ) : null}
              </div>
              <hr className="my-2 h-px border-t-0 bg-neutral-200" />
            </>
          ))}
        </Card>
      </div>
    </div>
  );
}
