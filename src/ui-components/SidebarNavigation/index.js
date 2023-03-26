import Logo from "../Logo";
import styles from "./SidebarNavigation.module.css";
import Link from "next/link";
import routes from "../../routes";
import { useRouter } from "next/router";
import { TbLogout } from "react-icons/tb";
import { BiChevronLeft } from "react-icons/bi";

const SidebarNavigation = ({
  sidebarMenuActive,
  toggleSidebarMenu
}) => {
  const router = useRouter();

  console.log({ router });
  
  return (
    <section className={`${styles.container} ${sidebarMenuActive ? styles['active'] : ''}`}>
      <button className={styles["sidebar-close-btn"]} onClick={toggleSidebarMenu}>
        x
      </button>
      <div className={styles['logo-container']}>
        <Logo />
        <div className={styles['logo-explain']}>AIO Dashboard</div>
      </div>
      <ul className={styles["sidebar-container"]}>
        {routes.map((page, index) => (
            <li key={index} className={`${styles["sidebar-menu-item"]} ${router.route === page.to ? styles['active'] : ''}`}>
              <Link href={page.to}>
                <page.Icon />
                <span>{page.name}</span>
              </Link>
            </li>
          ))} 
      </ul>

      <ul className={styles["sidebar-footer"]}>
        {/* <button onClick={toggleSidebarMenu}>close</button> */}
          <li className={styles["footer-item"]}> 
            <TbLogout />
            <span>Logouts</span>
          </li>
          
      </ul>
    </section>
  );
};

export default SidebarNavigation;
