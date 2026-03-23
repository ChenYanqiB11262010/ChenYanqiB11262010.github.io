import Head from 'next/head';
import NavBar from '../components/NavBar';


export default function Contact() {


  return (
    <div style={{ minHeight: '100vh', background: '#000', color: '#fff', position: 'relative', overflow: 'hidden', margin: 0, padding: 0 }}>
      <Head>
        <title>聯絡 — 陳彥齊 · Chen Yen-Chi</title>
        <meta name="description" content="聯絡陳彥齊（Chen Yen-Chi）——藝術家、新媒體創作者。Email: gufu0508@gmail.com" />
        <meta property="og:title" content="聯絡 — 陳彥齊 · Chen Yen-Chi" />
        <meta property="og:url" content="https://chenyanqib11262010.github.io/contact" />
        <link rel="canonical" href="https://chenyanqib11262010.github.io/contact" />
      </Head>

      <NavBar />
      <div style={{ padding: '100px 24px', maxWidth: 900, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <h1 className="page-h1" style={{ fontSize: 40, fontWeight: '700', marginBottom: 48 }}>Contact</h1>

        <a
          href="mailto:gufu0508@gmail.com"
          style={{ display: 'block', fontSize: 18, color: '#fff', textDecoration: 'none', letterSpacing: '0.05em', marginBottom: 32 }}
        >
          gufu0508@gmail.com
        </a>

        <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
          {/* Instagram */}
          <a
            href="https://www.instagram.com/chilark_0.0/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            style={{ display: 'inline-block', color: '#fff', opacity: 0.75, transition: 'opacity 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.opacity = 1}
            onMouseLeave={e => e.currentTarget.style.opacity = 0.75}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/chen.yang.chi.2025"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            style={{ display: 'inline-block', color: '#fff', opacity: 0.75, transition: 'opacity 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.opacity = 1}
            onMouseLeave={e => e.currentTarget.style.opacity = 0.75}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>

          {/* YouTube */}
          <a
            href="https://www.youtube.com/@chenchichi-v7s/featured"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            style={{ display: 'inline-block', color: '#fff', opacity: 0.75, transition: 'opacity 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.opacity = 1}
            onMouseLeave={e => e.currentTarget.style.opacity = 0.75}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
              <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
