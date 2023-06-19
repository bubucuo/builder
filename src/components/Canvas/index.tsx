import Cmp, {isGroupComponent} from "src/components/Cmp";
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
        backgroundImage: `url(${(style as any).backgroundImage})`,
        transform,
        transformOrigin: "0 0",
        overflow: "hidden",
        margin: "auto",
      }}>
      {cmps.map((item: any, index: number) =>
        (item.type & isGroupComponent) === 0 ? (
          <Cmp key={item.key} cmp={item} index={index} />
        ) : null
      )}
    </div>
  );
}
