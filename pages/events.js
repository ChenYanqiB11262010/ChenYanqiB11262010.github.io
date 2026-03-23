import Head from 'next/head';
import NavBar from '../components/NavBar';


export default function Events() {


  return (
    <div style={{ minHeight: '100vh', background: '#000', color: '#fff', position: 'relative', overflow: 'hidden', margin: 0, padding: 0 }}>
      <Head>
        <title>活動 — 陳彥齊 · Chen Yen-Chi</title>
        <meta name="description" content="陳彥齊（Chen Yen-Chi）的近期展覽、表演與活動資訊。" />
        <meta property="og:title" content="活動 — 陳彥齊 · Chen Yen-Chi" />
        <meta property="og:url" content="https://chenyanqib11262010.github.io/events" />
        <link rel="canonical" href="https://chenyanqib11262010.github.io/events" />
      </Head>

      <NavBar />
      <div style={{ padding: '100px 24px', maxWidth: 900, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <h1 className="page-h1" style={{ fontSize: 40, fontWeight: '700', marginBottom: 48 }}>Events</h1>
        <p style={{ fontSize: 18, color: '#888', letterSpacing: '0.05em' }}>No upcoming events at this time.</p>
      </div>
    </div>
  );
}
