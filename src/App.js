import { useState, useEffect } from "react";
import styles from "./App.less";
import Draggable from "./layouts/Draggable";
import { formatStyle } from "./utils";

function App() {
  const [canvas, setCanvas] = useState(null);

  const { cmps, style } = canvas || {};

  useEffect(() => {
    let cc = JSON.parse(
      '{"style":{"width":320,"height":568,"backgroundColor":"#ffffff00","backgroundImage":"http://150.158.30.131:8181/chuliu.jpeg","backgroundPosition":"center","backgroundSize":"cover","backgroundRepeat":"no-repeat","boxSizing":"content-box"},"cmps":[{"desc":"图片","data":{"type":2,"iconfont":"iconfont icon-image","value":"http://150.158.30.131:8181/tiger.png","style":{"top":355,"left":-15,"width":72,"height":86,"borderRadius":"0%","borderStyle":"none","borderWidth":"0","borderColor":"#fff","animationName":"jello","animationDelay":0,"animationDuration":1,"animationIterationCount":"infinite"}},"onlyKey":0.284866448554715},{"desc":"图片","data":{"type":2,"iconfont":"iconfont icon-image","value":"http://150.158.30.131:8181/hua.png","style":{"top":499,"left":155,"width":61,"height":66,"borderRadius":"0%","borderStyle":"none","borderWidth":"0","borderColor":"#fff"}},"onlyKey":0.04785683542864816}]}'
    );
    setCanvas(cc);
  }, []);

  return canvas ? (
    <div
      className={styles.main}
      style={{
        ...formatStyle(style),
        backgroundImage: `url(${style.backgroundImage})`,
      }}
    >
      {cmps.map((cmp, index) => (
        <Draggable
          key={cmp.onlyKey}
          cmp={cmp}
          index={index}
          canvasWidth={style.width}
          canvasHeight={style.height}
        />
      ))}
    </div>
  ) : (
    <div>
      <i className="iconfont icon-loading"></i>
    </div>
  );
}

export default App;
