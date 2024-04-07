import React, { useCallback, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Label, TextInput, Modal, Button } from "flowbite-react";

//form login

const Login = ({ handleSignIn }) => {
  const [showPassword, setShowPassword] = useState(false);
  const userRef = React.useRef("");
  const passwordRef = React.useRef("");

  const [openModal, setOpenModal] = useState(false);

  // Xử lý data đăng nhập
  const formHandler = useCallback(
    () => (event) => {
      event.preventDefault();

      const data = {
        email: userRef.current?.value,
        password: passwordRef.current?.value,
      };
      setOpenModal(true);

      console.log(data);
    },
    []
  );

  return (
    <>
      <div className="p-16">
        <h1 className="text-2xl text-red-600 font-semibold text-center mb-4">
          ĐẤU GIÁ TỚI BẾN
        </h1>
        <div className="flex justify-center">
          <p className="text-center text-2xl inline-block">
            Bạn chưa có tài khoản?
          </p>
          <p
            onClick={handleSignIn}
            className="hover:text-red-600 inline-block cursor-pointer text-2xl pl-2 font-semibold"
          >
            Đăng Ký Ngay
          </p>
        </div>
        {/* form login */}
        <form className="flex flex-col pt-6" onSubmit={formHandler()}>
          {/* Input tên đăng nhập */}
          <div>
            <Label htmlFor="username" className="input-label">
              Tên đăng nhập / Email
            </Label>
            <TextInput
              id="username"
              type="text"
              autoComplete="email"
              placeholder="Nhập tên đăng nhập hoặc email"
              ref={userRef}
              className="input rounded-sm w-full my-2"
            />
          </div>
          <div>
            {/* Input mật khẩu  */}
            <Label htmlFor="password" className="input-label">
              Mật khẩu
            </Label>
            <div className="relative py-2">
              <TextInput
                className="input rounded-sm w-full"
                id="password"
                autoComplete="password"
                placeholder="Mật khẩu"
                ref={passwordRef}
                type={showPassword ? "text" : "password"}
              />
              {showPassword ? (
                <FaEye
                  className="text-gray-500 absolute right-4 top-5 cursor-pointer "
                  onClick={() => setShowPassword(!showPassword)}
                />
              ) : (
                <FaEyeSlash
                  className="text-gray-500 absolute right-4 top-5 cursor-pointer "
                  onClick={() => setShowPassword(!showPassword)}
                />
              )}
            </div>
          </div>
          {/* Quên mật khẩu */}
          <div className="flex justify-start">
            <p className=" mt-4 hover:text-red-600 text-lg cursor-pointer font-semibold underline">
              Quên mật khẩu?
            </p>
          </div>
          {/* Submit */}
          <button
            type="submit"
            className=" transition-all duration-200 ease-in-out bg-red-600 border-red-600 border-2 text-white text-2xl py-3 px-5 rounded-sm mt-4 block w-full hover:bg-white hover:text-red-600 hover:border-red-600 hover:border-2"
          >
            Đăng nhập
          </button>
        </form>
      </div>
      {/* Xử lý thông báo lỗi */}
      <Modal
        dismissible
        show={openModal}
        onClose={() => setOpenModal(false)}
        size="lg"
      >
        <Modal.Body>
          <div className="space-y-6 text-center">
            <p className="text-3xl leading-relaxed font-semibold">
              Đăng nhập không thành công
            </p>
            <p className="text-xl leading-relaxed">
              Tài khoản đăng nhập hoặc mật khẩu không chính xác!
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer className="flex justify-center">
          <Button color="failure" onClick={() => setOpenModal(false)}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Login;
