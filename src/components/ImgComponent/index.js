import {formatStyle} from "../../utils";
import styles from "./index.less";

export default function ImgComponent(data) {
  const {style} = data;

  return (
    <img
      className={styles.main}
      style={formatStyle(style, false)}
      src={data.value}
      alt=""
    />
  );
}
