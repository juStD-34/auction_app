import React, { useState, useCallback, useRef } from "react";
import Sidebar from '../../components/sidebar/Sidebar'
import { Button, Modal } from "flowbite-react";
import LoginModal from "../../../home/login/LoginModal"


export default function Profile() {
    const [loginPopup, setLoginPopup] = useState(false);
    const [openError, setopenError] = useState(false);

    const nameRef = useRef("");
    const passwordRef = useRef("");
    const emailRef = useRef("");
    const phoneRef = useRef("");
    const tinhRef = useRef("");
    const huyenRef = useRef("");
    const xaRef = useRef("");
    const addressRef = useRef("");
    const [type, setType] = React.useState("");

    const handleTypeChange = (e) => {
        setType(e.target.value);
    };

    const toggleLoginPopup = () => setLoginPopup(!loginPopup);

    const formHandler = useCallback(
        () => (event) => {
            event.preventDefault();

            const data = {
                name: nameRef.current?.value,
                password: passwordRef.current?.value,
                phone: phoneRef.current?.value,
                tinh: tinhRef.current?.value,
                huyen: huyenRef.current?.value,
                xa: xaRef.current?.value,
                address: addressRef.current?.value,
                email: emailRef.current?.value,

                type: type,
            };
            setopenError(true);

            console.log(data);
        },
        [type]
    );

    return (
        <div>
            <div className={loginPopup ? "blur-sm " : ""}>
                
                <div className='flex'onSubmit={formHandler()}> 
                    <Sidebar />
                    <div className="h-screen flex-1 p-7 ml-72">
                        <h1 class="mb-4 text-1xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-3xl">THÔNG TIN NGƯỜI BÁN</h1>

                        <form>
                            <div class="grid gap-6 mb-6 md:grid-cols-2">
                                <div>
                                    <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Họ và tên:</label>
                                    <input type="text" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nguyễn Văn A" required ref={nameRef}/>
                                </div>
                                <div>
                                    <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Số điện thoại:</label>
                                    <input type="tel" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0987654321" required ref={phoneRef}/>
                                </div>
                            </div>
                            <label for="address" class="block mb-2 text-sm font-semibold  text-gray-900 dark:text-white">Địa chỉ người bán:</label>

                            <div class="grid gap-6 mb-6 md:grid-cols-3">

                                <div>
                                    <label for="Province" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Tỉnh / Thành phố:</label>
                                    <input type="text" id="Province" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Hà Nội" required ref={tinhRef} />
                                </div>
                                <div>
                                    <label for="District" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Quận / Huyện:</label>
                                    <input type="text" id="District" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Đống Đa" required ref={huyenRef}/>
                                </div>
                                <div>
                                    <label for="Commune" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Xã / Phường:</label>
                                    <input type="text" id="Commune" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Khương Thượng" required ref={xaRef} />
                                </div>

                            </div>
                            <div class="mb-6">
                                <label for="address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Tên đường, ngõ, số nhà:</label>
                                <input type="text" id="address" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Số 1, ngõ 123, phố Khương Thượng" required ref={addressRef}/>
                            </div>
                            <div class="mb-6">
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Địa chỉ Email:</label>
                                <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="dau_gia@email.com" required ref={emailRef}/>
                            </div>
                            <div class="mb-6">
                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Mật khẩu mới:</label>
                                <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required ref={passwordRef} />
                            </div>
                            <button type="submit" class="text-white bg-red-600 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Thay đổi thông tin</button>
                        </form>


                    </div>
                </div>
            </div>
            <LoginModal loginPopup={loginPopup} toggleLoginPopup={toggleLoginPopup} />
            {/* Thông báo lỗi */}
            <Modal
                dismissible
                show={openError}
                onClose={() => setopenError(true)}
                size="lg"
            >
                <Modal.Body>
                    <div className="space-y-6 text-center">
                        <p className="text-3xl leading-relaxed font-semibold">
                            Cập nhật thông tin thất bại
                        </p>
                        <p className="text-xl leading-relaxed">
                            Lỗi gì gì đó á, thử lại sau nhé
                        </p>
                    </div>
                </Modal.Body>
                <Modal.Footer className="flex justify-center">
                    <Button color="failure" onClick={() => setopenError(false)}>
                        OK
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>

    )
}
