import { useState, useEffect } from "react";
import Cmp from "./components/Cmp";

function App() {
  const [data, setData] = useState({
    loading: true,
    canvas: { title: "bubucuo", style: {}, cmps: [] },
    err: "",
  });

  const { loading, err, canvas } = data;
  const { cmps, style } = canvas || {};

  const getData = async () => {
    let search = window.location.search || "?id=2";

    const res = await fetch(
      "http://template.codebus.tech/api/web/content/get" + search
    );
    const data = await res.json();

    if (typeof data?.result?.content === "string") {
      const canvas = JSON.parse(data.result.content);
      setData({
        loading: false,
        canvas,
        err: "",
      });
      document.title = canvas.title;
    } else {
      setData({
        ...data,
        loading: false,
        err: "id 信息有误，请检查之后重新输入，或者微信联系作者「bubucuo_sy」",
      });
    }
  };
  useEffect(() => {
    getData();
  }, []);

  let transform = "";
  let width = (style as any)?.width;
  if (width < 1000) {
    // 如果设置的是移动端，但是是在PC显示的，控制下最大宽度
    let maxWidth = window.screen.width;
    if (maxWidth > 1000) {
      maxWidth = width;
    }
    transform = `scale(${maxWidth / width})`;
  }

  if (loading) {
    return (
      <div>
        <i className="iconfont icon-loading">加载中...</i>
      </div>
    );
  }

  if (err) {
    return <div className="err">{err}</div>;
  }

  return (
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
      {cmps.map((cmp: any, index) => (
        <Cmp key={cmp.key} cmp={cmp} index={index} />
      ))}
    </div>
  );
}

export default App;
