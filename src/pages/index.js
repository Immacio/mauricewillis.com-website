import Head from "next/head";
import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Maurice Willis</title>
        <meta name="title" content="Maurice Willis" />
        <meta name="description" content="Maurice Willis - Developer Profile" />

        <meta itemprop="name" content="Maurice Willis" />
        <meta
          itemprop="description"
          content="Maurice Willis - Developer Profile"
        />
        <meta
          itemprop="image"
          content="https://www.mauricewillis.xyz/images/metaimage.png"
        />

        <meta property="og:url" content="https://www.mauricewillis.xyz" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Maurice Willis" />
        <meta
          property="og:description"
          content="Maurice Willis - Developer Profile"
        />
        <meta
          property="og:image"
          content="https://www.mauricewillis.xyz/images/metaimage.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Maurice Willis" />
        <meta
          name="twitter:description"
          content="Maurice Willis - Developer Profile"
        />
        <meta
          name="twitter:image"
          content="https://www.mauricewillis.xyz/images/metaimage.png"
        />
      </Head>
      <Layout>
        <Section grid>
          <Hero />
          <BgAnimation />
        </Section>
        <Timeline />
        <Projects />
        <Technologies />
      </Layout>
    </div>
  );
};

export default Home;
