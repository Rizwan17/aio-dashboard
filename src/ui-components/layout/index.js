import { useEffect, useState } from "react";
import Header from "../Header";
import SidebarNavigation from "../SidebarNavigation";

const Layout = ({ children }) => {
  const [sidebarMenuActive, setSidebarMenuActive] = useState(true);

  const toggleSidebarMenu = () => setSidebarMenuActive(!sidebarMenuActive);
  const showSidebarMenu = () => setSidebarMenuActive(true);

  useEffect(() => {
    setSidebarMenuActive(window.innerWidth > 768 ? true : false);
  }, []);

  return (
    <>
      <SidebarNavigation
        toggleSidebarMenu={toggleSidebarMenu}
        sidebarMenuActive={sidebarMenuActive}
      />
      <Header
        toggleSidebarMenu={toggleSidebarMenu}
        showSidebarMenu={showSidebarMenu}
      />
      <section className="content">
        {children}
      </section>
    </>
  );
};

export default Layout;
