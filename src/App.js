import {useState, useEffect} from "react";
import styles from "./App.less";
import Draggable from "./layouts/Draggable";
import {formatStyle} from "./utils";

function App() {
  const [canvas, setCanvas] = useState(null);

  const {cmps, style} = canvas || {};

  useEffect(() => {
    let cc = JSON.parse(
      '{"style":{"width":320,"height":568,"backgroundColor":"#fff","backgroundImage":"https://img.tusij.com/ips_asset/15/48/39/56/79/2c/2ce035569e9220b4ca27c2d29f52977e.png!l800_i_w?auth_key=1639152000-0-0-6f62548d215a0bcc4548f6dacf9b88f9","backgroundPosition":"center","backgroundSize":"contain","backgroundRepeat":"no-repeat"},"cmps":[{"desc":"图片","data":{"type":2,"value":"https://img.tusij.com/ips_asset/15/48/39/56/78/3f/3f1b670ab744dc8c895b3483e4fe7bfe.png!l800_i_w?auth_key=1639152000-0-0-5ad0647faf411b341c9f9e8d5b88b2f8","style":{"top":0,"left":0,"width":108,"height":193,"borderRadius":"0%"}},"onlyKey":0.059593328650888955},{"desc":"图片","data":{"type":2,"value":"https://img.tusij.com/ips_asset/15/48/39/56/74/7f/7f0b45e3009c7a22a0708415582d4635.png!l800_i_w?auth_key=1639152000-0-0-1b204be366ee0b8c146485295b52704f","style":{"top":16,"left":181,"width":137,"height":36,"borderRadius":"0%"}},"onlyKey":0.3393020198391947},{"desc":"图片","data":{"type":2,"value":"https://img.tusij.com/ips_asset/15/48/39/56/74/56/564896077cb72510ff3b920732d8c53c.png!l800_i_w?auth_key=1639152000-0-0-456d31b72cda757ae3945425296bd646","style":{"top":356,"left":54,"width":200,"height":100,"borderRadius":"0%"}},"onlyKey":0.12804288268725483},{"desc":"文本","data":{"type":0,"value":"元宵节","style":{"top":124,"left":129,"width":61,"height":181,"lineHeight":"60","fontSize":"60","fontWeight":"bold","color":"#fc0000ff","backgroundColor":"#ffffff00","textAlign":"left","borderRadius":"0%"}},"onlyKey":0.09559137553660801}]}'
    );
    setCanvas(cc);
  }, []);

  return canvas ? (
    <div
      className={styles.main}
      style={{
        ...formatStyle(style),
        backgroundImage: `url(${style.backgroundImage})`,
      }}>
      {cmps.map((cmp, index) => (
        <Draggable key={cmp.onlyKey} cmp={cmp} index={index} />
      ))}
    </div>
  ) : (
    <div>
      <i className="iconfont icon-loading"></i>
    </div>
  );
}

export default App;
