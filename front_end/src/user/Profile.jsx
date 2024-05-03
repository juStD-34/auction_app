import React from "react";

import Sidebar from "./components/Sidebar";
import NavbarUser from "../shared/Navbar";

import { Card } from "flowbite-react";

export default function Profile() {
  const nameRef = React.useRef("Có anh ri đỗ vượt lên đứng đầu");
  const emailRef = React.useRef("Sa tị chỉ nhận nỗi đau");
  const phoneRef = React.useRef("Nhìn anh ôm cúp đỉnh cao đời người");
  const dobRef = React.useRef("2000-01-01");

  //Gui request edit profile
  function EditProfile() {
    return () => {
      const data = {
        name: nameRef.current.value,
        email: emailRef.current.value,
        phone: phoneRef.current.value,
        dob: dobRef.current.value,
      };
      console.log(data);
    };
  }

  return (
    <div>
      <NavbarUser></NavbarUser>
      <div className="flex py-8 pl-24">
        <Sidebar></Sidebar>
        <Card className="w-3/6 px-8">
          <p className="text-xl">Hồ sơ của tôi</p>
          <p>Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
          <hr className="my-2 h-px border-t-0 bg-neutral-200" />
          <div className="grid grid-cols-4 gap-4">
            <label
              htmlFor="username"
              className="col-span-1  justify-self-end text-gray-500"
            >
              Tên đăng nhập
            </label>
            <p id="username" className="col-span-3 ml-4">
              Cả bồ hò hét gầm vang,
            </p>
            <label
              htmlFor="name"
              className="col-span-1  justify-self-end pt-2 text-gray-500"
            >
              Tên
            </label>
            <input
              id="name"
              ref={nameRef}
              defaultValue="Có anh ri đỗ vượt lên đứng đầu"
              className="pl-4 ml-4 rounded-md col-span-3 focus:ring-0 focus:outline-none py-2 border border-gray-500 focus:border-red-500"
            ></input>
            <label
              htmlFor="email"
              className="col-span-1  justify-self-end pt-2 text-gray-500"
            >
              Email
            </label>
            <input
              id="email"
              ref={emailRef}
              defaultValue="Sa tị chỉ nhận nỗi đau"
              className="pl-4 ml-4 rounded-md col-span-3 focus:ring-0 focus:outline-none py-2 border border-gray-500 focus:border-red-500"
            ></input>
            <label
              htmlFor="phone"
              className="col-span-1  justify-self-end pt-2 text-gray-500"
            >
              Số điện thoại
            </label>
            <input
              id="phone"
              ref={phoneRef}
              defaultValue="Nhìn anh ôm cúp đỉnh cao đời người"
              className="pl-4 ml-4 rounded-md col-span-3 focus:ring-0 focus:outline-none py-2 border border-gray-500 focus:border-red-500"
            ></input>
            <label
              htmlFor="dob"
              className="col-span-1  justify-self-end pt-2 text-gray-500"
            >
              Ngày sinh
            </label>
            <input
              id="dob"
              type="date"
              ref={dobRef}
              defaultValue="2000-01-01"
              className="pl-4 ml-4 rounded-md col-span-3 focus:ring-0 focus:border focus:border-red-500"
            />
            <div className="col-span-1"></div>
            <div>
              <button
                onClick={EditProfile()}
                className="bg-red-500 text-white hover:bg-red-400 ml-4 py-2 px-6 rounded-sm"
              >
                Lưu
              </button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
