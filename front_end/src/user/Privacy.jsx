import Sidebar from "./components/Sidebar";

import { Card } from "flowbite-react";

export default function Privacy() {

  return (
    <div className="flex py-32 pl-24">
      <Sidebar></Sidebar>
      <Card className="w-3/6 px-8">
          <p className="text-xl">Cài đặt bảo mật</p>
        <hr className="my-2 h-px border-t-0 bg-neutral-200" />
        <div className="grid grid-cols-2 pb-32 h-72">
          <p>Yêu cầu xoá tài khoản</p>
          <button className="bg-red-500 text-white px-8 py-2 mb-32 text-sm justify-self-end">
            Xoá bỏ
          </button>
        </div>
      </Card>
    </div>
  );
}
