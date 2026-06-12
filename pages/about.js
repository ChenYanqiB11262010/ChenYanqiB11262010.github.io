import Head from 'next/head';
import NavBar from '../components/NavBar';


export default function About() {


  return (
    <div style={{ minHeight: '100vh', background: '#000', color: '#fff', position: 'relative', overflow: 'hidden', margin: 0, padding: 0 }}>
      <Head>
        <title>關於 — 陳彥齊 · Chen Yen-Chi</title>
        <meta name="description" content="陳彥齊（Chen Yen-Chi）是就讀台北藝術大學新媒體藝術系的藝術家，創作圍繞遊戲引擎、聲音設計、即時互動裝置與跨領域表演。" />
        <meta name="keywords" content="陳彥齊, Chen Yen-Chi, yc58, yc-58, yc58com, 陳彥齊yc, Y.C, 新媒體藝術, 遊戲引擎, 互動裝置, 聲音藝術" />
        <meta property="og:title" content="關於 — 陳彥齊 · Chen Yen-Chi" />
        <meta property="og:description" content="就讀台北藝術大學新媒體藝術系的藝術家。" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://chenyanqib11262010.github.io/about" />
        <link rel="canonical" href="https://chenyanqib11262010.github.io/about" />
      </Head>

      <NavBar />

      {/* ── Hero：突破窄欄，全寬照片 ── */}
      <div className="about-hero" style={{ maxWidth: 1000, margin: '0 auto', padding: '120px 48px 0', position: 'relative', zIndex: 1 }}>
        <div style={{ position: 'relative', marginBottom: 56 }}>

          {/* 照片 */}
          <div style={{ position: 'relative', overflow: 'hidden' }}>
            <img
              src="/YCPHOTO.JPG"
              alt="Y.C 陳彥齊"
              className="hero-photo"
              style={{
                width: '100%',
                height: 580,
                objectFit: 'cover',
                objectPosition: 'center 20%',
                display: 'block',
                mixBlendMode: 'luminosity',
                filter: 'contrast(1.08) brightness(0.9)',
              }}
            />
            {/* 底部遮罩 */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to top, #000 0%, rgba(0,0,0,0.35) 38%, transparent 65%)',
              pointerEvents: 'none',
            }} />
            {/* Y.C 壓在照片左下 */}
            <div className="hero-title" style={{ position: 'absolute', bottom: 24, left: 48 }}>
              <h1
                className="hero-title"
                style={{
                  fontSize: 96,
                  fontWeight: 700,
                  letterSpacing: '0.03em',
                  lineHeight: 1,
                  margin: 0,
                  color: '#fff',
                }}
              >
                Y.C
              </h1>
            </div>
          </div>

        </div>
      </div>

      <main className="about-main" style={{ maxWidth: 1000, margin: '0 auto', padding: '48px 48px 80px', position: 'relative', zIndex: 1 }}>

        {/* 簡介 */}
        <section style={{ marginBottom: 48 }}>
          {/* 名字：粗體，放在內文上方 */}
          <p className="about-name" style={{ fontSize: 14, fontWeight: 700, letterSpacing: '0.2em', color: '#fff', textTransform: 'uppercase', margin: '0 0 32px 0' }}>
            Chen Yen-Chi &nbsp;·&nbsp; 陳彥齊
          </p>

          <p style={{ fontSize: 16, lineHeight: 2, color: '#fff', marginBottom: 16 }}>
            創作主要圍繞在遊戲引擎、聲音與即時互動之間。
          </p>
          <p style={{ fontSize: 16, lineHeight: 2, color: '#fff', marginBottom: 16 }}>
            目前就讀於台北藝術大學新媒體藝術系，關心數位身體、控制權與社群演算法等議題。
          </p>
          <p style={{ fontSize: 16, lineHeight: 2, color: '#fff', marginBottom: 16 }}>
            作品多半結合遊戲機制、聲音設計與表演情境，形式介於裝置、表演與遊戲之間。有時是可被操作的系統，有時是正在發生的現場事件。對於錯位的角色、被留下的數位痕跡，以及人與機器之間不穩定的關係特別感興趣。
          </p>
          <p style={{ fontSize: 16, lineHeight: 2, color: '#fff', marginBottom: 48 }}>
            除了個人創作，也參與跨領域合作，嘗試將遊戲、聲音與現場演出轉化為一種能被即時干擾、破壞與重組的經驗。
          </p>

          {/* 英文簡介 */}
          <p style={{ fontSize: 13, lineHeight: 1.9, color: '#bbb', marginBottom: 14, letterSpacing: '0.04em' }}>
            The practice centers on the intersection of game engines, sound, and real-time interaction.
          </p>
          <p style={{ fontSize: 13, lineHeight: 1.9, color: '#bbb', marginBottom: 14, letterSpacing: '0.04em' }}>
            Currently studying in the Department of New Media Art at Taipei National University of the Arts, the work engages with topics such as the digital body, systems of control, and social media algorithms.
          </p>
          <p style={{ fontSize: 13, lineHeight: 1.9, color: '#bbb', marginBottom: 14, letterSpacing: '0.04em' }}>
            The projects often combine game mechanics, sound design, and performative situations, existing somewhere between installation, performance, and games. At times they function as interactive systems that can be operated by participants; at other times they unfold as live events that occur in real time. Particular interest lies in displaced roles, digital traces left behind by users, and the unstable relationships between humans and machines.
          </p>
          <p style={{ fontSize: 13, lineHeight: 1.9, color: '#bbb', margin: 0, letterSpacing: '0.04em' }}>
            In addition to individual practice, interdisciplinary collaborations are also part of the process, exploring how games, sound, and live performance can be transformed into experiences that can be interrupted, disrupted, and reconfigured in real time.
          </p>
        </section>

        {/* 分隔線 */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.12)', marginBottom: 56 }} />

        {/* 經歷 */}
        <section style={{ marginBottom: 56 }}>
          <div style={{ marginBottom: 32 }}>
            <h2 style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.25em', color: '#fff', textTransform: 'uppercase', margin: 0 }}>
              經歷
            </h2>
            <p style={{ fontSize: 10, letterSpacing: '0.2em', color: '#777', textTransform: 'uppercase', margin: '4px 0 0 0', fontWeight: 400 }}>
              Experience
            </p>
          </div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {[
              { year: '2026', title: '台中國家歌劇院 Lab X 青年創作工作室—延展實境', en: 'NTT Lab X The Young Artists\' Atelier — XR' },
              { year: '2026', title: '北藝大新媒系111級畢業展《在那出現之前》開幕表演', en: 'Opening Performance — TNUA Department of New Media Art Graduation Exhibition 2026 "Before Zero"' },
              { year: '2025', title: '關渡光藝術節《幻響》', en: 'Kuandu Light Art Festival — Illusonic' },
              { year: '2025', title: '噪流實習', en: 'Fluid Noise Internship' },
              { year: '2025', title: '第二屆北藝新媒卓越獎開幕表演', en: 'Opening Performance — TNUA New Media Excellence Award' },
            ].map((item, i) => (
              <li key={i} style={{ display: 'flex', gap: 28, alignItems: 'flex-start', paddingBottom: 24, marginBottom: 0 }}>
                <span style={{ fontSize: 11, color: '#888', fontWeight: 400, letterSpacing: '0.08em', minWidth: 40, flexShrink: 0, paddingTop: 3 }}>
                  {item.year}
                </span>
                <div>
                  <span style={{ display: 'block', fontSize: 15, color: '#fff', lineHeight: 1.5, letterSpacing: '0.04em' }}>
                    {item.title}
                  </span>
                  <span style={{ display: 'block', fontSize: 12, color: '#bbb', lineHeight: 1.6, letterSpacing: '0.06em', marginTop: 4 }}>
                    {item.en}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* 分隔線 */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', marginBottom: 56 }} />

        {/* 協作 */}
        <section style={{ marginBottom: 80 }}>
          <div style={{ marginBottom: 32 }}>
            <h2 style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.25em', color: '#fff', textTransform: 'uppercase', margin: 0 }}>
              協作
            </h2>
            <p style={{ fontSize: 10, letterSpacing: '0.2em', color: '#777', textTransform: 'uppercase', margin: '4px 0 0 0', fontWeight: 400 }}>
              Collaborations
            </p>
          </div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {[
              {
                year: '2026',
                title: '第四屆桃園科技表演藝術獎：樓頂《自動販賣機》／影像技術美術',
                en: 'The 4th Taoyuan Technology Performing Arts Award: Rooftop "Vending Machine"',
                enRole: 'Video Technical Artist',
              },
              {
                year: '2025',
                title: '臺灣聲響實驗室－IRCAM「聲鬥陣」進駐計畫／影像設計與協力',
                en: 'Taiwan Sound Lab × IRCAM — Residency Program',
                enRole: 'Visual Design & Production Support',
              },
            ].map((item, i) => (
              <li key={i} style={{ display: 'flex', gap: 28, alignItems: 'flex-start', paddingBottom: 24, marginBottom: 0 }}>
                <span style={{ fontSize: 11, color: '#888', fontWeight: 400, letterSpacing: '0.08em', minWidth: 40, flexShrink: 0, paddingTop: 3 }}>
                  {item.year}
                </span>
                <div>
                  <span style={{ display: 'block', fontSize: 15, color: '#fff', lineHeight: 1.5, letterSpacing: '0.04em' }}>
                    {item.title}
                  </span>
                  <span style={{ display: 'block', fontSize: 12, color: '#bbb', lineHeight: 1.6, letterSpacing: '0.06em', marginTop: 4 }}>
                    {item.en} — {item.enRole}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </section>

      </main>
    </div>
  );
}
