import { httpRequest } from "../../utils/requestMethod";
import { getListStockFailure, getListStockStart, getListStockSuccess } from "../slice/stockSlice";

export const getStocks = async (dispatch: any,params:any) =>{
    dispatch(getListStockStart())
    try {
        const res = await httpRequest.get(
            `/LastestFinancialReports?symbol=${params.symbol}&type=${params.typeValue}&year=${params.year}&quarter=${params.quarterValue}&count=${params.count}`
          );
          dispatch(getListStockSuccess(res.data))
    }
     catch(err) {
        dispatch(getListStockFailure(err))
     }
}