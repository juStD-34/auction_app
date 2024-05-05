import React from "react";
import { useNavigate } from "react-router-dom";
import { Dropdown } from "flowbite-react";
import Notifications from "react-notifications-menu";
import hehe from "../home/assets/hehe.png";
import avt from "../home/assets/avt.png";
import search from "../home/assets/search.png";

const id = 1;

const DEFAULT_NOTIFICATION = {
  image:
    "https://cutshort-data.s3.amazonaws.com/cloudfront/public/companies/5809d1d8af3059ed5b346ed1/logo-1615367026425-logo-v6.png",
  message: "Notification one.",
  detailPage: "/historydetails/"+id,
  receivedTime: "12h ago",
};

export default function NavbarUser() {
  const navigate = useNavigate();
  const inputRef = React.useRef(null);
  const data = ([DEFAULT_NOTIFICATION]);

  function searchItem() {
    navigate(`/search/${inputRef.current.value}`);
  }

  function viewAll() {
    navigate("/history");
  }

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
      <div className="flex justify-between w-full h-30 p-5 border-b-2 border-gray gap-4">
        <div className="flex items-center">
          <div className="flex">
            <a href="/home">
              <img
                src={hehe}
                style={{ width: "60px", height: "60px" }}
                className="content-center ml-10"
                alt="auction"
              />
            </a>
          </div>
          <div className="p-2 flex items-center">
            <div className="ml-0.5">
              <input
                placeholder="Search"
                className="w-60 p-2 ml-5 bg-gray-100 rounded-xl shadow-md"
                ref={inputRef}
              />
            </div>
          </div>
          <div>
            <button
              onClick={searchItem}
              className="ml-2 w-10 h-10 shadow-md rounded-full border-2 border-gray-400 p-2 hover:bg-gray-300"
            >
              <img src={search} alt="dp" />
            </button>
          </div>
        </div>
        <div className="flex">
          <Dropdown
            arrowIcon={true}
            inline
            placement="bottom"
            label={
              <a href="/buyer" className="text-xl hover:text-red-500">
                Tài sản đấu giá
              </a>
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
            label={
              <p className="text-xl ml-5 hover:text-red-500">Cuộc đấu giá</p>
            }
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
        </div>
        <div className="flex">
          <div className="flex items-center gap-4">
            <div className="flex flex-col pr-4">
              <div className="text-lg font-bold">{date[1]}</div>
              <div className="text-sm">
                {day}
                {date[0].replace(",", "")}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end">
            <div className="mr-2">
              <button className="items-center w-10 h-10 shadow-md rounded-full border-2 border-gray-400 p-1 hover:bg-gray-300">
              <Notifications
                  data={data}
                  header={{
                    title: "Notifications",
                    option: {
                      text: "View All",
                      onClick: () => viewAll(),
                    },
                  }}
                  markAsRead={(data) => {
                    console.log(data);
                  }}
                />
              </button>
            </div>
            <div className="h-10 w-auto flex rounded-full shadow-md border-2 border-gray-400 p-1 items-center space-x-2 pr-2 hover:bg-gray-300">
              <Dropdown
                inline
                placement="bottom"
                label={
                  <button className="h-10 flex space-x-1 items-center justify-center focus:outline-none ">
                    <div className="h-8">
                      <img
                        src={avt}
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
                  <a href="/user/account/profile" className="hover:text-red-500">
                    Thông tin tài khoản
                  </a>
                </Dropdown.Item>
                <Dropdown.Item>
                  <p className="hover:text-red-500">Đăng xuất</p>
                </Dropdown.Item>
                <Dropdown.Item>
                  <p className="hover:text-red-500">Tài sản khác</p>
                </Dropdown.Item>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
