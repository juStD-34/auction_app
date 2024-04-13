import { React, useState } from 'react'

export default function Sidebar() {
    const [open, setOpen] = useState(true);
    return (
        <div className={` ${open ? "w-72" : "w-20 "} bg-red-600 h-screen p-5 pt-8 relative duration-300`}>
            <svg className={`w-[30px] h-[30px] text-white light:text-white  ${!open && "rotate-180"}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"
                onClick={() => setOpen(!open)}
            >
                <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14" />
            </svg>
            <br />
            <div className="flex gap-x-4 items-center">
                <h1
                    className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0"
                        }`}
                >
                    KÊNH CHO NGƯỜI BÁN
                </h1>
            </div>
            <ul className="pt-6">
                <a className='flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-white text-sm items-center gap-x-4' href="/home">
                    <svg className="w-[36px] h-[36px] text-white light:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z" clip-rule="evenodd" />
                    </svg>
                    <span className={`${!open && "hidden"} origin-left duration-200`}>
                        Trang chủ
                    </span>
                </a>

                <a className='flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-white text-sm items-center gap-x-4'href="/seller">
                    <svg className="w-[36px] h-[36px] text-white light:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M11.32 6.176H5c-1.105 0-2 .949-2 2.118v10.588C3 20.052 3.895 21 5 21h11c1.105 0 2-.948 2-2.118v-7.75l-3.914 4.144A2.46 2.46 0 0 1 12.81 16l-2.681.568c-1.75.37-3.292-1.263-2.942-3.115l.536-2.839c.097-.512.335-.983.684-1.352l2.914-3.086Z" clip-rule="evenodd" />
                        <path fill-rule="evenodd" d="M19.846 4.318a2.148 2.148 0 0 0-.437-.692 2.014 2.014 0 0 0-.654-.463 1.92 1.92 0 0 0-1.544 0 2.014 2.014 0 0 0-.654.463l-.546.578 2.852 3.02.546-.579a2.14 2.14 0 0 0 .437-.692 2.244 2.244 0 0 0 0-1.635ZM17.45 8.721 14.597 5.7 9.82 10.76a.54.54 0 0 0-.137.27l-.536 2.84c-.07.37.239.696.588.622l2.682-.567a.492.492 0 0 0 .255-.145l4.778-5.06Z" clip-rule="evenodd" />
                    </svg>


                    <span className={`${!open && "hidden"} origin-left duration-200`}>
                        Tạo phiên đấu giá
                    </span>
                </a>
                <a className='flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-white text-sm items-center gap-x-4'href="/manager">
                    <svg class="w-[36px] h-[36px] text-white light:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M5.5 3a1 1 0 0 0 0 2H7v2.333a3 3 0 0 0 .556 1.74l1.57 2.814A1.1 1.1 0 0 0 9.2 12a.998.998 0 0 0-.073.113l-1.57 2.814A3 3 0 0 0 7 16.667V19H5.5a1 1 0 1 0 0 2h13a1 1 0 1 0 0-2H17v-2.333a3 3 0 0 0-.56-1.745l-1.616-2.82a1 1 0 0 0-.067-.102 1 1 0 0 0 .067-.103l1.616-2.819A3 3 0 0 0 17 7.333V5h1.5a1 1 0 1 0 0-2h-13Z" clip-rule="evenodd" />
                    </svg>

                    <span className={`${!open && "hidden"} origin-left duration-200`}>
                        Quản lý phiên đấu giá
                    </span>
                </a>
                <a className='flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-white text-sm items-center gap-x-4'href="/status">
                    <svg class="w-[36px] h-[36px] text-white light:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.133 12.632v-1.8a5.406 5.406 0 0 0-4.154-5.262.955.955 0 0 0 .021-.106V3.1a1 1 0 0 0-2 0v2.364a.955.955 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C6.867 15.018 5 15.614 5 16.807 5 17.4 5 18 5.538 18h12.924C19 18 19 17.4 19 16.807c0-1.193-1.867-1.789-1.867-4.175ZM8.823 19a3.453 3.453 0 0 0 6.354 0H8.823Z" />
                    </svg>

                    <span className={`${!open && "hidden"} origin-left duration-200`}>
                        Thông báo
                    </span>
                </a>
            </ul>

        </div>
    )
}
