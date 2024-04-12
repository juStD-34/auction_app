import React, {useState} from 'react';
import NavbarUser from "../shared/Navbar"
import Footer from "../home/components/Footer"
import row from "../home/assets/row.png"
import grid from "../home/assets/grid.png"

var obj = [
    {
        name: "sCáp đồng viễn thông các loại thu hồi thanh lý của Viễn thông Thái Bình",
        time: "12/04/2004 09:30:00",
        price: "8.910.410.400 VNĐ",
        image: "https://data.lvo.vn/media/upload/1001406/IMAGE/N%C4%83m%202024/Vt%20Th%C3%A1i%20B%C3%ACnh_C%C3%A1p/1.jpg"
    }
]

export default function ProductDetail() {
    const [currentPage, setCurrentPage] = useState(1);
    const [currentChoice1, setCurrentChoice1] = useState(1);
    const [currentChoice2, setCurrentChoice2] = useState(1);
    const [viewMode, setViewMode] = useState('grid');
  const itemsPerPage = 6;

  const handleClick = (pageNumber) => {
      setCurrentPage(pageNumber);
  };

const displayItems = obj.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    return (
        <>
            <NavbarUser/>
            <div class="my-10 bg-[url('https://lacvietauction.vn/LVT/assets/images/bg/client-right.png')]">
                <div class="w-4/5 mx-auto mt-10 grid grid-cols-5 gap-4 content-center">
                    <div class="col-span-3 p-4">
                        <p className="text-3xl mb-5 font-semibold">Cáp đồng viễn thông các loại thu hồi thanh lý của Viễn thông Thái Bình</p>
                        <p className="text-xl opacity-50">Thời gian bắt đầu:</p>
                        <p className="text-xl opacity-50 mb-5">Thời gian kết thúc:</p>
                        <p className="text-xl opacity-50">Cuộc đấu giá bắt đầu sau:</p>
                    </div>
                    <div class="col-span-2">
                        <img src="https://data.lvo.vn/media/upload/1001406/IMAGE/N%C4%83m%202024/Vt%20Th%C3%A1i%20B%C3%ACnh_C%C3%A1p/1.jpg" alt="Ảnh minh họa" class="w-full"/>
                    </div>
                </div>
            </div>
            
            <div class="mx-10 my-10">
                <button class={currentChoice1 == 1 
                    ? "bg-red-600 text-white mx-10 text-xl shadow-md font-semibold rounded-md p-2 transition duration-500 hover:bg-red-600" 
                    : "bg-white text-black mx-10 text-xl shadow-md font-semibold rounded-md p-2 transition duration-500 hover:bg-red-600"} 
                    onClick={() => setCurrentChoice1(1)} >Danh sách tài sản</button>
                <button class={currentChoice1 == 2 
                    ? "bg-red-600 text-white text-xl font-semibold shadow-md rounded-md p-2 transition duration-500 hover:bg-red-600" 
                    : "bg-white text-black text-xl font-semibold shadow-md rounded-md p-2 transition duration-500 hover:bg-red-600"} 
                    onClick={() => setCurrentChoice1(2)}>Thông tin cuộc đấu giá</button>
            </div>
            {currentChoice1 == 1 ? (<div class="flex">
                <div class="w-1/4 ml-20 pb-20">
                    <div class="mr-3">
                        <div className="mb-4 rounded-lg bg-gray-100 p-2">
                            <div class="border-b-2">
                                <label className="block text-xl font-semibold mb-3">Trạng thái</label>
                            </div>
                            {/* Example filter options */}
                            <div class="mt-3">
                                <input className="mr-2 mt-2" type="checkbox"/>
                                <label>Tất cả</label>
                            </div>
                            <div>
                                <input className="mr-2" type="checkbox"/>
                                <label>Chưa có giá trị</label>
                            </div>
                            <div>
                                <input className="mr-2" type="checkbox"/>
                                <label>Đang đấu giá</label>
                            </div>
                            <div>
                                <input className="mr-2" type="checkbox"/>
                                <label>Đã kết thúc</label>
                            </div>
                        </div>
                        <div className="mb-4 rounded-lg bg-gray-100 p-2">
                            <div class="border-b-2">
                                <label className="block text-xl font-semibold mb-3">Danh mục tài sản</label>
                            </div>
                            {/* Example filter options */}
                            <div class="mt-3">
                                <input className="mr-2 mt-2" type="checkbox"/>
                                <label>Tất cả</label>
                            </div>
                            <div>
                                <input className="mr-2" type="checkbox"/>
                                <label>Tài sản nhà nước</label>
                            </div>
                            <div>
                                <input className="mr-2" type="checkbox"/>
                                <label>Bất động sản</label>
                            </div>
                            <div>
                                <input className="mr-2" type="checkbox"/>
                                <label>Phương tiện</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-3/4">
                    <div class="flex justify-between">
                        <div>
                            <button class={currentChoice2 == 1 
                            ? "bg-red-600 text-white text-md shadow-md transition duration-500 px-2 mx-2 font-semibold rounded-md p-1 hover:bg-red-600"
                            : "bg-white text-black text-md shadow-md px-2 transition duration-500 mx-2 font-semibold rounded-md p-1 hover:bg-red-600"}
                            onClick={() => setCurrentChoice2(1)}>Tất cả</button>
                            <button class={currentChoice2 == 2 
                            ? "bg-red-600 text-white text-md shadow-md transition duration-500 px-2 mx-2 font-semibold rounded-md p-1 hover:bg-red-600"
                            : "bg-white text-black text-md shadow-md transition duration-500 px-2 mx-2 font-semibold rounded-md p-1 hover:bg-red-600"}
                            onClick={() => setCurrentChoice2(2)}>Đã đăng ký</button>
                            <button class={currentChoice2 == 3 
                            ? "bg-red-600 text-white text-md shadow-md transition duration-500 px-2 mx-2 font-semibold rounded-md p-1 hover:bg-red-600" 
                            : "bg-white text-black text-md shadow-md transition duration-500 px-2 mx-2 font-semibold rounded-md p-1 hover:bg-red-600"}
                            onClick={() => setCurrentChoice2(3)}>Đã phê duyệt</button>
                        </div>
                        <div class="flex">
                            <input class="mx-2 rounded-lg border-2 shadow-md border-gray-400 p-1" placeholder="Tìm kiếm"/>
                            <button onClick={() => setViewMode('grid')} className="bg-white shadow-md mr-1 rounded">
                                <img className="w-10" src={grid} alt="img"/>
                            </button>
                            <button onClick={() => setViewMode('list')} className="bg-white shadow-md rounded">
                                <img className="w-10" src={row} alt="img"/>
                            </button>
                        </div>
                    </div>
                    <div className={viewMode === 'grid' ? "grid grid-cols-3 gap-10" : "flex flex-wrap justify-center"}>
                        {displayItems.map((item, index) => (
                            <div key={index} className="bg-gray-100 mt-5 p-4 mb-10 shadow-md rounded-lg transition duration-500 ease-in-out hover:transform  
                            hover:translate-y-1 hover:scale-105">
                                <img src={item.image} alt={item.name} className={viewMode === 'grid' ? "w-full" : "w-1/5"} />
                                <div className={viewMode === 'grid' ? "" : "w-2/3"}>
                                    <h2 className="text-sm font-semibold mb-3">{item.name}</h2>
                                    <p className="text-sm">{item.time}</p>
                                    <p>Giá khởi điểm: {item.price}</p>
                                    <button className="bg-red-600 p-2 text-white rounded-lg hover:bg-black">Chi tiết</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center items-end mb-5 mt-4">
                        {[...Array(Math.ceil(obj.length / itemsPerPage)).keys()].map((pageNumber) => (
                            <button key={pageNumber} onClick={() => handleClick(pageNumber + 1)} className={`hover:bg-black text-white mx-1 ${currentPage === pageNumber + 1 ? 'bg-red-600 text-white' : 'bg-gray-300'} py-2 px-4 rounded`}>
                                {pageNumber + 1}
                            </button>
                        ))}
                    </div>
                </div>
            </div>) : (<div>aloo</div>)}
            <Footer/>
        </>
    )
}