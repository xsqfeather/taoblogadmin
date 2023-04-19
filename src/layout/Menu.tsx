import { useState } from "react";
import Box from "@mui/material/Box";

import {
  useTranslate,
  DashboardMenuItem,
  MenuItemLink,
  MenuProps,
  useSidebarState,
} from "react-admin";

import Admins from "../resources/admins";
import Tenants from "../resources/tenants";
import Users from "../resources/users";
import Wallets from "../resources/wallets";
import Conversations from "../resources/conversations";
import Ai_models from "../resources/ai_models";
import Wallet_records from "../resources/wallet_records";
import Articles from "../resources/articles";

type MenuName =
  | "menuProduct"
  | "menuNft"
  | "menuInterests"
  | "menuTenant"
  | "menuAdmin"
  | "menuUser"
  | "menuOrder"
  | "menuArticle"
  | "menuFinance"
  | "appSettings"
  | "menuWuAv";

const Menu = ({ dense = false }: MenuProps) => {
  const [state, setState] = useState({
    menuProduct: false,
    menuNft: false,
    menuInterests: false,
    menuTenant: false,
    menuAdmin: false,
    menuUser: false,
    appSettings: false,
    menuOrder: false,
    menuArticle: false,
    menuFinance: false,
    menuWuAv: false,
  });
  const translate = useTranslate();
  const [open] = useSidebarState();

  const handleToggle = (menu: MenuName) => {
    setState((state) => ({ ...state, [menu]: !state[menu] }));
  };

  return (
    <Box
      sx={{
        width: open ? 200 : 50,
        marginTop: 1,
        marginBottom: 1,
        transition: (theme) =>
          theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
      }}
    >
      <DashboardMenuItem />
      <MenuItemLink
        to="/articles"
        state={{ _scrollToTop: true }}
        primaryText={translate(`resources.articles.name`, {
          smart_count: 2,
        })}
        leftIcon={<Articles.icon />}
        dense={dense}
      />
    </Box>
  );
};

export default Menu;
