

import Head from 'next/head';
import NavBar from '../components/NavBar';

export default function Home() {


  return (
    <div style={{ minHeight: '100vh', background: '#000', color: '#fff', position: 'relative', overflow: 'hidden', margin: 0, padding: 0 }}>
      <Head>
        <title>Y.C — 陳彥齊 · Chen Yen-Chi</title>
        <meta name="description" content="陳彥齊（Chen Yen-Chi）的個人網站。創作橫跨遊戲引擎、聲音設計與即時互動，就讀台北藝術大學新媒體藝術系。" />
        <meta name="keywords" content="陳彥齊, Chen Yen-Chi, yc58, yc-58, yc58com, 陳彥齊yc, Y.C, 新媒體藝術, 台北藝術大學, 遊戲引擎, 聲音設計, 互動藝術, new media art, TNUA" />
        <meta property="og:title" content="Y.C — 陳彥齊 · Chen Yen-Chi" />
        <meta property="og:description" content="創作橫跨遊戲引擎、聲音設計與即時互動裝置的藝術家。" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://chenyanqib11262010.github.io/" />
        <link rel="canonical" href="https://chenyanqib11262010.github.io/" />
      </Head>

      <NavBar />
      <section style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', position: 'relative', zIndex: 1 }}>
        <h1 id="yc-flash" style={{
          fontSize: '6vw',
          fontWeight: 'bold',
          margin: 0,
          padding: 0,
          textShadow: '0 0 4px #fff, 0 0 8px #fff',
          textAlign: 'center',
          letterSpacing: '0.18em',
        }}>Y.C</h1>
        <style>{`
          @keyframes ycFlash {
            0%,100% { opacity: 1; }
            5%,15%,25%,35%,45%,55%,65%,75%,85%,95% { opacity: 0; }
            10%,20%,30%,40%,50%,60%,70%,80%,90% { opacity: 1; }
          }
          @keyframes ycGlow {
            0%,100% { text-shadow: 0 0 1px #fff, 0 0 2px #fff; }
            50% { text-shadow: 0 0 4px #fff, 0 0 8px #fff; }
          }
          #yc-flash {
            animation: ycFlash 1s linear, ycGlow 2.2s ease-in-out 1s infinite;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100vw;
            height: 100vh;
            position: absolute;
            left: 0;
            top: 0;
          }
        `}</style>
      </section>
    </div>
  );
}
