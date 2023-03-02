import { useRef } from "react";
import { IoNotificationsOutline } from "react-icons/io5";
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

const NotificationsIcon = ({ onClick = () => {} }) => (
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
            <DropdownMenu CustomMenu={NotificationsIcon}>
              <ul style={{}}>
                <li>Notifications 2</li>
                <li>Notifications 1</li>
                <li>Notifications 3</li>
                <li>Notifications 4</li>
              </ul>
            </DropdownMenu>
          </li>
          

          <li>
            {/* User Dropdown Menu */}
            <DropdownMenu
              label={"Dropdown 1"}
              CustomMenu={UserIcon}
              dropdownContainerStyle={
                {
                  //padding: '15px 0'
                }
              }
            >
              <ul style={{}}>
                <li>Item 2</li>
                <li>Item 1</li>
                <li>Item 3</li>
                <li>Item 4</li>
              </ul>
            </DropdownMenu>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Header;
