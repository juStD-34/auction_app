import React from 'react';
import { Dropdown, Navbar} from "flowbite-react";
import hehe from "../home/assets/hehe.png";
import search from "../home/assets/search.png"
import noti from "../home/assets/noti.png";

export default function NavbarUser() {
    const [time, setTime] = React.useState(new Date().toLocaleString());
  const date = time.split(" ");
  var day;

  switch (new Date().getDay()) {
    default:
      day = "Chủ nhật, ";
      break;
    case 1:
      day = "Thứ hai, ";
      break;
    case 2:
      day = "Thứ ba, ";
      break;
    case 3:
      day = "Thứ tư, ";
      break;
    case 4:
      day = "Thứ năm, ";
      break;
    case 5:
      day = "Thứ sáu, ";
      break;
    case 6:
      day = "Thứ bảy, ";
  }

  React.useEffect(() => {
    const timer = setInterval(() => {
      // Creates an interval which will update the current data every minute
      // This will trigger a rerender every component that uses the useDate hook.
      setTime(new Date().toLocaleString());
    }, 1000);
    return () => {
      clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
    };
  }, []);
  return (
    <div>
        <div className="w-full h-30 p-5 border-b-2 border-gray grid grid-cols-10 gap-4">
            <div className="col-span-2 flex items-center">
                <a href="/home">
                    <img src={hehe} style={{ width: "60px", height: "60px" }} className="content-center ml-10" alt="auction" /> 
                </a>
            </div>
            <div className="p-2 col-span-5 flex items-center">
                <div className="bg-gray-100 shadow-md p-2 h-10 w-30 items-center hover:bg-gray-300 rounded-l-3xl">
                    <Dropdown
                        arrowIcon={true}
                        inline
                        label={
                            <p className='ml-2 mr-2'>Danh mục</p>
                        }
                    >
                    <Dropdown.Item>
                        <p className="hover:text-red-500">Danh mục</p>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <p className="hover:text-red-500">Tài sản nhà nước</p>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <p className="hover:text-red-500">Tài sản công</p>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <p className="hover:text-red-500">Tài sản khác</p>
                    </Dropdown.Item>
                    </Dropdown>
                </div>
                <div className='ml-0.5'>
                    <input
                        placeholder="Search"
                        className="w-60 p-2 bg-gray-100 rounded-r-3xl shadow-md"
                    />
                </div>
                <div >
                    <button className="ml-2 w-10 h-10 shadow-md rounded-full border-2 border-gray-400 p-2 hover:bg-gray-300">
                        <img
                        src={search}
                        alt="dp"
                        />
                    </button>
                </div>
            </div>
            <div className="col-span-1 flex items-center gap-4">
                        <div className="flex flex-col pr-4">
                            <div className="text-lg font-bold">{date[1]}</div>
                            <div className="text-sm">
                            {day}
                            {date[0].replace(",", "")}
                            </div>
                        </div>
                    </div>
            <div className="col-span-2 flex items-center justify-end mr-10">
                <div className="mr-2">
                    <button className="items-center w-10 h-10 shadow-md rounded-full border-2 border-gray-400 p-1 hover:bg-gray-300">
                        <img
                        src={noti}
                        className="w-8 h-8 rounded-full"
                        alt="dp"
                        />
                    </button>
                </div>
                <div className="h-10 w-auto flex rounded-full shadow-md border-2 border-gray-400 p-1 items-center space-x-2 pr-2 hover:bg-gray-300 rounded-full">
                    <Dropdown
                        inline
                        placement="bottom"
                        label={
                            <button className="h-10 flex space-x-1 items-center justify-center focus:outline-none " >
                                <div className="h-8">
                                    <img
                                    src="https://random.imagecdn.app/200/200"
                                    className="w-8 h-8 rounded-full"
                                    alt="dp"
                                    />
                                </div>
                                <div className="h-8 flex items-center justify-content">
                                    <p className="font-semibold text-sm">Le Ba Truong</p>
                                </div>
                            </button>
                        }
                    >
                    <Dropdown.Item>
                        <a className="hover:text-red-500">Thông báo</a>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <a href="/user/account/profile" className="hover:text-red-500">Thông tin tài khoản</a>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <a className="hover:text-red-500">Đăng xuất</a>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <a className="hover:text-red-500">Tài sản khác</a>
                    </Dropdown.Item>
                    </Dropdown>
            
                </div>
            </div>
        </div>
        <div>
            <div className="border-b-2 font-semibold">
                <Navbar fluid rounded>
                    <Dropdown
                        arrowIcon={true}
                        inline
                        placement="bottom"
                        label={
                        <a href="/buyer" className="text-3xl ml-20 hover:text-red-500">Tài sản đấu giá</a>
                        }
                    >
                        <Dropdown.Item>
                        <p className="hover:text-red-500">Tài sản nhà nước</p>
                        </Dropdown.Item>
                        <Dropdown.Item>
                        <p className="hover:text-red-500">Tài sản bất động sản</p>
                        </Dropdown.Item>
                        <Dropdown.Item>
                        <p className="hover:text-red-500">Phương tiện xe cộ</p>
                        </Dropdown.Item>
                        <Dropdown.Item>
                        <p className="hover:text-red-500">Văn hoá nghệ thuật</p>
                        </Dropdown.Item>
                    </Dropdown>
                    <Dropdown
                        arrowIcon={true}
                        inline
                        placement="bottom"
                        label={<p className="text-3xl hover:text-red-500">Cuộc đấu giá</p>}
                    >
                        <Dropdown.Item>
                        <p className="hover:text-red-500">Cuộc đấu giá sắp đấu giá</p>
                        </Dropdown.Item>
                        <Dropdown.Item>
                        <p className="hover:text-red-500">Cuộc đấu giá đang diễn ra</p>
                        </Dropdown.Item>
                        <Dropdown.Item>
                        <p className="hover:text-red-500">Cuộc đấu giá đã kết thúc</p>
                        </Dropdown.Item>
                    </Dropdown>
                    <Dropdown
                        arrowIcon={true}
                        inline
                        placement="bottom"
                        label={<p className="text-3xl hover:text-red-500">Tin tức</p>}
                    >
                        <Dropdown.Item>
                        <p className="hover:text-red-500">Thông báo</p>
                        </Dropdown.Item>
                        <Dropdown.Item>
                        <p className="hover:text-red-500">Thông báo đấu giá</p>
                        </Dropdown.Item>
                        <Dropdown.Item>
                        <p className="hover:text-red-500">Tin khác</p>
                        </Dropdown.Item>
                    </Dropdown>
                    <p href="#" className="text-3xl hover:text-red-500">
                        Giới thiệu
                    </p>
                    <p href="#" className="text-3xl mr-20 hover:text-red-500">
                        Liên hệ
                    </p>
                </Navbar>
            </div>
        </div>
    </div>
  );
};
