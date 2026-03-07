import NavBar from '../../components/NavBar';


export default function DeepShop() {


    const images = [
        '/Deep shop/螢幕擷取畫面 2026-02-26 220109.png',
        '/Deep shop/螢幕擷取畫面 2026-02-26 220129.png',
        '/Deep shop/螢幕擷取畫面 2026-02-26 221605.png',
        '/Deep shop/螢幕擷取畫面 2026-02-26 221621.png',
        '/Deep shop/螢幕擷取畫面 2026-02-26 221640.png',
        '/Deep shop/螢幕擷取畫面 2026-02-26 221700.png',
    ];

    return (
        <div style={{ minHeight: '100vh', background: '#000', color: '#fff', position: 'relative', overflow: 'hidden', margin: 0, padding: 0 }}>


            <NavBar />

            <main style={{ maxWidth: 960, margin: '0 auto', padding: '100px 24px 80px 24px', position: 'relative', zIndex: 1 }}>

                {/* Title block */}
                <h1 style={{ fontSize: 42, fontWeight: 700, marginBottom: 6, letterSpacing: '0.02em', fontFamily: 'Inter, sans-serif' }}>
                    Deep Shop
                </h1>
                <p style={{ color: '#ccc', fontSize: 15, margin: '0 0 4px', fontFamily: 'Inter, sans-serif' }}>
                    陳彥齊
                </p>
                <p style={{ color: '#666', fontSize: 14, margin: '0 0 32px', fontFamily: 'Inter, sans-serif', letterSpacing: '0.05em' }}>
                    VR &nbsp;·&nbsp; 2024
                </p>

                {/* Hero image */}
                <div style={{
                    width: '100%',
                    borderRadius: 12,
                    overflow: 'hidden',
                    marginBottom: 24,
                    boxShadow: '0 0 60px rgba(255,255,255,0.06)',
                    background: '#111',
                }}>
                    <img
                        src="/Deep shop/deep shopcart.png"
                        alt="Deep Shop – main"
                        style={{ width: '100%', display: 'block', objectFit: 'cover' }}
                    />
                </div>

                {/* YouTube link button */}
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 64 }}>
                    <a
                        href="https://www.youtube.com/shorts/tAdOLjMpDfA"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 10,
                            padding: '14px 32px',
                            background: 'rgba(255,255,255,0.06)',
                            border: '1px solid rgba(255,255,255,0.15)',
                            borderRadius: 50,
                            color: '#fff',
                            fontSize: 15,
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 500,
                            textDecoration: 'none',
                            letterSpacing: '0.04em',
                            transition: 'background 0.25s, border-color 0.25s, transform 0.2s',
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.background = 'rgba(255,255,255,0.12)';
                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)';
                            e.currentTarget.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
                            e.currentTarget.style.transform = 'translateY(0)';
                        }}
                    >
                        {/* YouTube icon */}
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                        在 YouTube 觀看
                    </a>
                </div>

                {/* Images grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: 20,
                }}>
                    {images.map((src, i) => (
                        <div
                            key={i}
                            style={{
                                borderRadius: 10,
                                overflow: 'hidden',
                                background: '#111',
                                boxShadow: '0 0 30px rgba(255,255,255,0.04)',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.transform = 'scale(1.02)';
                                e.currentTarget.style.boxShadow = '0 0 40px rgba(255,255,255,0.12)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.transform = 'scale(1)';
                                e.currentTarget.style.boxShadow = '0 0 30px rgba(255,255,255,0.04)';
                            }}
                        >
                            <img
                                src={src}
                                alt={`Deep Shop – image ${i + 1}`}
                                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                            />
                        </div>
                    ))}
                </div>

            </main>
        </div>
    );
}
