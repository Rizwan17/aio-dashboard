import Logo from "../Logo";
import styles from "./SidebarNavigation.module.css";
import Link from "next/link";
import routes from "../../routes";

const SidebarNavigation = () => {
  return (
    <section className={styles.container}>
      <Logo />

      <ul className={styles["sidebar-container"]}>
        {routes.map((page, index) => (
            <li key={index} className={styles["sidebar-menu-item"]}>
              <Link href={page.to}>
                <page.Icon />
                <span>{page.name}</span>
              </Link>
            </li>
          ))} 
      </ul>
    </section>
  );
};

export default SidebarNavigation;
