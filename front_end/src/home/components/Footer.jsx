
import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

export default function Footers() {
  return (
    <Footer bgDark>
      <div className="w-full bg-stone-900">
        <div className="grid w-full grid-cols-2 gap-32 px-16 py-8 md:grid-cols-4">
          <div >
            <Footer.Title title="Công ty đấu giá hợp danh Tới bến" className="text-white"/>
            <Footer.LinkGroup col className="text-white">
              <Footer.Link href="#">Địa chỉ: Số 49 Văn Cao, phường Liễu Giai, quận Ba Đình, TP. Hà Nội.</Footer.Link>
              <Footer.Link href="#">Điện thoại: 024.32.502.234</Footer.Link>
              <Footer.Link href="#">Brand Center</Footer.Link>
              <Footer.Link href="#">Email: info@steam.vn</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Về chúng tôi" className="text-white"/>
            <Footer.LinkGroup col className="text-white">
              <Footer.Link href="#">Giới thiệu</Footer.Link>
              <Footer.Link href="#">Quy chế hoạt động</Footer.Link>
              <Footer.Link href="#">Cơ chế giải quyết tranh chấp</Footer.Link>
              <Footer.Link href="#">Hướng dẫn sử dụng</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Chính sách" className="text-white"/>
            <Footer.LinkGroup col className="text-white">
              <Footer.Link href="#">Câu hỏi thường gặp</Footer.Link>
              <Footer.Link href="#">Cho thuê tổ chức đấu giá trực tuyến</Footer.Link>
              <Footer.Link href="#">Văn bản pháp quy</Footer.Link>
              <Footer.Link href="#">Chính sách bảo mật thông tin</Footer.Link>
              <Footer.Link href="#">Điều khoản sử dụng</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Tải về" className="text-white"/>
            <Footer.LinkGroup col className="text-white">
              <Footer.Link href="#">iOS</Footer.Link>
              <Footer.Link href="#">Android</Footer.Link>
              <Footer.Link href="#">Windows</Footer.Link>
              <Footer.Link href="#">MacOS</Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
        <div className="w-full bg-black px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Tới bến™" year={2022} className="text-white"/>
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} className="text-white"/>
            <Footer.Icon href="#" icon={BsInstagram} className="text-white"/>
            <Footer.Icon href="#" icon={BsTwitter} className="text-white"/>
            <Footer.Icon href="#" icon={BsGithub} className="text-white"/>
            <Footer.Icon href="#" icon={BsDribbble} className="text-white"/>
          </div>
        </div>
      </div>
    </Footer>
  );
}