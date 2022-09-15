import React, {Component} from "react";
import classNames from "classnames";
import styles from "./index.less";
import Text from "../Text";
import Img from "../Img";

export const isTplSide = "TplSide";
export const isTextComponent = 1;
export const isImgComponent = 2;
export const isGraphComponent = 3;

// todo 拖拽、删除、改变层级关系等

// 按键小幅度移动的事件写在了Center中
export default class Cmp extends Component {
  render() {
    const {cmp, index} = this.props;
    const {style} = cmp;

    const {width, height} = style;
    const transform = `rotate(${style.transform}deg)`;

    const zIndex = index;

    return (
      <div
        id={cmp.key}
        className={styles.main}
        style={{
          ...style,
          transform,
          zIndex,
        }}>
        {/* 组件本身 , 注意如果是文本组件 ，如果处于选中状态，则目前处理是，textarea与这里的div Text重叠*/}
        <div
          className={styles.cmp}
          style={{
            width: style.width,
            height: style.height,
          }}>
          {cmp.type === isTextComponent && <Text {...cmp} />}
          {cmp.type === isImgComponent && <Img {...cmp} />}
        </div>
      </div>
    );
  }
}
