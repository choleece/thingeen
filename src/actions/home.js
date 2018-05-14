import {ADD_PAGE_INDEX, GEN_HARM_LIST} from "../constants/home";
import {batchedActions} from "./batched";

export const genHarmList = (ctx, pageIndex = 0, pageSize = 10) => {
    console.log(`----gen data...pageIndex: ${pageIndex} pageSize: ${pageSize}`);
    let records = [];
    for (let i = (pageIndex - 1) * pageSize ; i < pageIndex * pageSize; i++) {
        records.push({nameIndex: i});
    }
    batchedActions([{type: GEN_HARM_LIST, payload: records}, {type: ADD_PAGE_INDEX, payload: pageIndex}]);
};