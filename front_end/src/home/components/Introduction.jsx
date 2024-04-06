//Trang gioi thieu ve cong ty
import {Button} from "flowbite-react"
import intro from "../assets/intro.jpg"

export default function Introduction() {
    return (
        <div className="flex flex-row pt-32">
            <div className="basis-2/3 flex-col px-20 content-center">
                <p className="text-xl font-bold text-red-500">Chào mừng bạn đến với Đấu giá tới bến</p>
                <h3 className="text-4xl font-bold py-4">Nền tảng đấu giá trực tuyến hàng đầu Việt Nam</h3>
                <p className="text-lg pb-8">Tự hào là một trong những nhà đấu giá lớn nhất tại Việt Nam, Lạc Việt luôn là đơn vị tiên phong ứng dụng công nghệ thông tin vào hoạt động đấu giá. Ngày 17/07/2020, Lạc Việt vinh dự tổ chức thành công cuộc đấu giá trực tuyến chính thống đầu tiên tại Việt Nam, mở ra 1 chương mới cho hoạt động đấu giá nước nhà.</p>
                <Button color="failure" className="px-6 py-2"><p className="text-xl">Khám phá</p></Button>
            </div>
            <div>
                <img src={intro} className="basis-1/2 w-4/5 content-center ml-20" alt="auction" />
            </div>
        </div>
    )
}