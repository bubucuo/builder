import {useState, useEffect} from "react";
import {getCanvas} from "./request/canvas";
import Cmp from "./components/Cmp";

function App() {
  const [canvas, setCanvas] = useState(null);

  const {cmps, style} = canvas || {};

  useEffect(() => {
    let search = window.location.search || "?id=15";
    getCanvas(search, (res) => setCanvas(JSON.parse(res.content)));
  }, []);

  let transform = "",
    height;

  if (style?.width) {
    transform = `scale(${window.screen.width / style.width})`;
    height = (window.screen.width / style.width) * style.height;
  }

  return canvas ? (
    <div
      id="canvas"
      style={{
        ...style,
        // height,
        transform,
        transformOrigin: "0 0",
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
