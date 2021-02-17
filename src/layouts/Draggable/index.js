import {Component} from "react";

// 画布组件
import TextComponent from "../../components/TextComponent";
import ButtonComponent from "../../components/ButtonComponent";
import ImgComponent from "../../components/ImgComponent";
import classnames from "classnames";
import styles from "./index.less";

export const isTextComponent = 0;
export const isButtonComponent = 1;
export const isImgComponent = 2;

export default class Draggable extends Component {
  constructor(props, context) {
    super(props);
  }

  render() {
    const {cmp, index, canvasWidth, canvasHeight} = this.props;

    let style = cmp.data.style;

    // console.log("style.left", style); //sy-log
    // 吸右
    if (style.width > canvasWidth) {
      style.width = (style.width * 100) / canvasWidth + "%";
    } else if (Math.abs(style.width - canvasWidth) < 7) {
      style.width = "100%";
    } else if (
      Math.abs(style.left) > 5 &&
      Math.abs(style.left + style.width - canvasWidth) < 5
    ) {
      console.log("哈哈哈", Math.abs(style.left)); //sy-log
      style.right = 0;
      delete style.left;
    } else if (Math.abs(style.left + style.width / 2 - canvasWidth / 2) < 7) {
      // 左右中间
      style.left = "50%";
      style.marginLeft = "-" + style.width / 2 + "px";
    }

    if (style.height > canvasHeight) {
      style.height = (style.height * 100) / canvasHeight + "%";
    } else if (Math.abs(style.top + style.height - canvasHeight) < 5) {
      // 吸底
      style.bottom = 0;
      delete style.top;
    }

    return (
      <div className={styles.main} style={{...style, zIndex: index}}>
        {getComponent(cmp)}
      </div>
    );
  }
}

function getComponent(cmp) {
  const {data} = cmp;
  let res = null;
  switch (data.type) {
    case isTextComponent:
      res = <TextComponent {...data} />;
      break;
    case isButtonComponent:
      res = <ButtonComponent {...data} />;
      break;
    case isImgComponent:
      res = <ImgComponent {...data} />;
      break;
    default:
      res = null;
  }
  return res;
}
