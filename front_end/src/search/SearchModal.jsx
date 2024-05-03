import React from "react";
import { useNavigate } from "react-router-dom";
import IconCancel from "./CancelIcon";

export default function SearchModal({ searchPopup, toggleSearch }) {
  const navigate = useNavigate();
  const inputRef = React.useRef(null);

  function search (e) {
    if (e.key === "Enter") navigate(`/search/${inputRef.current.value}`);
  }

  return (
    searchPopup && (
      <div className="fixed top-0 left-0 z-50 w-full h-full bg-black opacity-80">
        <div class="fixed top-80 left-40 w-full flex flex-col justify-content-center">
          <label className="bg-transparent text-white text-lg">
            Nhập từ khóa tìm kiếm tài sản...
          </label>
          <div>
            <input
              className="bg-transparent text-white focus:outline-0 w-2/3 border-t-0 border-l-0 border-r-0 border-b-2 border-b-white focus:ring-0 focus:border-b-white"
              type="text"
              placeholder="Tìm kiếm"
              ref={inputRef}
              onKeyDown={(e) => search(e)}
            />
            <button className="text-white border-2 rounded-full ml-8 border-red-700 hover:bg-red-700" onClick={toggleSearch} >
              <IconCancel className="h-8 w-8 p-1"/>
            </button>
          </div>
        </div>
      </div>
    )
  );
}
