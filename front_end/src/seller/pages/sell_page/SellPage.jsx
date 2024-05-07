import React, { useState, useCallback, useRef } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import { Button, Modal } from "flowbite-react";
import LoginModal from "../../../home/login/LoginModal";

import { useMutation } from "react-query";
import axios from "axios";

export default function SellPage() {
  const [loginPopup, setLoginPopup] = useState(false);
  const [openError, setopenError] = useState(false);

  const mutation = useMutation(
    {
      mutationFn: (props) => {
        console.log(props.imgRef[0]);
        return axios.post("http://localhost:3002/seller/createAuction", {
          auctionName : props.nameProduct,
          productName : props.nameProduct,
          productType : "Type 1",
          productImg: "bang bang",
          timeStart : props.timeStart, 
          timeEnd : props.timeEnd,
          startPrice : props.price,
          sellerID: "6635dfdc6817a433256fc4f8"
        });
      },
    },
    {
      onSuccess: (data) => {
        console.log(data);
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );

  const nameProductRef = useRef("");
  const priceRef = useRef("");
  const timeStartRef = useRef("");
  const dateStartRef = useRef("");
  const timeEndRef = useRef("");
  const dateEndRef = useRef("");
  const imgRef = useRef([]);

  const [type, setType] = React.useState("");

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const toggleLoginPopup = () => setLoginPopup(!loginPopup);

  const formHandler = useCallback(
    () => (event) => {
      event.preventDefault();
      const imagesBase64 = covertToBase64();
      const data = {
        auctionName: "Auction 1", // Tạm thời để "Auction 1
        nameProduct: nameProductRef.current?.value,
        price: priceRef.current?.value,
        timeStart: getDate(timeStartRef.current?.value + " " + dateStartRef.current?.value),
        timeEnd: getDate(timeEndRef.current?.value + " " + dateEndRef.current?.value),
        imgRef: imagesBase64, // Sử dụng kết quả từ covertToBase64
        type: type,
      };
      mutation.mutate(data);
      setopenError(true);
    },
    [type]
  );

  function covertToBase64() {
    const selectedFiles = imgRef.current.files;
    const selectedFilesArray = Array.from(selectedFiles);
    let array = [];
    selectedFilesArray.forEach((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64String = reader.result;
        array.push(base64String);
      };
      reader.onerror = (error) => {
        console.log("Error: ", error);
      };
    });
    return array;
  }

  function getDate(dateString) {
    // Separate the time and date parts
    const [time, date] = dateString.split(" ");

    // Split the date into year, month, and day
    const [year, month, day] = date.split("-");

    // Split the time into hours and minutes
    const [hours, minutes] = time.split(":");

    // Create a new Date object
    const dateObject = new Date(year, month - 1, day, hours, minutes);

    // Get timezone offset
    const timezoneOffset = dateObject.getTimezoneOffset();
    const offsetHours = Math.abs(Math.floor(timezoneOffset / 60));
    const offsetMinutes = Math.abs(timezoneOffset % 60);
    const offsetSign = timezoneOffset >= 0 ? "-" : "+";

    // Format the date object to the desired format with timezone offset
    const formattedDate = `${dateObject
      .toISOString()
      .slice(0, -1)}${offsetSign}${offsetHours
      .toString()
      .padStart(2, "0")}:${offsetMinutes.toString().padStart(2, "0")}`;
        console.log(formattedDate);
    return formattedDate; // Output: 2024-05-06T08:50:00.000+00:00
  }

  return (
    <div>
      <div className={loginPopup ? "blur-sm " : ""}></div>
      <div className="flex" onSubmit={formHandler()}>
        <Sidebar />
        <div className="h-screen flex-1 p-7">
          <h1 class="mb-4 text-1xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-3xl">
            TẠO PHIÊN ĐẤU GIÁ MỚI
          </h1>

          {/* Điền */}

          <form>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label for="text" class="block text-sm font-semibold mb-2">
                  Tên sản phẩm:
                </label>
                <input
                  type="text"
                  id="text"
                  class="w-full p-2 border border-gray-300 rounded "
                  placeholder="Tên sản phẩm"
                  required
                  ref={nameProductRef}
                />
              </div>
              <div>
                <label for="text" class="block text-sm font-semibold mb-2">
                  Loại tài sản đấu giá:
                </label>
                <select
                  id="default"
                  class="border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  required
                >
                  <option value="" selected disabled hidden>
                    Chọn loại sản phẩm đấu giá
                  </option>
                  <option value="US" onClick={handleTypeChange}>
                    Tài sản nhà nước
                  </option>
                  <option value="CA" onClick={handleTypeChange}>
                    Tài sản bất động sản
                  </option>
                  <option value="FR" onClick={handleTypeChange}>
                    Phương tiện xe cộ
                  </option>
                  <option value="DE" onClick={handleTypeChange}>
                    Văn hóa nghệ thuật
                  </option>
                </select>
              </div>
            </div>

            {/* <div class="mb-6">
              <label for="message" class="block text-sm font-semibold mb-2">
                Mô tả sản phẩm:
              </label>
              <textarea
                id="message"
                rows="2"
                class="w-full p-2 border border-gray-300 rounded"
                placeholder="Viết mô tả của bạn ở đây..."
                required
              ></textarea>
            </div> */}
            <div className="grid gap-6 mb-6 md:grid-cols-4">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Giá khởi điểm:
                </label>
                <div class="relative mb-4 flex w-full flex-wrap items-stretch">
                  <input
                    type="number"
                    class="relative m-0 block flex-auto border border-solid border-neutral-200 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none"
                    ref={priceRef}
                  />
                  <span class="flex items-center whitespace-nowrap rounded-e border border-s-0 border-solid border-neutral-200 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-surface">
                    VND
                  </span>
                </div>
              </div>
            </div>

            {/*Upload Image */}

            <div class="mb-6">
              <label
                class="block mb-2 text-sm font-medium text-gray-900"
                for="multiple_files"
              >
                Đăng ảnh sản phẩm:
              </label>
              <div className="grid gap-6 mb-6 md:grid-cols-4">
                <input
                  class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 white:text-gray-400 focus:outline-none"
                  id="multiple_files"
                  type="file"
                  name="images"
                  onChange={covertToBase64}
                  multiple
                  accept="image/png , image/jpeg, image/webp, image/jpg"
                  ref={imgRef}
                />
              </div>
              <p class="mt-1 text-sm text-gray-500" id="file_input_help">
                {" "}
                Chấp nhận ảnh PNG, JPEG, JPG hoặc WEBP.
              </p>
            </div>

            {/* Ngày */}

            <div class="mb-6">
              <div className="grid gap-6 mb-6 md:grid-cols-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Thời gian bắt đầu:
                  </label>
                  <input
                    type="time"
                    className="w-full p-2 border border-gray-300 rounded"
                    ref={timeStartRef}
                    onFocus={(e) => (e.target.type = "time")}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    {" "}
                    Ngày bắt đầu:
                  </label>
                  <input
                    type="date"
                    className="w-full p-2 border border-gray-300 rounded"
                    ref={dateStartRef}
                    onFocus={(e) => (e.target.type = "date")}
                  />
                </div>
              </div>
              <div className="grid gap-6 mb-6 md:grid-cols-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Thời gian kết thúc:
                  </label>
                  <input
                    type="time"
                    className="w-full p-2 border border-gray-300 rounded"
                    ref={timeEndRef}
                    onFocus={(e) => (e.target.type = "time")}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    {" "}
                    Ngày kết thúc:
                  </label>
                  <input
                    type="date"
                    className="w-full p-2 border border-gray-300 rounded"
                    ref={dateEndRef}
                    onFocus={(e) => (e.target.type = "date")}
                  />
                </div>
              </div>
            </div>
            {/* Nút bấm */}
            <div class="grid gap-6 mb-6 md:grid-cols-8">
              <button
                type="submit"
                class="text-white bg-red-600 hover:bg-red-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 white:bg-blue-600 white:hover:bg-red focus:outline-none white:focus:ring-blue-800"
              >
                Tạo đấu giá
              </button>
              <button
                type="button"
                class="text-white bg-gray-600 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 white:bg-gray-800 white:hover:bg-gray-700 white:focus:ring-gray-700 white:border-gray-700"
              >
                Hủy
              </button>
            </div>
          </form>
        </div>
      </div>
      <LoginModal loginPopup={loginPopup} toggleLoginPopup={toggleLoginPopup} />
      {/* Thông báo lỗi */}
      <Modal
        dismissible
        show={openError}
        onClose={() => setopenError(true)}
        size="lg"
      >
        <Modal.Body>
          <div className="space-y-6 text-center">
            <p className="text-3xl leading-relaxed font-semibold">
              Cập nhật thông tin thất bại
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
    </div>
  );
}