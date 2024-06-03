import "./Navbar.css";

import { RxAvatar } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <div className="navbar">
      <div className="navbar_left">
        <GiHamburgerMenu
          className="navbar_hamburger"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        />
        <div className="navbar_title">Gemini</div>
      </div>

      <div className="navbar_avatar">
        <RxAvatar size={34} />
      </div>
    </div>
  );
};

export default Navbar;
