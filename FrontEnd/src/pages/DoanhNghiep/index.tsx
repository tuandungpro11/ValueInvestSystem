import React, { useEffect } from "react";
import TabsDepartment from "../../components/tabs/TabsDepartment";
import { useDispatch } from "react-redux";
import { getStocks } from "../../redux/api/stock";

function ConCern() {
  const dispatch = useDispatch();
  useEffect(() => {
    getStocks(dispatch, {
      symbol: "TCB",
      typeValue: 1,
      year: 2020,
      quarterValue: 1,
      count: 5,
    });
  }, [dispatch]);
  // const tabs: any = data?.filter((el: any) => el.ParentID === -1);
  return (
    <div>
      <TabsDepartment />
    </div>
  );
}

export default React.memo(ConCern);
