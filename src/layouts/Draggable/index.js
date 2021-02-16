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
    const {cmp, index} = this.props;

    const {style} = cmp.data;

    const top = style.top;
    const left = style.left;
    const width = style.width,
      height = style.height;

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
