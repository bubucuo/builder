import {Button, Img, Input, Text} from "./CmpDetail";
import {memo} from "react";
import axios from "axios";
import styles from "./index.module.css";

// 组件类型
export const isTextComponent = 0b00000001; // 1
export const isImgComponent = 0b00000010; // 2
export const isGraphComponent = 0b00000011; // 3
export const isGroupComponent = 0b00001000; // 8

// 表单组件
export const isFormComponent_Input = 0b10000000; //128
export const isFormComponent_Button = 0b01000000; // 64
export const isFormComponent = isFormComponent_Input | isFormComponent_Button;

export type Style = any;
export interface ICmp {
  type: number;
  style: Style;
  value: string;
  onClick?: string;
}

export interface ICmpWithKey extends ICmp {
  key: number;
  // 表单组件
  formKey: string;
}

interface ICmpProps {
  cmp: ICmpWithKey;
  index: number;
}

const fetch = async ({url, afterSuccess, popMsg, link}: any, params: any) => {
  const res: any = await axios.post(url, params);
  if (res?.data?.code === 200) {
    // 成功
    if (afterSuccess === "pop") {
      // 弹窗提示
      alert(popMsg || res.data.msg);
    } else {
      // 跳转
      window.location.href = link;
    }
  } else {
    alert(res?.data?.msg || "error");
  }
};

const Cmp = memo((props: ICmpProps) => {
  const {cmp, index} = props;
  const {key, formKey} = cmp;
  const {style, onClick} = cmp;

  const transform = `rotate(${style.transform}deg)`;

  const submit = () => {
    if (typeof onClick === "string") {
      window.location.href = onClick;
    } else if (typeof onClick === "object") {
      // form submit
      const params: any = {};

      const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll(
        `.input${formKey}`
      );

      inputs.forEach((input) => {
        const inputName = input.name;
        params[inputName] = input.value;
      });

      // 表单请求
      fetch(onClick, params);
    }
  };

  return (
    <div
      id={"cmp" + key}
      className={styles.main}
      style={{
        ...style,
        transform,
        zIndex: index,
        animationPlayState: "running",
      }}
      onClick={submit}>
      {cmp.type === isTextComponent && <Text {...cmp} />}
      {cmp.type === isImgComponent && <Img {...cmp} />}
      {/* 图形组件不需要渲染内容 */}

      {/* 表单组件 */}
      {cmp.type === isFormComponent_Input && <Input {...cmp} />}
      {cmp.type === isFormComponent_Button && <Button value={cmp.value} />}
    </div>
  );
});

Cmp.displayName = "Cmp";

export default Cmp;
