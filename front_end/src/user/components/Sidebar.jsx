import React from "react";
import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

export default function Sidebar() {
  return (
    <div className="flex flex-col pl-32 pr-16 pt-4">
      <p className="text-xl font-semibold text-center">Wolhaiksong</p>
      <hr className="my-2 h-px border-t-0 bg-neutral-200" />
      <span className="inline-flex">
        <CgProfile className="text-2xl text-blue-500 mt-1"/>
        <p className="pl-2 text-xl">Tài khoản của tôi</p>
      </span>
      <div className="pl-7">
          <NavLink to="/user/account/profile" className="link">
            Hồ sơ
          </NavLink>
          <NavLink to="/user/account/payment" className="link">
            Ngân hàng
          </NavLink>
          <NavLink to="/user/account/address" className="link">
            Địa chỉ
          </NavLink>
          <NavLink to="/user/account/password" className="link">
            Đổi mật khẩu
          </NavLink>
          <NavLink to="/user/account/privacy" className="link">
            Thiết lập
          </NavLink>
      </div>
    </div>
  );
}
