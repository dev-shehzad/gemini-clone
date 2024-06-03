import { useState, useEffect } from "react";
import "./Sidebar.css";
import { FaAngleDown, FaAngleUp, FaChevronLeft } from "react-icons/fa";
import { IoChatboxOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

import { HiDotsVertical } from "react-icons/hi";
import { BsPin } from "react-icons/bs";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { GoPlus } from "react-icons/go";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { GiBackwardTime } from "react-icons/gi";
import { MdOutlineSettings } from "react-icons/md";

const Sidebar = ({
  // eslint-disable-next-line react/prop-types
  sidebarCollapse,
  // eslint-disable-next-line react/prop-types
  setSidebarCollapse,
  // eslint-disable-next-line react/prop-types
  sidebarOpen,
  // eslint-disable-next-line react/prop-types
  setSidebarOpen,
  // eslint-disable-next-line react/prop-types
  sidebarRef,
}) => {
  const [recentChats, setRecentChats] = useState([
    { id: 1, title: "Who Ensures Project" },
    { id: 2, title: "Team Meeting" },
    { id: 3, title: "Project Deadline" },
    { id: 4, title: "Design Review" },
    { id: 5, title: "Code Refactoring" },
  ]);

  const [visibleChats, setVisibleChats] = useState(3);
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [selectedChatId, setSelectedChatId] = useState(1);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        activeMenu &&
        !event.target.closest(".popup") &&
        !event.target.closest(".recent_chat_list_item_dots")
      ) {
        setActiveMenu(null);
      }
    };

    if (activeMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeMenu]);
  const handleSidebarCollapse = () => {
    setSidebarCollapse(!sidebarCollapse);
  };
  const toggleChats = () => {
    if (isExpanded) {
      setVisibleChats(3);
      setIsExpanded(false);
    } else {
      setVisibleChats(recentChats.length);
      setIsExpanded(true);
    }
  };

  const toggleMenu = (id) => {
    setActiveMenu(activeMenu === id ? null : id);
  };
  const selectChat = (id) => {
    setSelectedChatId(id);
  };
  const deleteChat = (id) => {
    setRecentChats(recentChats.filter((chat) => chat.id !== id));
    // Close the active menu
    setActiveMenu(null);
    // If the deleted chat was selected, reset the selection
    if (selectedChatId === id) {
      setSelectedChatId(null);
    }
  };
  return (
    <div
      ref={sidebarRef}
      className={`sidebar_container ${sidebarOpen ? "open" : ""} ${
        sidebarCollapse ? "collapse" : ""
      }`}
    >
      <div className="sidebar_header">
        <div className="sidebar_header_logo" onClick={handleSidebarCollapse}>
          <GiHamburgerMenu />
        </div>
      </div>
      <div className="sidebar_header_close">
        <div
          className="sidebar_header_logo_close"
          onClick={() => setSidebarOpen(false)}
        >
          <FaChevronLeft />
        </div>
      </div>
      <div className="new_chat">
        <GoPlus size={22} />
      </div>

      {!sidebarCollapse && (
        <div className="recent_chat">
          <div className="recent_chat_title">Recent</div>
          <div className="recent_chat_list">
            {recentChats.slice(0, visibleChats).map((chat) => (
              <div
                key={chat.id}
                className={`recent_chat_list_item ${
                  selectedChatId === chat.id ? "selected" : ""
                }`} // Add "selected" class if this chat is selected
                onClick={() => selectChat(chat.id)} // Update selected chat ID on click
              >
                <IoChatboxOutline />
                <div className="recent_chat_list_item_title">
                  {" "}
                  {chat.title.length > 15
                    ? chat.title.slice(0, 15) + "..."
                    : chat.title}
                </div>
                <HiDotsVertical
                  className="recent_chat_list_item_dots"
                  onClick={() => toggleMenu(chat.id)}
                />
                {activeMenu === chat.id && (
                  <div className="popup">
                    <div className="options">
                      <div className="option">
                        <BsPin />
                        <div className="option_title">Pin</div>
                      </div>
                      <div className="option">
                        <MdDriveFileRenameOutline />
                        <div className="option_title">Rename</div>
                      </div>
                      <div
                        className="option"
                        onClick={() => deleteChat(chat.id)}
                      >
                        <AiOutlineDelete />
                        <div className="option_title">Delete</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="show_more_recent" onClick={toggleChats}>
            {isExpanded ? <FaAngleUp /> : <FaAngleDown />}
            <div className="show_more_recent_title">
              {isExpanded ? "Show Less" : "Show More"}
            </div>
          </div>
        </div>
      )}

      <div className="sidebar_footer">
        <div className="sidebar_footer_item">
          <div className="sidebar_footer_item_icon">
            <IoIosHelpCircleOutline size={22} />
          </div>
          {!sidebarCollapse && (
            <div className="sidebar_footer_help_title">Help</div>
          )}
        </div>
        <div className="sidebar_footer_item">
          <div className="sidebar_footer_item_icon">
            <GiBackwardTime size={22} />
          </div>
          {!sidebarCollapse && (
            <div className="sidebar_footer_help_title">Activity</div>
          )}
        </div>
        <div className="sidebar_footer_item">
          <div className="sidebar_footer_item_icon">
            <MdOutlineSettings size={22} />
          </div>
          {!sidebarCollapse && (
            <div className="sidebar_footer_help_title">Settings</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
