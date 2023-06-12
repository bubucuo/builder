import {Button, Img, Input, Text} from "./CmpDetail";
import {memo} from "react";
import axios from "axios";

export const isTextComponent = 1;
export const isImgComponent = 2;
export const isGraphComponent = 3;
export const isFormComponent = 0b01000000;
export const isFormComponent_Input = isFormComponent | 1; // 65
export const isFormComponent_Button = isFormComponent | 2;

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

const fetch = async ({url, afterSuccess, popMsg, link}: any) => {
  const res: any = await axios.post(url, {});
  if (res?.code === 200) {
    // 成功
    if (afterSuccess === "pop") {
      // 弹窗提示
      alert(popMsg || res.data.msg);
    } else {
      // 跳转
      window.location.href = link;
    }
  } else {
    alert(res.data.msg);
  }
};

const Cmp = memo((props: ICmpProps) => {
  const {cmp, index} = props;
  const {style, onClick} = cmp;

  const transform = `rotate(${style.transform}deg)`;

  return (
    <div
      className={"main"}
      style={{
        ...style,
        transform,
        zIndex: index,
        animationPlayState: "running",
      }}
      onClick={() => {
        if (typeof onClick === "string") {
          window.location.href = onClick;
        } else if (typeof onClick === "object") {
          // 表单请求
          fetch(onClick);
        }
      }}>
      {cmp.type === isTextComponent && <Text {...cmp} />}
      {cmp.type === isImgComponent && <Img {...cmp} />}
      {/* 图形组件不需要渲染内容 */}

      {/* 表单组件 */}

      {cmp.type === isFormComponent_Input && <Input {...cmp} />}
      {cmp.type === isFormComponent_Button && <Button value={cmp.value} />}
    </div>
  );
});

export default Cmp;
