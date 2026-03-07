import NavBar from '../../components/NavBar';


export default function TheMission() {


    const images = [
        '/The Mission/螢幕擷取畫面 2026-02-26 181323.png',
        '/The Mission/螢幕擷取畫面 2026-02-26 181347.png',
        '/The Mission/螢幕擷取畫面 2026-02-26 181426.png',
        '/The Mission/螢幕擷取畫面 2026-02-26 225234.png',
        '/The Mission/螢幕擷取畫面 2026-03-06 131605.png',
        '/The Mission/電動橘皮_影像記錄_03.jpg',
    ];

    return (
        <div style={{ minHeight: '100vh', background: '#000', color: '#fff', position: 'relative', overflow: 'hidden', margin: 0, padding: 0 }}>


            <NavBar />

            <main style={{ maxWidth: 960, margin: '0 auto', padding: '100px 24px 80px 24px', position: 'relative', zIndex: 1 }}>

                {/* Title block */}
                <h1 style={{ fontSize: 42, fontWeight: 700, marginBottom: 6, letterSpacing: '0.02em', fontFamily: 'Inter, sans-serif' }}>
                    The Mission
                </h1>
                <p style={{ color: '#ccc', fontSize: 15, margin: '0 0 4px', fontFamily: 'Inter, sans-serif' }}>
                    陳彥齊 * 周喚
                </p>
                <p style={{ color: '#666', fontSize: 14, margin: '0 0 32px', fontFamily: 'Inter, sans-serif', letterSpacing: '0.05em' }}>
                    Audio Visual &nbsp;·&nbsp; Animation &nbsp;·&nbsp; 2025
                </p>

                {/* YouTube embed */}
                <div style={{
                    width: '100%',
                    aspectRatio: '16/9',
                    borderRadius: 12,
                    overflow: 'hidden',
                    marginBottom: 64,
                    boxShadow: '0 0 60px rgba(255,255,255,0.06)',
                    background: '#111',
                }}>
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/4InYI-jjTD0"
                        title="The Mission"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        style={{ display: 'block', width: '100%', height: '100%' }}
                    />
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
                                alt={`The Mission – image ${i + 1}`}
                                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                            />
                        </div>
                    ))}
                </div>

            </main>
        </div>
    );
}
