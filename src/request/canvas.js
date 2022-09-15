import axios from "axios";
import {common} from "./index";

// 查询
export function getCanvas(values, successCallback) {
  axios.get(end + "/api/web/content/get" + values).then((res) => {
    common(res, successCallback);
  });
}
