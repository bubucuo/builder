import {useState, useEffect} from "react";
import {getCanvas} from "./request/canvas";
import Cmp from "./components/Cmp";

function App() {
  const [canvas, setCanvas] = useState(null);

  const {cmps, style} = canvas || {};

  useEffect(() => {
    if (window.location.search) {
      getCanvas(window.location.search, (res) =>
        setCanvas(JSON.parse(res.content))
      );
    } else {
      alert("出错了！");
    }
  }, []);

  let transform = "";

  if (style?.width) {
    transform = `scale(${window.screen.width / style.width})`;
  }

  return canvas ? (
    <div
      id="canvas"
      style={{
        ...style,
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
