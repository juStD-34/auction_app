import React from "react";

import NavigationBar from "./components/Navbar";
import Introduction from "./components/Introduction";
import Preview from "./components/Preview";
import Footers from "./components/Footer";
import LoginModal from "./login/LoginModal";

function Home() {
  const [loginPopup, setLoginPopup] = React.useState(false);
  const toggleLoginPopup = () => setLoginPopup(!loginPopup);

  return (
    <>
      <div className={loginPopup ? "blur-sm" : ""}>
        <NavigationBar
          loginPopup={loginPopup}
          toggleLoginPopup={toggleLoginPopup}
        />
        <Introduction />
        <Preview />
        <Footers />
      </div>
      <LoginModal loginPopup={loginPopup} toggleLoginPopup={toggleLoginPopup} />
    </>
  );
}

export default Home;
