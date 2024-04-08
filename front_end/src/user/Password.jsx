import React from "react";
import Sidebar from "./components/Sidebar";

import { Card } from "flowbite-react";

export default function Password() {
  const oldPW = React.useRef("");
  const newPW = React.useRef("");
  const confirmPW = React.useRef("");

  function changePassword() {
    return () => {
      const data = {
        oldPW: oldPW.current.value,
        newPW: newPW.current.value,
        confirmPW: confirmPW.current.value,
      };
      console.log(data);
    };
  }

  return (
    <div className="flex py-32 pl-24">
      <Sidebar></Sidebar>
      <Card className="w-3/6 px-8">
        <p className="text-xl">Đổi mật khẩu</p>
        <p>
          Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu cho người khác
        </p>
        <hr className="my-2 h-px border-t-0 bg-neutral-200" />
        <div className="grid grid-cols-4 gap-4">
          <label
            htmlFor="old"
            className="col-span-1  justify-self-end pt-2 text-gray-500"
          >
            Mật khẩu hiện tại
          </label>
          <input
            id="old"
            type="password"
            className="pl-4 ml-4 rounded-md col-span-3 focus:ring-0 focus:outline-none py-2 border border-gray-500 focus:border-red-500"
          ></input>
          <label
            htmlFor="new"
            className="col-span-1  justify-self-end pt-2 text-gray-500"
          >
            Mật khẩu mới
          </label>
          <input
            id="new"
            type="password"
            className="pl-4 ml-4 rounded-md col-span-3 focus:ring-0 focus:outline-none py-2 border border-gray-500 focus:border-red-500"
          ></input>
          <label
            htmlFor="confirm"
            className="col-span-1 justify-self-end pt-2 text-gray-500"
          >
            Xác nhận mật khẩu
          </label>
          <input
            id="confirm"
            type="password"
            className="pl-4 ml-4 rounded-md col-span-3 focus:ring-0 focus:outline-none py-2 border border-gray-500 focus:border-red-500"
          ></input>
          <div className="col-span-1"></div>
          <button onClick={changePassword()} className="bg-red-500 text-white hover:bg-red-400 ml-4 py-2 px-6 rounded-sm">
            Lưu
          </button>
        </div>
      </Card>
    </div>
  );
}
