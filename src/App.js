import {useState, useEffect} from "react";
import styles from "./App.less";
import Draggable from "./layouts/Draggable";
import {formatStyle} from "./utils";

function App() {
  const [canvas, setCanvas] = useState(null);

  const {cmps, style} = canvas || {};

  useEffect(() => {
    let cc = JSON.parse(
      // ! 元宵节
      //'{"style":{"width":320,"height":568,"backgroundColor":"#fff","backgroundImage":"https://img.tusij.com/ips_asset/15/48/39/56/79/2c/2ce035569e9220b4ca27c2d29f52977e.png!l800_i_w?auth_key=1639152000-0-0-6f62548d215a0bcc4548f6dacf9b88f9","backgroundPosition":"center","backgroundSize":"cover","backgroundRepeat":"no-repeat","boxSizing": "content-box"},"cmps":[{"desc":"图片","data":{"type":2,"value":"https://img.tusij.com/ips_asset/15/48/39/56/78/3f/3f1b670ab744dc8c895b3483e4fe7bfe.png!l800_i_w?auth_key=1639152000-0-0-5ad0647faf411b341c9f9e8d5b88b2f8","style":{"top":0,"left":0,"width":108,"height":193,"borderRadius":"0%"}},"onlyKey":0.059593328650888955},{"desc":"图片","data":{"type":2,"value":"https://img.tusij.com/ips_asset/15/48/39/56/74/7f/7f0b45e3009c7a22a0708415582d4635.png!l800_i_w?auth_key=1639152000-0-0-1b204be366ee0b8c146485295b52704f","style":{"top":16,"left":181,"width":137,"height":36,"borderRadius":"0%"}},"onlyKey":0.3393020198391947},{"desc":"图片","data":{"type":2,"value":"https://img.tusij.com/ips_asset/15/48/39/56/74/56/564896077cb72510ff3b920732d8c53c.png!l800_i_w?auth_key=1639152000-0-0-456d31b72cda757ae3945425296bd646","style":{"top":356,"left":54,"width":200,"height":100,"borderRadius":"0%"}},"onlyKey":0.12804288268725483},{"desc":"文本","data":{"type":0,"value":"元宵节","style":{"top":124,"left":129,"width":61,"height":181,"lineHeight":"60","fontSize":"60","fontWeight":"bold","color":"#fc0000ff","backgroundColor":"#ffffff00","textAlign":"left","borderRadius":"0%"}},"onlyKey":0.09559137553660801}]}'
      //元宵抽奖
      '{"style":{"width":320,"height":568,"backgroundColor":"#d12a2aff","backgroundImage":"https://img.tusij.com/ips_asset/16/11/10/44/54/a5/a57d2950001941a5e65fc3ac73fe8cb8.png!l800_i_w?auth_key=1639324800-0-0-d94f8946bfa0f7eca8fc8094a1516003","backgroundPosition":"center","backgroundSize":"cover","backgroundRepeat":"no-repeat","boxSizing":"content-box"},"cmps":[{"desc":"图片","data":{"type":2,"value":"https://img.tusij.com/ips_asset/16/11/10/44/54/09/09917bf7e35711c91d353fd7aebf2a38.png!l800_i_w?auth_key=1639324800-0-0-bd838424e74c24b3f0787ae4c4fb11d6","style":{"top":128,"left":112,"width":111,"height":146,"borderRadius":"0%"}},"onlyKey":0.8555276485757941},{"desc":"图片","data":{"type":2,"value":"https://img.tusij.com/ips_asset/16/11/10/44/53/ca/ca7ebd1a9683109e61f374e75e87fc85.png!l800_i_w?auth_key=1639324800-0-0-04d5239353f80379a2430dc74d1ac11a","style":{"top":32,"left":154,"width":139,"height":109,"borderRadius":"0%"}},"onlyKey":0.9280545997542136},{"desc":"图片","data":{"type":2,"value":"https://tva1.sinaimg.cn/large/008eGmZEly1gnpfp4bgkuj30ci06f3z7.jpg","style":{"top":207,"left":64,"width":200,"height":100,"borderRadius":"0%"}},"onlyKey":0.5707040859891097},{"desc":"图片","data":{"type":2,"value":"https://img.tusij.com/ips_asset/16/11/10/44/54/70/70913bd41742596a4a0dd68b088e6551.png!l800_i_w?auth_key=1639324800-0-0-2a8cd9567a9d2a9aa2ddd8acc4a24450","style":{"top":463,"left":-2,"width":319,"height":102,"borderRadius":"0%"}},"onlyKey":0.9564208214110723},{"desc":"图片","data":{"type":2,"value":"https://img.tusij.com/ips_asset/16/11/10/44/53/e7/e722646ec5596c852c8b193b2ef09db9.png!l800_i_w?auth_key=1639324800-0-0-0e5dcd8e08ad1e7f0de72c2dad23419c","style":{"top":400,"left":33,"width":135,"height":117,"borderRadius":"0%"}},"onlyKey":0.17963575080516958},{"desc":"图片","data":{"type":2,"value":"https://img.tusij.com/ips_asset/16/11/10/44/53/69/6917ec339fa98e4cb97cf596cc9179df.png!l800_i_w?auth_key=1639324800-0-0-31958bfca526c4f4f87f4363b8b16b61","style":{"top":458,"left":181,"width":120,"height":88,"borderRadius":"0%"}},"onlyKey":0.12644409828801928},{"desc":"按钮","data":{"type":1,"value":"立即领取","style":{"top":268,"left":125,"width":81,"height":25,"lineHeight":30,"fontSize":"20","fontWeight":"bold","color":"#e8c410ff","backgroundColor":"#ffffff00","textAlign":"center","borderRadius":"0%"}},"onlyKey":0.7510316444644778},{"desc":"图片","data":{"type":2,"value":"https://img.tusij.com/ips_asset/15/48/39/56/74/56/564896077cb72510ff3b920732d8c53c.png!l800_i_w?auth_key=1639152000-0-0-456d31b72cda757ae3945425296bd646","style":{"top":139,"left":233,"width":78,"height":55,"borderRadius":"0%"}},"onlyKey":0.4579364745456389},{"desc":"图片","data":{"type":2,"value":"https://img.tusij.com/ips_asset/16/11/10/44/54/a5/a57d2950001941a5e65fc3ac73fe8cb8.png!l800_i_w?auth_key=1639324800-0-0-d94f8946bfa0f7eca8fc8094a1516003","style":{"top":295,"left":-1,"width":340,"height":272,"borderRadius":"0%","borderColor":"#fff"}},"onlyKey":0.09410858481084006},{"desc":"图片","data":{"type":2,"value":"https://img.tusij.com/ips_asset/16/11/66/55/03/f6/f6b968f702f10b9b3a46504f1063a61f.png!l800_i_w?auth_key=1638633600-0-0-1301d0e3269d9765ee7b94af3a523aa1","style":{"top":319,"left":249,"width":50,"height":106,"borderRadius":"0%"}},"onlyKey":0.3118813798433606},{"desc":"图片","data":{"type":2,"value":"https://img.tusij.com/ips_asset/16/11/10/44/54/a5/a57d2950001941a5e65fc3ac73fe8cb8.png!l800_i_w?auth_key=1639324800-0-0-d94f8946bfa0f7eca8fc8094a1516003","style":{"top":-1,"left":-2,"width":321,"height":88,"borderRadius":"0%","borderColor":"#fff"}},"onlyKey":0.7351902635091521}]}'
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
