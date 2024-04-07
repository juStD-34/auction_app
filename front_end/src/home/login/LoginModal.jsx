import React, { useRef } from "react";
import Login from "./Login";

//Pop up hộp thoại login

export default function LoginModal({ loginPopup, toggleLoginPopup }) {
  const loginPopupRef = useRef();

  window.addEventListener("click", (e) => {
    if (e.target === loginPopupRef.current) {
      toggleLoginPopup(false);
    }
  });

  return (
    loginPopup && (
      <div
        ref={loginPopupRef}
        className="fixed top-0 left-0 w-full h-full z-50 overflow-y-auto drop-shadow-2xl"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl shadow-md w-[90%] sm:w-auto mx-auto bg-white ">
          <div>
            <div className="grid grid-cols-1 items-center w-[600px] relative">
              <Login />
            </div>
          </div>
        </div>
      </div>
    )
  );
}
