import Head from 'next/head';
import NavBar from '../components/NavBar';
import Link from 'next/link';

const works = [
  {
    slug: 'local-position',
    title: 'localPosition',
    subtitle: 'XR',
    artist: '陳彥齊 * 譚可瑩',
    year: '2026',
    thumb: '/localPosition/螢幕擷取畫面 2026-06-16 005503.png',
  },
  {
    slug: 'the-mission',
    title: 'The Mission',
    subtitle: 'Audio Visual · Animation',
    artist: '陳彥齊 * 周喚',
    year: '2025',
    thumb: '/The Mission/螢幕擷取畫面 2026-02-26 181323.png',
  },
  {
    slug: 'deep-shop',
    title: 'Deep Shop',
    subtitle: 'XR',
    artist: '陳彥齊',
    year: '2024',
    thumb: '/Deep shop/deep shopcart.png',
  },
  {
    slug: 'liminal-loop',
    title: 'Liminal Recurrence',
    subtitle: 'Games, homemade controller',
    artist: '陳彥齊*周喚',
    year: '2024',
    thumb: '/liminal loop/Screenshot 2025-06-19 214718.png',
  },
];

export default function Portfolio() {


  return (
    <div style={{ minHeight: '100vh', background: '#000', color: '#fff', position: 'relative', overflow: 'hidden', margin: 0, padding: 0 }}>
      <Head>
        <title>作品集 — 陳彥齊 · Chen Yen-Chi</title>
        <meta name="description" content="陳彥齊（Chen Yen-Chi）的作品集，包括 The Mission、Deep Shop、Liminal Recurrence 等遊戲引擎與互動藝術創作。" />
        <meta name="keywords" content="陳彥齊作品, Chen Yen-Chi portfolio, The Mission, Deep Shop, Liminal Recurrence, VR藝術, 互動裝置" />
        <meta property="og:title" content="作品集 — 陳彥齊 · Chen Yen-Chi" />
        <meta property="og:description" content="遊戲引擎、聲音設計與即時互動藝術作品集。" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://chenyanqib11262010.github.io/portfolio" />
        <link rel="canonical" href="https://chenyanqib11262010.github.io/portfolio" />
      </Head>

      <NavBar />
      <section style={{ maxWidth: 960, margin: '0 auto', padding: '100px 24px 80px 24px', position: 'relative', zIndex: 1 }}>
        <h1 className="page-h1" style={{ fontSize: 40, fontWeight: 700, marginBottom: 48, fontFamily: 'Inter, sans-serif', letterSpacing: '0.02em' }}>
          Works
        </h1>

        <div className="works-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 32 }}>
          {works.map((work) => (
            <Link
              key={work.slug}
              href={`/works/${work.slug}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div
                style={{
                  background: 'rgba(20,20,20,0.75)',
                  borderRadius: 12,
                  overflow: 'hidden',
                  border: '1px solid rgba(255,255,255,0.06)',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
                  boxShadow: '0 0 30px rgba(0,0,0,0.4)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 16px 48px rgba(255,255,255,0.08)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(0,0,0,0.4)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                }}
              >
                {/* Thumbnail */}
                <div style={{ width: '100%', aspectRatio: '16/9', overflow: 'hidden', background: '#111' }}>
                  <img
                    src={work.thumb}
                    alt={work.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease' }}
                  />
                </div>

                {/* Info */}
                <div style={{ padding: '20px 24px 24px' }}>
                  <p style={{ margin: '0 0 6px 0', fontSize: 13, color: '#666', letterSpacing: '0.1em', fontFamily: 'Inter, sans-serif', textTransform: 'uppercase' }}>
                    {work.year}
                  </p>
                  <h2 style={{ margin: '0 0 4px 0', fontSize: 22, fontWeight: 600, fontFamily: 'Inter, sans-serif', letterSpacing: '0.01em' }}>
                    {work.title}
                  </h2>
                  {work.artist && (
                    <p style={{ margin: '0 0 4px 0', fontSize: 13, color: '#aaa', fontFamily: 'Inter, sans-serif' }}>
                      {work.artist}
                    </p>
                  )}
                  <p style={{ margin: 0, fontSize: 14, color: '#777', fontFamily: 'Inter, sans-serif' }}>
                    {work.subtitle}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
