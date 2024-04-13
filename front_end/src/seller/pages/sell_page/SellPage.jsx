import React, { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar"

export default function SellPage() {
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
    <div className="flex">
      <Sidebar />
      <div className="h-screen flex-1 p-7">
        <h1 class="mb-4 text-1xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-3xl">TẠO PHIÊN ĐẤU GIÁ MỚI</h1>

        {/* Điền */}

        <form>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label for="text" class="block text-sm font-semibold mb-2">Tên sản phẩm:</label>
              <input type="text" id="text" class="w-full p-2 border border-gray-300 rounded " placeholder="Tên sản phẩm" required />
            </div>
            <div>
              <label for="text" class="block text-sm font-semibold mb-2">Loại tài sản đấu giá:</label>
              <select id="default" class="border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required>
                <option selected>Chọn loại sản phẩm đấu giá</option>
                <option value="US">Tài sản nhà nước</option>
                <option value="CA">Tài sản bất động sản</option>
                <option value="FR">Phương tiện xe cộ</option>
                <option value="DE">Văn hóa nghệ thuật</option>
              </select>
            </div>
          </div>
          <label for="address" class="block mb-2 text-sm font-semibold  text-gray-900 dark:text-white">Địa chỉ người bán:</label>

                    <div class="grid gap-6 mb-6 md:grid-cols-3">

                        <div>
                            <label for="Province" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tỉnh / Thành phố:</label>
                            <input type="text" id="Province" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Hà Nội" required />
                        </div>
                        <div>
                            <label for="District" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quận / Huyện:</label>
                            <input type="text" id="District" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Đống Đa" required />
                        </div>
                        <div>
                            <label for="Commune" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Xã / Phường:</label>
                            <input type="text" id="Commune" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Khương Thượng" required />
                        </div>

                    </div>
                    <div class="mb-6">
                        <label for="address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tên đường, ngõ, số nhà:</label>
                        <input type="text" id="address" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Số 1, ngõ 123, phố Khương Thượng" required />
                    </div>
          <div class="mb-6">
            <label for="message" class="block text-sm font-semibold mb-2">Mô tả sản phẩm:</label>
            <textarea id="message" rows="2" class="w-full p-2 border border-gray-300 rounded" placeholder="Viết mô tả của bạn ở đây..." required></textarea>
          </div>
          <div className="grid gap-6 mb-6 md:grid-cols-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Giá khởi điểm:</label>
              <div class="relative mb-4 flex w-full flex-wrap items-stretch">
                <input
                  type="number"
                  class="relative m-0 block flex-auto border border-solid border-neutral-200 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none"
                  aria-label="Amount (to the nearest dollar)" />
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
                required />
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
                selectedImages.map((image, index) => {
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
                <input type="time" className="w-full p-2 border border-gray-300 rounded" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2"> Ngày bắt đầu:</label>
                <input type="date" className="w-full p-2 border border-gray-300 rounded" />
              </div>
            </div>
            <div className="grid gap-6 mb-6 md:grid-cols-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Thời gian kết thúc:</label>
                <input type="time" className="w-full p-2 border border-gray-300 rounded" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2"> Ngày kết thúc:</label>
                <input type="date" className="w-full p-2 border border-gray-300 rounded" />
              </div>
            </div>
          </div>
          {/* Nút bấm */}
          <div class="grid gap-6 mb-6 md:grid-cols-8">
            <button type="button" class="text-white bg-red-600 hover:bg-red-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 white:bg-blue-600 white:hover:bg-red focus:outline-none white:focus:ring-blue-800">Tạo đấu giá</button>
            <button type="button" class="text-white bg-gray-600 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 white:bg-gray-800 white:hover:bg-gray-700 white:focus:ring-gray-700 white:border-gray-700">Hủy</button>
          </div>
        </form>
      </div>
    </div>
  )
}
