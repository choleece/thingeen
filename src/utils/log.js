import { parseObj } from "./util";

const lg = (apiDes, data) => {
    console.log(`------${apiDes}------${JSON.stringify(parseObj(data))}`);
}

export default lg;