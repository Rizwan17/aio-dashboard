import { useEffect, useRef, useState } from "react";
import styles from "./dropdown.module.css";
import { IoIosClose } from "react-icons/io";

const DropdownMenu = ({
  children,
  label = null,
  CustomMenu = null,
  dropdownContainerStyle = {},
  count = null,
  screenCenter = true,
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
        {count && (
          <span className={styles["notification-counts"]}>{count}</span>
        )}
      </div>

      <div
        ref={dropdownRef}
        className={`${styles["dropdown-container"]} ${
          dropdownActive ? styles["active"] : ""
        }`}
        style={dropdownContainerStyle}
      >
        {screenCenter ? (
          <div className={styles["dropdown-sm-container"]}>
            <button
              className={styles["dropdown-close-btn"]}
              onClick={() => setDropdownActive(false)}
            >
              <IoIosClose />
            </button>
            {children}
          </div>
        ) : (
          <div className={''}>
            <button
              className={styles["dropdown-close-btn"]}
              onClick={() => setDropdownActive(false)}
            >
              <IoIosClose />
            </button>
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

export default DropdownMenu;
