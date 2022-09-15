export const end = "http://150.158.30.131:8989";

export function common(res, successCallback, failedCallback) {
  if (res.status === 200) {
    successCallback(res.data.result);
  } else if (res.status == 500) {
    typeof failedCallback === "function" ? failedCallback() : alert("失败！");
  }
}
