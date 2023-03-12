import Logo from "../Logo";
import styles from "./SidebarNavigation.module.css";
import Link from "next/link";
import routes from "../../routes";
import { useRouter } from "next/router";

const SidebarNavigation = ({
  sidebarMenuActive,
  toggleSidebarMenu
}) => {
  const router = useRouter();

  console.log({ router });
  
  return (
    <section className={`${styles.container} ${sidebarMenuActive ? styles['active'] : ''}`}>
      
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

      <div>
        <button onClick={toggleSidebarMenu}>close</button>
      </div>
    </section>
  );
};

export default SidebarNavigation;
