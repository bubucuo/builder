import Cmp, {ICmpWithKey, isGroupComponent} from "src/components/Cmp";
import styles from "./index.module.css";

export default function Canvas({canvas}: any) {
  const {style, cmps} = canvas;

  let width = style?.width;
  let transform;

  if (width < 1000) {
    // 如果设置的是移动端，但是是在PC显示的，控制下最大宽度
    let maxWidth = window.screen.width;
    if (maxWidth > 1000) {
      maxWidth = width;
    }
    transform = `scale(${maxWidth / width})`;
  }

  return (
    <div
      className={styles.main}
      style={{
        ...style,
        width,
        transform,
        transformOrigin: "0 0",
        overflow: "hidden",
        margin: "auto",
        backgroundImage: `url(${(style as any).backgroundImage})`,
      }}>
      {cmps.map((cmp: ICmpWithKey, index: number) => {
        return (cmp.type & isGroupComponent) === 0 ? (
          <Cmp key={cmp.key} cmp={cmp} index={index} />
        ) : null;
      })}
    </div>
  );
}
