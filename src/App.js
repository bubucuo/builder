import {useState, useEffect} from "react";
import styles from "./App.less";
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

  return canvas ? (
    <div
      id="canvas"
      className={styles.canvas}
      style={{
        ...style,
      }}>
      <div className={styles.cmps}>
        {/* 组件区域 */}
        {cmps.map((cmp, index) => (
          <Cmp key={cmp.key} cmp={cmp} index={index} />
        ))}
      </div>
    </div>
  ) : (
    <div>
      <i className="iconfont icon-loading">加载中...</i>
    </div>
  );
}

export default App;
