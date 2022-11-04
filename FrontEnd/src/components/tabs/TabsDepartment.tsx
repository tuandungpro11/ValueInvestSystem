import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TableCollapsible from "../table";
import { useSelector } from "react-redux";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
const TabPanel = (props: TabPanelProps) => {
  const { children, value, index } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box sx={{ p: 3, height: "100%" }}>
          <Typography component={"div"}>{children}</Typography>
        </Box>
      )}
    </Box>
  );
};

function TabsDepartment() {
  const tabs = useSelector((state: any) =>
    state.stock.listStock?.filter((el: any) => el.ParentID === -1)
  );
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {tabs?.map((tab: any) => (
            <Tab key={tab.ID} label={tab.Name} />
          ))}
        </Tabs>
      </Box>
      {tabs?.map((tab: any, index: number) => (
        <TabPanel key={index} value={value} index={index}>
          <TableCollapsible id={tab.ID} period={tab.Values} />
        </TabPanel>
      ))}
    </Box>
  );
}

export default TabsDepartment;
