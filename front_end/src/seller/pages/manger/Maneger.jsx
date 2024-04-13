import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'

export default function Maneger() {
    return (
        <div className='flex'>
            <Sidebar />

            {/* Code ngoài Sidebar */}
            <div className="h-screen flex-1 p-7">
                <h1 class="mb-4 text-1xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-3xl">QUẢN LÝ PHIÊN ĐẤU GIÁ</h1>
                <section class="bg-gray-50 light:bg-gray-900 py-3 sm:py-5">
                    <div class="px-4 mx-auto max-w-screen-2xl lg:px-12">
                        <div class="relative overflow-hidden bg-white shadow-md light:bg-gray-800 sm:rounded-lg">
                            <div class="flex flex-col px-4 py-3 space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4">
                            </div>
                            <div class="overflow-x-auto">
                                <table class="w-full text-sm text-left text-gray-500 light:text-gray-400">
                                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 light:bg-gray-700 light:text-gray-400 border-b light:border-neutral-600">
                                        <tr>
                                            <th scope="col" class="p-4">
                                                <div class="flex items-center">
                                                    <label htmlFor="">STT</label>
                                                </div>
                                            </th>
                                            <th scope="col" class="px-4 py-3 border-x light:border-neutral-600">Tên sản phẩm</th>
                                            <th scope="col" class="px-4 py-3 border-x light:border-neutral-600">ID</th>
                                            <th scope="col" class="px-4 py-3 border-x light:border-neutral-600">Thời gian đấu giá còn lại</th>
                                            <th scope="col" class="px-4 py-3 border-x light:border-neutral-600">Giá khởi điểm</th>
                                            <th scope="col" class="px-4 py-3 border-x light:border-neutral-600">Giá hiện tại</th>
                                            <th scope="col" class="px-4 py-3 border-x light:border-neutral-600">Người đấu giá cao nhất</th>
                                            <th scope="col" class="px-4 py-3 border-x light:border-neutral-600">Dừng đấu giá ngay</th>
                                        </tr>
                                    </thead>

                                    {/* DATA mẫu */}

                                    <tbody>
                                        <tr class="border-b light:border-gray-600 hover:bg-gray-100 light:hover:bg-gray-700 border-b light:border-neutral-600">
                                            <td class="w-4 px-4 py-3">
                                                <div class="flex items-center">
                                                    <label htmlFor="">1</label>
                                                </div>
                                            </td>
                                            <td scope="row" class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap light:text-white border-x light:border-neutral-600">
                                                Monitor BenQ EX2710Q
                                            </td>
                                            <td class="px-4 py-2">
                                                <span class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap light:text-white">12345</span>
                                            </td>
                                            <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap light:text-white border-x light:border-neutral-600">
                                                <div class="ml-1 text-gray-500 light:text-gray-400">
                                                    <label className='time'>11:20</label>
                                                </div>
                                            </td>
                                            <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap light:text-white border-x light:border-neutral-600">140000</td>
                                            <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap light:text-white border-x light:border-neutral-600">160000</td>
                                            <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap light:text-white border-x light:border-neutral-600">
                                                <div class="flex items-center">

                                                    <span class="ml-1 text-gray-500 light:text-gray-400">Nguyễn Văn A</span>
                                                </div>
                                            </td>
                                            <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap light:text-white border-x light:border-neutral-600">
                                                <div class="flex items-center">
                                                    <button type="button" class="text-red-600 hover:text-white border border-red-600 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Dừng đấu giá</button>
                                                </div>
                                            </td>

                                        </tr>
                                    </tbody>

                                    {/* Hết Mẫu */}

                                </table>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
            {/* END */}
        </div>
    )
}
