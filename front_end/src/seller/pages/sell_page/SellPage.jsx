import React, { useState, useCallback, useRef } from "react";
import Sidebar from "../../components/sidebar/Sidebar"
import { Button, Card, Label, TextInput, Modal, Select } from "flowbite-react";
import LoginModal from "../../../home/login/LoginModal"

export default function SellPage() {
  const [loginPopup, setLoginPopup] = useState(false);
  const [openError, setopenError] = useState(false);

  const nameProductRef = useRef("");
  const typeProductRef = useRef("");
  const textRef = useRef("");
  const priceRef = useRef("");
  const timeStartRef = useRef("");
  const dateStartRef = useRef("");
  const timeEndRef = useRef("");
  const dateEndRef = useRef("");
  const imgRef = useRef("");

  const [type, setType] = React.useState("");

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const toggleLoginPopup = () => setLoginPopup(!loginPopup);

  const formHandler = useCallback(
    () => (event) => {
      event.preventDefault();

      const data = {
        nameProduct: nameProductRef.current?.value,
        typeProduct: typeProductRef.current?.value,
        text: textRef.current?.value,
        price: priceRef.current?.value,
        timeStart: timeStartRef.current?.value,
        dateStart: dateStartRef.current?.value,
        timeEnd: timeEndRef.current?.value,
        dateEnd: dateEndRef.current?.value,
        imgRef: imgRef.current?.value,


        type: type,
      };
      setopenError(true);

      console.log(data);
    },
    [type]
  );
  const [selectedImages, setSelectedImages] = useState([]);

  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);

    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });

    setSelectedImages((previousImages) => previousImages.concat(imagesArray));

    // FOR BUG IN CHROME
    event.target.value = "";
  };

  function deleteHandler(image) {
    setSelectedImages(selectedImages.filter((e) => e !== image));
    URL.revokeObjectURL(image);
  }

  return (
    <div>
      <div className={loginPopup ? "blur-sm " : ""}></div>
      <div className="flex" onSubmit={formHandler()}>
        <Sidebar />
        <div className="h-screen flex-1 p-7">
          <h1 class="mb-4 text-1xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-3xl">TẠO PHIÊN ĐẤU GIÁ MỚI</h1>

          {/* Điền */}

          <form>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label for="text" class="block text-sm font-semibold mb-2">Tên sản phẩm:</label>
                <input type="text" id="text" class="w-full p-2 border border-gray-300 rounded " placeholder="Tên sản phẩm" required ref={nameProductRef} />
              </div>
              <div>
                <label for="text" class="block text-sm font-semibold mb-2">Loại tài sản đấu giá:</label>
                <select id="default" class="border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" ref={typeProductRef} required>
                  <option value="" selected disabled hidden>Chọn loại sản phẩm đấu giá</option>
                  <option value="US" onClick={handleTypeChange}>Tài sản nhà nước</option>
                  <option value="CA" onClick={handleTypeChange}>Tài sản bất động sản</option>
                  <option value="FR" onClick={handleTypeChange}>Phương tiện xe cộ</option>
                  <option value="DE" onClick={handleTypeChange}>Văn hóa nghệ thuật</option>
                </select>
              </div>
            </div>

            <div class="mb-6">
              <label for="message" class="block text-sm font-semibold mb-2">Mô tả sản phẩm:</label>
              <textarea id="message" rows="2" class="w-full p-2 border border-gray-300 rounded" placeholder="Viết mô tả của bạn ở đây..." required ref={textRef}></textarea>
            </div>
            <div className="grid gap-6 mb-6 md:grid-cols-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Giá khởi điểm:</label>
                <div class="relative mb-4 flex w-full flex-wrap items-stretch">
                  <input
                    type="number"
                    class="relative m-0 block flex-auto border border-solid border-neutral-200 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none"
                    ref={priceRef} />
                  <span
                    class="flex items-center whitespace-nowrap rounded-e border border-s-0 border-solid border-neutral-200 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-surface"
                  >VND</span
                  >
                </div>
              </div>
            </div>

            {/*Upload Image */}

            <div class="mb-6">
              <label class="block mb-2 text-sm font-medium text-gray-900" for="multiple_files">Đăng ảnh sản phẩm:</label>
              <div className="grid gap-6 mb-6 md:grid-cols-4">
                <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 white:text-gray-400 focus:outline-none"
                  id="multiple_files"
                  type="file"
                  name="images"
                  onChange={onSelectFile}
                  multiple
                  accept="image/png , image/jpeg, image/webp, image/jpg"
                  ref={imgRef}
                />
              </div>
              <p class="mt-1 text-sm text-gray-500" id="file_input_help"> Chấp nhận ảnh PNG, JPEG, JPG hoặc WEBP.</p>

              {selectedImages.length > 0 &&
                (
                  <button
                    className="upload-btn text-red"
                    onClick={() => {
                      console.log(selectedImages);
                    }}
                  >
                    Đã tải lên {selectedImages.length} ảnh
                  </button>
                )}

              <div className="images" class="grid gap-6 mb-6 md:grid-cols-6">
                {selectedImages &&
                  selectedImages.map((image) => {
                    return (
                      <div key={image} className="image">
                        <img class="object-fill h-48 w-96" src={image} height="10px" alt="upload" />
                        <hr />
                        <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-1.5 me-2 mb-2 white:bg-red-600 white:hover:bg-red-700 white:focus:ring-red-900"
                          onClick={() => deleteHandler(image)}>
                          Xóa ảnh
                        </button>
                      </div>
                    );
                  })}
              </div>
            </div>

            {/* Ngày */}

            <div class="mb-6">
              <div className="grid gap-6 mb-6 md:grid-cols-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Thời gian bắt đầu:</label>
                  <input type="time" className="w-full p-2 border border-gray-300 rounded" ref={timeStartRef} onFocus={(e) => (e.target.type = "time")} />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2"> Ngày bắt đầu:</label>
                  <input type="date" className="w-full p-2 border border-gray-300 rounded" ref={dateStartRef} onFocus={(e) => (e.target.type = "date")} />
                </div>
              </div>
              <div className="grid gap-6 mb-6 md:grid-cols-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Thời gian kết thúc:</label>
                  <input type="time" className="w-full p-2 border border-gray-300 rounded" ref={timeEndRef} onFocus={(e) => (e.target.type = "time")} />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2"> Ngày kết thúc:</label>
                  <input type="date" className="w-full p-2 border border-gray-300 rounded" ref={dateEndRef} onFocus={(e) => (e.target.type = "date")} />
                </div>
              </div>
            </div>
            {/* Nút bấm */}
            <div class="grid gap-6 mb-6 md:grid-cols-8">
              <button type="submit" class="text-white bg-red-600 hover:bg-red-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 white:bg-blue-600 white:hover:bg-red focus:outline-none white:focus:ring-blue-800">Tạo đấu giá</button>
              <button type="button" class="text-white bg-gray-600 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 white:bg-gray-800 white:hover:bg-gray-700 white:focus:ring-gray-700 white:border-gray-700">Hủy</button>
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
    </div >
  )
}
