import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { FiUser, FiLogOut, FiHelpCircle } from "react-icons/fi";
import { AiOutlineFileText, AiOutlineLogin, AiOutlineLogout } from "react-icons/ai";

export const menuList = [
  {
    text: "Profile",
    Icon: FiUser,
    href: "/profile",
  },
  {
    text: "Integrations",
    Icon: IoExtensionPuzzleOutline,
    href: "/settings",
  },
  {
    text: "Guide",
    Icon: AiOutlineFileText,
    href: "/guide",
  },
  {
    text: "Help Center",
    Icon: FiHelpCircle,
    href: "help-center",
  },
  {
    text: "Logout",
    Icon: FiLogOut,
    href: "logout",
  },
];

export const headerLoginMenuList = [
    {
      text: 'Login',
      Icon: AiOutlineLogin,
      href:'/login'
    },
    {
      text: 'Signup',
      Icon: AiOutlineLogout,
      href: '/signup'
    }
  ]


