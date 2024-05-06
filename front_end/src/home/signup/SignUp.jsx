//Đăng ký tài khoản mới
import React, { useState, useCallback, useRef } from "react";

import NavigationBar from "../components/Navbar";
import LoginModal from "../login/LoginModal";

import { FaEye, FaEyeSlash } from "react-icons/fa";

import { Button, Card, Label, TextInput, Modal, Select } from "flowbite-react";
import axios from "axios";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [loginPopup, setLoginPopup] = useState(false);
  const [openError, setopenError] = useState(false);

  const userLastNameRef = useRef("");
  const userRef = useRef("");
  const passwordRef = useRef("");
  const emailRef = useRef("");
  const phoneRef = useRef("");
  const dobRef = useRef("");
  const addressRef = useRef("");
  const cccdRef = useRef("");
  const noicapRef = useRef("");
  const ngaycapRef = useRef("");
  const stkRef = useRef("");
  const bankRef = useRef("");
  const ownerRef = useRef("");

  const [type, setType] = React.useState("");

  const handleTypeChange = (e) => {
    if(e.target.value === "buyer"){
      setType("BIDDER");
    } else {
      setType("SELLER");
    }
  };

  const toggleLoginPopup = () => setLoginPopup(!loginPopup);

  const formHandler = useCallback(
    () => (event) => {
      event.preventDefault();

      const data = {
        email: userRef.current?.value,
        password: passwordRef.current?.value,
        phone: phoneRef.current?.value,
        dob: dobRef.current?.value,
        address: addressRef.current?.value,
        cccd: cccdRef.current?.value,
        noicap: noicapRef.current?.value,
        ngaycap: ngaycapRef.current?.value,
        stk: stkRef.current?.value,
        bank: bankRef.current?.value,
        owner: ownerRef.current?.value,

        type: type,
      };
      setopenError(true);

      console.log(data);
    },
    [type]
  );

  const handleSignup = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3002/signup", {
      email: userRef.current?.value,
      password: passwordRef.current?.value,
      fullName: userLastNameRef.current?.value,
      phoneNumber: phoneRef.current?.value,
      address: addressRef.current?.value,
      role: type
    }).then((response) => {
      //   if(response.data.message !== "Incorrect password or email") {
      //     setopenError(false)
      //     setLogin("Login")
      //     setUserName(response.data.user.fullName)
      //     console.log(getUserName())
      //     console.log(getLogin());
      //   } else {
      //     setopenError(true)
      //     setLogin("Logout")
      //     console.log(getLogin());
      //   }
      // }
      console.log(response);
    })
  }

  return (
    <>
      <div className={loginPopup ? "blur-sm " : ""}>
        <NavigationBar
          loginPopup={loginPopup}
          toggleLoginPopup={toggleLoginPopup}
        />
        <div className="justify-center px-48 py-20">
          <Card>
            <h1 className="text-4xl font-bold text-center mt-4">
              Đăng ký tài khoản
            </h1>
            <div className="flex justify-center">
              <p className="text-center text-2xl inline-block">
                Bạn đã có tài khoản?
              </p>
              <p
                onClick={toggleLoginPopup}
                className="hover:text-red-600 inline-block cursor-pointer text-2xl pl-2 font-semibold"
              >
                Đăng Nhập Ngay
              </p>
            </div>
            {/* form đăng ký tài khoản */}
            <form className="grid grid-cols-6" onSubmit={formHandler()}>
              <legend className="col-span-6">Loại tài khoản</legend>

              {/* Loại tài khoản */}
              <div className="col-span-3">
                <input
                  type="radio"
                  id="buy"
                  name="account-type"
                  value="buyer"
                  className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500"
                  defaultChecked
                  onClick={handleTypeChange}
                />
                <Label htmlFor="buy" className="pl-2">
                  Người mua
                </Label>
              </div>
              <div className="col-span-3">
                <input
                  type="radio"
                  id="sell"
                  value="seller"
                  name="account-type"
                  className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500"
                  onClick={handleTypeChange}
                />
                <Label htmlFor="sell" className="pl-2">
                  Người bán
                </Label>
              </div>

              {/* Họ tên */}
              <div className="col-span-2 pt-6 pr-4">
                <TextInput
                  id="ho"
                  type="text"
                  autoComplete="off"
                  placeholder="HỌ"
                />
              </div>
              <div className="col-span-2 pt-6 pr-4">
                <TextInput
                  id="tên đệm"
                  type="text"
                  autoComplete="off"
                  placeholder="TÊN ĐỆM"
                />
              </div>
              <div className="col-span-2 pt-6">
                <TextInput
                  id="ten"
                  type="text"
                  autoComplete="off"
                  placeholder="TÊN"
                  ref={userLastNameRef}
                />
              </div>

              {/* Tên đăng nhập */}
              <div className="col-span-6 pt-6">
                <TextInput
                  id="username"
                  type="text"
                  ref={userRef}
                  autoComplete="username"
                  placeholder="Tên đăng nhập"
                  required
                />
              </div>

              {/* Mật khẩu */}
              <div className="col-span-6 pt-6 relative">
                <TextInput
                  id="password"
                  autoComplete="new-password"
                  placeholder="Mật khẩu"
                  ref={passwordRef}
                  type={showPassword ? "text" : "password"}
                  required
                />
                {showPassword ? (
                  <FaEye
                    className="text-gray-500 absolute right-4 top-7 cursor-pointer "
                    onClick={() => setShowPassword(!showPassword)}
                  />
                ) : (
                  <FaEyeSlash
                    className="text-gray-500 absolute right-4 top-7 cursor-pointer "
                    onClick={() => setShowPassword(!showPassword)}
                  />
                )}
              </div>
              {/* Email, SĐT, ngày sinh*/}
              <div className="col-span-2 pt-6 pr-4">
                <TextInput
                  id="email"
                  type="email"
                  autoComplete="email"
                  ref={emailRef}
                  placeholder="Nhập địa chỉ email"
                  required
                />
              </div>
              <div className="col-span-2 pt-6 pr-4">
                <TextInput
                  id="phone"
                  type="tel"
                  autoComplete="tel"
                  ref={phoneRef}
                  placeholder="Số điện thoại"
                  required
                />
              </div>
              <div className="col-span-2 pt-6">
                <TextInput
                  id="dob"
                  type="text"
                  required
                  ref={dobRef}
                  placeholder="Ngày sinh"
                  onFocus={(e) => (e.target.type = "date")}
                />
              </div>

              {/* Địa chỉ */}
              <div className="col-span-6 pt-6">
                <TextInput
                  id="street-address"
                  autoComplete="street-address"
                  ref={addressRef}
                  type="text"
                  placeholder="Địa chỉ chi tiết"
                />
              </div>

              {/*CCCD*/}
              <div className="col-span-2 pt-6 pr-4">
                <TextInput
                  id="cccd"
                  type="text"
                  ref={cccdRef}
                  placeholder="CMND/CCCD"
                  required
                />
              </div>
              <div className="col-span-2 pt-6 pr-4">
                <TextInput
                  id="noicap"
                  type="text"
                  ref={noicapRef}
                  placeholder="Nơi cấp"
                  required
                />
              </div>
              <div className="col-span-2 pt-6">
                <TextInput
                  id="ngaycap"
                  type="text"
                  ref={ngaycapRef}
                  required
                  placeholder="Ngày cấp"
                  onFocus={(e) => (e.target.type = "date")}
                />
              </div>

              {/*Thanh toan bank*/}
              <div className="col-span-2 pt-6 pr-4">
                <TextInput
                  id="STK"
                  ref={stkRef}
                  type="text"
                  placeholder="Số tài khoản ngân hàng"
                  required
                />
              </div>
              <div className="col-span-2 pt-6 pr-4">
                <Select id="bank" title="Bank" required ref={bankRef}>
                  <option>TP Bank</option>
                  <option>MB Bank</option>
                  <option>Agribank</option>
                  <option>SHB</option>
                  <option>BIDV</option>
                </Select>
              </div>
              <div className="col-span-2 pt-6">
                <TextInput
                  id="owner"
                  type="text"
                  ref={ownerRef}
                  required
                  placeholder="Tên chủ tài khoản"
                  className="focus:ring-red-500 focus:border-red-500"
                />
              </div>

              {/* Confirm */}
              <div className="col-span-6 pt-6">
                <input
                  type="checkbox"
                  id="confirm"
                  className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500"
                  required
                ></input>
                <label htmlFor="confirm" className="pl-2">
                  Tôi cam kết tuân thủ Quyền và trách nhiệm của Người tham gia
                  đấu giá (Quy định theo tài sản đấu giá) , Chính sách bảo mật
                  thông tin khách hàng , Cơ chế giải quyết tranh chấp , Quy chế
                  hoạt động tại website đấu giá trực tuyến
                </label>
              </div>
              <button
                type="submit"
                className="col-span-6 transition-all duration-200 ease-in-out bg-red-700 border-red-700 border-2 text-white text-2xl py-3 px-5 rounded-md mt-4 block w-full hover:bg-white hover:text-red-600 hover:border-red-600 hover:border-2"
                onClick={handleSignup}
              >
                ĐĂNG KÝ TÀI KHOẢN
              </button>
            </form>
          </Card>
        </div>
      </div>
      <LoginModal loginPopup={loginPopup} toggleLoginPopup={toggleLoginPopup} />
      {/* Thông báo lỗi */}
      <Modal
        dismissible
        show={openError}
        onClose={() => setopenError(false)}
        size="lg"
      >
        <Modal.Body>
          <div className="space-y-6 text-center">
            <p className="text-3xl leading-relaxed font-semibold">
              Đăng ký không thành công
            </p>
            <p className="text-xl leading-relaxed">
              Lỗi gì gì đó á, thử lại sau nhé
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer className="flex justify-center">
          <Button color="failure" onClick={() => setopenError(false)}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
