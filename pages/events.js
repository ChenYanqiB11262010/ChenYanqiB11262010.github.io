import Head from 'next/head';
import { SITE_URL } from '../lib/site';
import NavBar from '../components/NavBar';

const events = [
  {
    id: 'daf-2026-haunting-sight',
    festival: '2026 臺北數位藝術節 · 灰色自動體',
    festivalEn: 'Taipei Digital Art Festival 2026',
    program: '音像之夜',
    programEn: 'Audiovisual Performance',
    date: '10.31',
    weekday: 'SAT',
    year: '2026',
    time: '20:00–23:00',
    venue: '未來生活館一樓大廳（臺北典藏植物園入口處）',
    venueEn: 'Future Life Pavilion 1F Lobby, Entrance to the Taipei Collectible Botanical Garden',
    title: '難忘殘景',
    titleEn: 'Haunting Sight',
    artists: '陳彥齊 × 周喚',
    artistsEn: 'Yen-Chi Chen × Huan Chou',
    category: '音像表演｜臺灣',
    categoryEn: 'Audiovisual Performance | Taiwan',
    description: [
      '本作以遊戲引擎和音像表演的形式構建一個近未來的景象，試圖展開近年越發進步的無人機和影像技術，其鏡頭與被觀察者的關係。',
      '故事發生在一座深夜中的巨大車站，一名神秘人物闖入，大規模改寫建築內的空間現實。保全系統的無人機受命追蹤並阻止這場「非法入侵」，透過自帶的攝影機以及技術追蹤入侵者。',
      '隨著投影的強光造成雜訊與故障，現場只留下被改寫的空間與逃逸的背影。',
    ],
    descriptionEn: [
      'This work explores the relationship between surveillance cameras, drones, and the people they observe through a game engine and audiovisual performance.',
      'The story takes place in a massive train station late at night. A mysterious figure breaks in and begins to alter the space. Security drones are deployed to track and stop the intruder through their cameras and tracking systems.',
      'As intense projection light causes noise and system failures, the altered space remains, along with the fleeting silhouette of the escaping figure.',
    ],
    link: 'https://festival.dac.taipei/opening-performance/',
  },
];

const labelStyle = { fontSize: 11, fontWeight: 600, letterSpacing: '0.25em', color: '#fff', textTransform: 'uppercase', margin: 0, fontFamily: 'Inter, sans-serif' };
const subLabelStyle = { fontSize: 10, letterSpacing: '0.2em', color: '#777', textTransform: 'uppercase', margin: '4px 0 0 0', fontWeight: 400 };

function MetaItem({ label, value, valueEn }) {
  return (
    <div style={{ marginBottom: 24 }}>
      <p style={{ fontSize: 10, letterSpacing: '0.2em', color: '#777', textTransform: 'uppercase', margin: '0 0 6px 0', fontWeight: 400 }}>
        {label}
      </p>
      <p style={{ fontSize: 14, color: '#fff', lineHeight: 1.6, margin: 0, letterSpacing: '0.04em' }}>
        {value}
      </p>
      {valueEn && (
        <p style={{ fontSize: 12, color: '#999', lineHeight: 1.6, margin: '4px 0 0 0', letterSpacing: '0.04em' }}>
          {valueEn}
        </p>
      )}
    </div>
  );
}

function EventEntry({ ev }) {
  return (
    <article style={{ borderTop: '1px solid rgba(255,255,255,0.12)', paddingTop: 40, marginBottom: 80 }}>

      {/* 活動名稱 */}
      <div style={{ marginBottom: 40 }}>
        <h2 style={labelStyle}>{ev.festival}</h2>
        <p style={subLabelStyle}>{ev.festivalEn} — {ev.program} {ev.programEn}</p>
      </div>

      <div className="event-grid" style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: 56 }}>

        {/* 左欄：日期與資訊 */}
        <aside>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 64, fontWeight: 600, lineHeight: 1, letterSpacing: '0.02em', margin: '0 0 8px 0', color: '#fff' }}>
            {ev.date}
          </p>
          <p style={{ fontSize: 12, letterSpacing: '0.25em', color: '#888', margin: '0 0 40px 0', textTransform: 'uppercase' }}>
            {ev.weekday} · {ev.year}
          </p>

          <MetaItem label="Time 時間" value={ev.time} />
          <MetaItem label="Venue 地點" value={ev.venue} valueEn={ev.venueEn} />

          <a
            href={ev.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              marginTop: 8,
              padding: '10px 18px',
              border: '1px solid rgba(255,255,255,0.25)',
              borderRadius: 2,
              color: '#fff',
              fontSize: 11,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              transition: 'background 0.3s ease, color 0.3s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#000'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#fff'; }}
          >
            Event Page ↗
          </a>
        </aside>

        {/* 右欄：作品 */}
        <div>
          <p style={{ fontSize: 11, letterSpacing: '0.2em', color: '#888', margin: '0 0 12px 0', textTransform: 'uppercase' }}>
            {ev.category} &nbsp;/&nbsp; {ev.categoryEn}
          </p>
          <h3 className="event-title" style={{ fontSize: 44, fontWeight: 700, lineHeight: 1.2, letterSpacing: '0.08em', margin: '0 0 6px 0', color: '#fff' }}>
            {ev.title}
          </h3>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 20, color: '#bbb', letterSpacing: '0.04em', margin: '0 0 20px 0', fontWeight: 400 }}>
            {ev.titleEn}
          </p>
          <p style={{ fontSize: 14, fontWeight: 700, letterSpacing: '0.2em', color: '#fff', margin: '0 0 48px 0' }}>
            {ev.artists} &nbsp;·&nbsp; <span style={{ fontWeight: 400, color: '#bbb', letterSpacing: '0.1em' }}>{ev.artistsEn}</span>
          </p>

          {/* 演出介紹 */}
          <section style={{ marginBottom: 48 }}>
            <div style={{ marginBottom: 24 }}>
              <h4 style={labelStyle}>演出介紹</h4>
              <p style={subLabelStyle}>Performance</p>
            </div>
            {ev.description.map((p, i) => (
              <p key={i} style={{ fontSize: 16, lineHeight: 2, color: '#fff', margin: '0 0 16px 0' }}>{p}</p>
            ))}
            <div style={{ height: 16 }} />
            {ev.descriptionEn.map((p, i) => (
              <p key={i} style={{ fontSize: 13, lineHeight: 1.9, color: '#bbb', margin: '0 0 14px 0', letterSpacing: '0.04em' }}>{p}</p>
            ))}
          </section>

          {/* 藝術家簡介（有填 bio 才顯示） */}
          {ev.bio && (
          <section style={{ marginBottom: 0 }}>
            <div style={{ marginBottom: 24 }}>
              <h4 style={labelStyle}>藝術家簡介</h4>
              <p style={subLabelStyle}>Biography</p>
            </div>
            <p style={{ fontSize: 16, lineHeight: 2, color: '#fff', margin: '0 0 30px 0' }}>{ev.bio}</p>
            <p style={{ fontSize: 13, lineHeight: 1.9, color: '#bbb', margin: 0, letterSpacing: '0.04em' }}>{ev.bioEn}</p>
          </section>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Events() {


  return (
    <div style={{ minHeight: '100vh', background: '#000', color: '#fff', position: 'relative', overflow: 'hidden', margin: 0, padding: 0 }}>
      <Head>
        <title>活動 — 陳彥齊 · Chen Yen-Chi</title>
        <meta name="description" content="陳彥齊（Chen Yen-Chi）的近期展覽、表演與活動資訊。2026 臺北數位藝術節音像之夜《難忘殘景》。" />
        <meta property="og:title" content="活動 — 陳彥齊 · Chen Yen-Chi" />
        <meta property="og:url" content={`${SITE_URL}/events`} />
        <link rel="canonical" href={`${SITE_URL}/events`} />
      </Head>

      <NavBar />
      <div className="page-container" style={{ padding: '100px 24px 80px', maxWidth: 1000, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <h1 className="page-h1" style={{ fontSize: 40, fontWeight: '700', marginBottom: 48 }}>Events</h1>
        {events.length === 0 ? (
          <p style={{ fontSize: 18, color: '#888', letterSpacing: '0.05em' }}>No upcoming events at this time.</p>
        ) : (
          events.map(ev => <EventEntry key={ev.id} ev={ev} />)
        )}
      </div>
    </div>
  );
}
