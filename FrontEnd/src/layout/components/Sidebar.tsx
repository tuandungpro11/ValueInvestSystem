import React, { useEffect, useState } from "react";
import {
  ListItemIcon,
  ListItemText,
  Collapse,
  List,
  ListItemButton,
} from "@mui/material";
import {
  Dashboard,
  Home,
  StarBorder,
  ExpandLess,
  ExpandMore,
  HomeRepairService,
  CorporateFare,
} from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
const listMenu: any = [
  {
    id: 1,
    icon: <Home color="primary" />,
    title: "Home",
    link: "home",
  },
  {
    id: 2,
    icon: <Dashboard color="secondary" />,
    title: "Dashboard",
    subMenu: [
      {
        idChild: 1,
        itemIcon: <HomeRepairService />,
        itemTitle: "Doanh Nghiệp",
        link: "doanhnghiep",
      },
      {
        idChild: 2,
        itemIcon: <CorporateFare />,
        itemTitle: "Ngành",
        link: "nganh",
      },
      {
        idChild: 3,
        itemIcon: <StarBorder />,
        itemTitle: "Vĩ Mô",
        link: "rate",
      },
    ],
  },
];

function Sidebar(open: any) {
  const openMenuKey: any = localStorage.getItem("openmenu");
  const [openMenu, setOpenMenu] = useState<number>(JSON.parse(openMenuKey));
  const location = useLocation();
  let activeMenu = location.pathname.slice(1);

  const handleClick = (idMenu: number) => {
    openMenu === idMenu ? setOpenMenu(0) : setOpenMenu(idMenu);
  };
  useEffect(() => {
    localStorage.setItem("openmenu", JSON.stringify(openMenu));
  });
  return (
    <>
      {listMenu?.map((menuItem: any) => (
        <List
          sx={{
            width: "100%",
            bgcolor: "background.paper",
          }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          key={menuItem.id}
        >
          {!menuItem.link ? (
            <ListItemButton onClick={() => handleClick(menuItem.id)}>
              <ListItemIcon>{menuItem.icon}</ListItemIcon>
              <ListItemText
                primary={menuItem.title}
                sx={{ fontWeight: "500" }}
              />
              {menuItem.subMenu &&
                (openMenu === menuItem.id ? <ExpandLess /> : <ExpandMore />)}
            </ListItemButton>
          ) : (
            <Link to={`/${menuItem.link}`} className="navLink">
              <ListItemButton selected={activeMenu === menuItem.link}>
                <ListItemIcon>{menuItem.icon}</ListItemIcon>
                <ListItemText primary={menuItem.title} />
              </ListItemButton>
            </Link>
          )}
          <Collapse in={openMenu === menuItem.id} timeout="auto" unmountOnExit>
            {menuItem.subMenu?.map((subMenuItem: any, index: number) => (
              <List component="div" disablePadding key={index}>
                <Link to={`/${subMenuItem.link}`} className="navLink">
                  <ListItemButton
                    sx={{ pl: 4 }}
                    selected={activeMenu === subMenuItem.link}
                  >
                    <ListItemIcon>{subMenuItem.itemIcon}</ListItemIcon>
                    <ListItemText primary={subMenuItem.itemTitle} />
                  </ListItemButton>
                </Link>
              </List>
            ))}
          </Collapse>
        </List>
      ))}
    </>
  );
}

export default Sidebar;
