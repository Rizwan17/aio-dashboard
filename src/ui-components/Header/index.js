import { useRef } from "react";
import {
  IoNotificationsOutline,
} from "react-icons/io5";
import DropdownMenu from "../DropdownMenu";
import IconWrapper from "../IconWrapper";
import UserIcon from "../UserIcon";
import styles from "./Header.module.css";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import Link from "next/link";
import { headerLoginMenuList, menuList } from "../../data";

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

const MenuList = ({ href = "", Icon = null, text = "" }) => {
  return (
    <li>
      <Link href={href} className={styles["link"]}>
        {Icon && <Icon />}
        <span>{text}</span>
      </Link>
    </li>
  );
};

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

const NotificationList = ({ img = null, desc = "", datetime = "" }) => {
  return (
    <li>
      {img && <img src={img} alt="" />}
      <div className={styles["single-notification"]}>
        <p>{desc}</p>
        <p>{datetime}</p>
      </div>
    </li>
  );
};

const Header = ({ toggleSidebarMenu }) => {
  return (
    <section className={styles.container}>
      <div className={styles["left-items"]}>
        <ul>
          <li>
            <button
              className={styles["close-sidemenu"]}
              onClick={toggleSidebarMenu}
            >
              <HiOutlineMenuAlt1 />
            </button>
          </li>
          <li>
            <Link href={'/'}>
              Dashboard
            </Link>
          </li>
          <li>
            <Link href={'/'}>
              Users
            </Link>
          </li>
          <li>
            <Link href={'/'}>
              Settings
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles["right-items"]}>
        <ul className={styles["header-navigations"]}>

          <li>
            <DropdownMenu label={"Login/Signup"}>
              <ul className={styles["dropdown-menu"]}>
                {headerLoginMenuList.map((menu, index) => (
                  <MenuList
                    key={index} 
                    text={menu.text}
                    Icon={menu.Icon}
                    href={menu.href}
                  />
                ))}
              </ul>
            </DropdownMenu>
          </li>

          <li>
            <DropdownMenu 
              CustomMenu={NotificationsIcon} 
              count={4}
              screenCenter={false}
              >
              <div className={styles["notification-container"]}>
    
                <div className={`flex justify-sb ${styles["notification-header"]}`}>
                  <h3>Notifications</h3>
                  <p style={{ color: "blue", fontWeight: "bold" }}>
                    Mark all as Read
                  </p>
                </div>
                <div className={styles["notification-body"]}>
                  <ul className={styles["notification-tabs"]}>
                      <li className={styles['active']}>All</li>
                      <li>Following</li>
                      <li>Archeive</li>
                    </ul>
                  <ul className={styles["notification-tab"]}>
                    {[0, 1, 2].map((notification, i) => (
                      <NotificationList 
                        key={i}
                        img={`https://cdn.pixabay.com/photo/2017/03/19/20/19/ball-2157465__340.png`}
                        desc={'Jacob jone mwntion you in rewrite button tab'}
                        datetime={'1:12pm'}
                      />
                    ))}
                  
                </ul>
                </div>
                
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
              <ul className={styles["dropdown-menu"]}>
                {menuList.map((menu, index) => (
                  <MenuList
                    key={index}
                    text={menu.text}
                    Icon={menu.Icon}
                    href={menu.href}
                  />
                ))}
              </ul>
            </DropdownMenu>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Header;
