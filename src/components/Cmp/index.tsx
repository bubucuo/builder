import {Img, Text} from "./CmpDetail";
import {memo} from "react";
// import styles from "./index.module.css";

export const isTextComponent = 1;
export const isImgComponent = 2;
export const isGraphComponent = 3;

export type Style = any;
export interface ICmp {
  type: number;
  style: Style;
  value: string;
  onClick?: string;
}

export interface ICmpWithKey extends ICmp {
  key: number;
}

interface ICmpProps {
  cmp: ICmpWithKey;
  index: number;
}

const Cmp = memo((props: ICmpProps) => {
  const {cmp, index} = props;
  const {style, onClick} = cmp;

  const transform = `rotate(${style.transform}deg)`;

  return (
    <div
      className={style.main}
      style={{
        ...style,
        transform,
        zIndex: index,
        animationPlayState: "running",
      }}
      onClick={() => {
        if (onClick) {
          window.location.href = onClick;
        }
      }}>
      {cmp.type === isTextComponent && <Text {...cmp} />}
      {cmp.type === isImgComponent && <Img {...cmp} />}
      {/* 图形组件不需要渲染内容 */}
    </div>
  );
});

export default Cmp;
