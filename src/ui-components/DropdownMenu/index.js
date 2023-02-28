import { useEffect, useRef, useState } from "react";
import UserIcon from "../UserIcon";
import styles from "./dropdown.module.css";

const DropdownMenu = ({
  children,
  label = null,
  CustomMenu = UserIcon,
  dropdownContainerStyle = {},
}) => {
  const [dropdownActive, setDropdownActive] = useState(false);
  const dropdownRef = useRef(null);
  const menuRef = useRef(null);

  const handleDropdownMenu = () => {
    setDropdownActive(!dropdownActive);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      const isDropdownClicked = dropdownRef.current.contains(e.target);
      const isMenuClicked = menuRef.current.contains(e.target);

      if (
        dropdownRef.current !== null &&
        (isDropdownClicked || isMenuClicked)
      ) {
        setDropdownActive(true);
      } else {
        setDropdownActive(false);
      }
    };

    if (dropdownActive) {
      window.addEventListener("click", handleOutsideClick);
    }

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [dropdownActive]);

  return (
    <div className={styles["dropdown-menu"]}>
      <div ref={menuRef} style={{ cursor: "pointer" }}>
        {CustomMenu ? (
          <CustomMenu onClick={handleDropdownMenu} />
        ) : label ? (
          <span onClick={handleDropdownMenu}>{label}</span>
        ) : null}
      </div>

      <div
        ref={dropdownRef}
        className={`${styles["dropdown-container"]} ${
          dropdownActive ? styles["active"] : ""
        }`}
        style={dropdownContainerStyle}
      >
        <div style={{ background: '#fff' }}>{children}</div>
        
        {/* <ul className={styles['menu-ul']}>
            <li onClick={() => alert(1)}>Item 1</li>
            <li onClick={() => alert(2)}>Item 2</li>
            <li onClick={() => alert(3)}>Item 3</li>
        </ul> */}
      </div>
    </div>
  );
};

export default DropdownMenu;
