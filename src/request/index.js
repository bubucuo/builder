export const end = "https://www.bubucuo.cn/";

export function common(res, successCallback, failedCallback) {
  if (res.status === 200) {
    successCallback(res.data.result);
  } else if (res.status == 500) {
    typeof failedCallback === "function" ? failedCallback() : alert("失败！");
  }
}
