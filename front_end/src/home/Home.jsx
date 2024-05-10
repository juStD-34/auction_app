import React from "react";

import NavigationBar from "./components/Navbar";
import NavbarUser from "../shared/Navbar";

import Introduction from "./components/Introduction";
import Preview from "./components/Preview";
import Footers from "./components/Footer";
import LoginModal from "./login/LoginModal";
import SearchModal from "../search/SearchModal";

function Home() {
  const [loginPopup, setLoginPopup] = React.useState(false);
  const toggleLoginPopup = () => setLoginPopup(!loginPopup);
  const {getLogin} = require('../home/login/Auth');
  const isLoggedIn = getLogin();

  const [searchPopup, setSearchPopup] = React.useState(false);
  const toggleSearch = () => setSearchPopup(!searchPopup);

  return (
    <>
      <div className={loginPopup ? "blur-sm " : ""}>
      {isLoggedIn === "Login" ? <NavbarUser /> : <NavigationBar toggleLoginPopup={toggleLoginPopup} toggleSearch={toggleSearch}/>}
        <Introduction />
        <Preview />
        <Footers />
      </div>
      <LoginModal loginPopup={loginPopup} toggleLoginPopup={toggleLoginPopup} />
      <SearchModal searchPopup={searchPopup} toggleSearch={toggleSearch} />
    </>
  );
}

export default Home;
