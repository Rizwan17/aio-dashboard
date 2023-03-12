import { useRef } from "react";
import { IoNotificationsOutline, IoExtensionPuzzleOutline, IoSettingsOutline } from "react-icons/io5";
import { FiUser, FiLogOut, FiHelpCircle } from "react-icons/fi";
import { AiOutlineFileText } from "react-icons/ai";
import DropdownMenu from "../DropdownMenu";
import IconWrapper from "../IconWrapper";
import UserIcon from "../UserIcon";
import styles from "./Header.module.css";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

/*

Dropdown Menu Guideline and Instructions
Dropdown Menu props are
    label: string
    CustomMenu: React Component
    dropdownContainerStyle: style object
    children: React Component

    Note: label or CustomMenu only one can be used at a time
    CustomMenu has higher priority if CustomMenu has passed as
    props then label wont work but if CustomMenu has not given
    then label will be visible


*/

const NotificationsIcon = ({ onClick = () => { } }) => (
  <IconWrapper
    onClick={onClick}
    style={{
      top: "2px",
      fontSize: "20px",
    }}
  >
    <IoNotificationsOutline />
  </IconWrapper>
);

const Header = ({
    toggleSidebarMenu
}) => {
  return (
    <section className={styles.container}>
      <div className={styles["left-items"]}>
        <button className={styles["close-sidemenu"]} onClick={toggleSidebarMenu}>
            <HiOutlineMenuAlt1 />
        </button>
        
      </div>
      <div className={styles["right-items"]}>
        <ul className={styles["header-navigations"]}>
          <li>
            <DropdownMenu  CustomMenu={NotificationsIcon}>
              <div className={styles["dropdown"]}>
              <div style={{boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>
              <div style={{display:'flex',padding: '20px 20px', justifyContent: 'space-between'}}><h3>Notifications</h3><p style={{color: 'blue', fontWeight: 'bold'}}>Mark all as Read</p></div>
              <div >
                <ul className={styles["notification-menu"]}>
                  <li>All</li>
                  <li>Following</li>
                  <li>Archeive</li>
                </ul>
              </div>
              </div>
              <ul className={styles["notification-tab"]}>
                <li><img src="https://cdn.pixabay.com/photo/2017/03/19/20/19/ball-2157465__340.png" alt="" /><div className={styles["single-notification"]}><p>Jacob jone mwntion you in rewrite button tab</p>
                  <p>1:12pm</p></div></li>
                <li><img src="https://cdn.pixabay.com/photo/2017/03/19/20/19/ball-2157465__340.png" alt="" /><div className={styles["single-notification"]}><p>Jacob jone mwntion you in rewrite button tab</p>
                  <p>1:12pm</p></div></li>
                <li><img src="https://cdn.pixabay.com/photo/2017/03/19/20/19/ball-2157465__340.png" alt="" /><div className={styles["single-notification"]}><p>Jacob jone mwntion you in rewrite button tab</p>
                  <p>1:12pm</p></div></li>
                <li><img src="https://cdn.pixabay.com/photo/2017/03/19/20/19/ball-2157465__340.png" alt="" /><div className={styles["single-notification"]}><p>Jacob jone mwntion you in rewrite button tab</p>
                  <p>1:12pm</p></div></li>
                
              </ul>
              </div>
            </DropdownMenu>
          </li>


          <li>
            {/* User Dropdown Menu */}
            <DropdownMenu
              label={"Dropdown 1"}
              CustomMenu={UserIcon}
              dropdownContainerStyle={
                {
                  // padding: '15px 0'
                }
              }
            >
              <ul className={styles["dropdown-menu"]} >
                <li><FiUser /><span>Profile</span></li>
                <li><IoExtensionPuzzleOutline /><span>Integrations</span></li>
                <li><IoSettingsOutline /><span>Settings</span></li>
                <li><AiOutlineFileText /><span>Guide</span></li>
                <li><FiHelpCircle /><span>Help Center</span></li>
                <li><FiLogOut /><span>Logout</span></li>
              </ul>
            </DropdownMenu>
          </li>

        </ul>
      </div>
    </section>
  );
};

export default Header;
