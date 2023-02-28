import Header from "../Header";
import SidebarNavigation from "../SidebarNavigation";

const Layout = ({
    children
}) => {
    return (
        <>
            <SidebarNavigation />
            <Header />
            {children}
        </>
    );
}

export default Layout;