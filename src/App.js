import {useState, useEffect} from "react";
import {getCanvas} from "./request/canvas";
import Cmp from "./components/Cmp";

function App() {
  const [canvas, setCanvas] = useState(null);

  const {cmps, style} = canvas || {};

  useEffect(() => {
    let search = window.location.search || "?id=15";
    getCanvas(search, (res) => {
      setCanvas(JSON.parse(res.content));
      document.title = res.title || "精通React";
    });
  }, []);

  let transform = "";
  let width = style?.width;
  if (width < 1000) {
    // 如果设置的是移动端，但是是在PC显示的，控制下最大宽度
    let maxWidth = window.screen.width;
    if (maxWidth > 1000) {
      maxWidth = width;
    }
    transform = `scale(${maxWidth / width})`;
  }

  return canvas ? (
    <div
      id="canvas"
      style={{
        ...style,
        width,
        transform,
        transformOrigin: "0 0",
        overflow: "hidden",
        margin: "auto",
      }}>
      {/* 组件区域 */}
      {cmps.map((cmp, index) => (
        <Cmp key={cmp.key} cmp={cmp} index={index} />
      ))}
    </div>
  ) : (
    <div>
      <i className="iconfont icon-loading">加载中...</i>
    </div>
  );
}

export default App;
