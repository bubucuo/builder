import Head from "next/head";
import {Inter} from "next/font/google";
import styles from "src/styles/Home.module.css";
import Cmp from "src/components/Cmp";
import {useEffect, useState} from "react";

const inter = Inter({subsets: ["latin"]});

export default function Home({data}: any) {
  const {style, cmps} = JSON.parse(data.content);

  const [transform, setTransform] = useState("");

  let width = style?.width;
  useEffect(() => {
    if (width < 1000) {
      // 如果设置的是移动端，但是是在PC显示的，控制下最大宽度
      let maxWidth = window.screen.width;
      if (maxWidth > 1000) {
        maxWidth = width;
      }
      setTransform(`scale(${maxWidth / width})`);
    }
  }, []);
  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${styles.main} ${inter.className}`}
        style={{
          ...style,
          backgroundImage: `url(${style.backgroundImage})`,
          width,
          transform,
          transformOrigin: "0 0",
          overflow: "hidden",
          margin: "auto",
        }}>
        {cmps.map((item: any, index: number) => (
          <Cmp key={item.key} cmp={item} index={index} />
        ))}
      </main>
    </>
  );
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(
    "http://builder.codebus.tech/api/web/content/get?id=190"
  );
  const data = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      data: data.result,
    },
  };
}