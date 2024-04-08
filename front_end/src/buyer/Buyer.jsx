import React from "react";

import NavbarUser from "../shared/Navbar";
import Footer from "../home/components/Footer";
import Preview from "../home/components/Preview";
import Introduction from "../home/components/Introduction";
export default function () {
  return (
    <>
        <NavbarUser />
        <Introduction/>
        <Preview/>
        <Footer />
    </>
  );
}

