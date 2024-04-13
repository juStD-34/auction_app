import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'

export default function Profile() {
    return (
        <div className='flex'>
            <Sidebar />
            <div className="h-screen flex-1 p-7">
                <h1 class="mb-4 text-1xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-3xl">THÔNG TIN NGƯỜI BÁN</h1>

                <form>
                    <div class="grid gap-6 mb-6 md:grid-cols-2">
                        <div>
                            <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Họ và tên:</label>
                            <input type="text" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nguyễn Văn A" required />
                        </div>
                        <div>
                            <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Số điện thoại:</label>
                            <input type="tel" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0987654321" pattern="[0-9]{10}}" required />
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
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Địa chỉ Email:</label>
                        <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="dau_gia@email.com" required />
                    </div>
                    <div class="mb-6">
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mật khẩu mới:</label>
                        <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
                    </div>
                    <div class="mb-6">
                        <label for="confirm_password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Xác nhận mật khẩu:</label>
                        <input type="password" id="confirm_password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
                    </div>

                    <button type="submit" class="text-white bg-red-600 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Thay đổi thông tin</button>
                </form>


            </div>
        </div>
    )
}
