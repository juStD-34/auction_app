import { Dropdown, Navbar, Button } from "flowbite-react";
import { CiSearch } from "react-icons/ci";
import React from "react";

export default function NavigationBar({ loginPopup, toggleLoginPopup }) {
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
    <div className="px-10">
      <Navbar fluid rounded>
        <Navbar.Brand>
          <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
            Đấu giá tới bến
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2 gap-4">
          <div className="flex flex-col pr-4">
            <div className="text-lg font-bold">{date[1]}</div>
            <div className="text-sm">
              {day}
              {date[0].replace(",", "")}
            </div>
          </div>
          <Button color="red">
            <CiSearch className="h-7 w-7" />
            <p className="pt-1">Tìm kiếm</p>
          </Button>
          <Button color="failure" onClick={toggleLoginPopup}>
            <p className="pt-1">Đăng nhập</p>
          </Button>
        </div>
        <Navbar.Collapse>
          <Dropdown
            arrowIcon={true}
            inline
            placement="bottom"
            label={
              <p className="text-xl hover:text-red-500">Tài sản đấu giá</p>
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
            label={<p className="text-xl hover:text-red-500">Cuộc đấu giá</p>}
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
            label={<p className="text-xl hover:text-red-500">Tin tức</p>}
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
          <p href="#" className="text-xl hover:text-red-500">
            Giới thiệu
          </p>
          <p href="#" className="text-xl hover:text-red-500">
            Liên hệ
          </p>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
