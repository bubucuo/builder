import axios from "axios";
import {common, end} from "./index";

// 查询
export function getCanvas(values, successCallback, failedCallback) {
  axios.get(end + "/api/web/content/get" + values).then((res) => {
    common(res, successCallback);
  });
}
