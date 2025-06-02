import Canvas from "src/components/Canvas";
import ClientOnly from "src/components/ClientOnly";

export default function ID({ data }: any) {
  return (
    <ClientOnly>
      {data ? (
        <Canvas canvas={JSON.parse(data.content)} />
      ) : (
        <div className="err">
          id 信息有误，请检查之后重新输入，或者微信联系作者「bubucuo_sy」
        </div>
      )}
    </ClientOnly>
  );
}

export const getStaticPaths = async () => {
  try {
    const res = await fetch(
      "http://localhost:4000/api/web/content/publishList"
    );

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();

    // 调试日志 - 查看实际获取的数据结构
    console.log("API Response:", data);

    if (!data?.result || !Array.isArray(data.result)) {
      throw new Error("Invalid data format from API");
    }

    // 正确格式：对象数组，每个对象包含 params 对象
    const paths = data.result.map((id: string) => ({
      params: { id: String(id) }, // 确保id是字符串
    }));

    // 调试日志 - 查看生成的paths
    console.log("Generated paths:", paths);

    return {
      paths,
      fallback: true, // 或者 'blocking' 根据你的需求
    };
  } catch (error) {
    console.error("Error in getStaticPaths:", error);
    // 出错时返回空路径，防止构建失败
    return {
      paths: [],
      fallback: true,
    };
  }
};

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
// 此函数在服务端的构建阶段调用，不会在客户端调用，因此这里相当于是直接查询数据库 SSG
export async function getStaticProps({ params }: { params: { id: string } }) {
  const res = await fetch(
    "http://localhost:4000/api/web/content/get?id=" + (params.id || 2)
  );
  const data = await res.json();

  return {
    props: {
      data: data.result.publish && !data.result.isDelete && data.result,
    },
  };
}
