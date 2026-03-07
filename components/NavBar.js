import React, { useState } from 'react';
import Link from 'next/link';

export default function NavBar() {
  const [open, setOpen] = useState(false);
  // 點擊漢堡可開關選單
  const handleHamburger = () => setOpen((prev) => !prev);
  return (
    <>
      {/* 標準三條線漢堡按鈕 */}
      <button
        aria-label={open ? '關閉選單' : '開啟選單'}
        onClick={handleHamburger}
        style={{
          position: 'fixed',
          top: 28,
          right: 32,
          zIndex: 201,
          width: 44,
          height: 44,
          background: 'rgba(34,34,34,0.85)',
          border: 'none',
          outline: 'none',
          borderRadius: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 2px 12px rgba(0,0,0,0.12)'
        }}
      >
        <span style={{ display: 'block', width: 28, height: 2, background: '#fff', borderRadius: 1, margin: '3px 0' }} />
        <span style={{ display: 'block', width: 28, height: 2, background: '#fff', borderRadius: 1, margin: '3px 0' }} />
        <span style={{ display: 'block', width: 28, height: 2, background: '#fff', borderRadius: 1, margin: '3px 0' }} />
      </button>

      {/* 右側滑出選單 */}
      <nav
        style={{
          position: 'fixed',
          top: 0,
          right: open ? 0 : '-320px',
          width: 280,
          height: '100vh',
          background: 'rgba(15,15,15,0.55)',
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
          boxShadow: open ? '-4px 0 40px rgba(0,0,0,0.35)' : 'none',
          borderLeft: '1px solid rgba(255,255,255,0.07)',
          zIndex: 200,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: '96px 32px 48px 32px',
          gap: 32,
          transition: 'right 0.35s cubic-bezier(.7,.2,.3,1)'
        }}
      >
        <Link href="/" style={{ color: '#fff', fontWeight: 400, fontSize: 13, letterSpacing: '0.18em', textDecoration: 'none', textTransform: 'uppercase' }} onClick={() => setOpen(false)}>Home</Link>
        <Link href="/about" style={{ color: '#fff', fontWeight: 400, fontSize: 13, letterSpacing: '0.18em', textDecoration: 'none', textTransform: 'uppercase' }} onClick={() => setOpen(false)}>CV</Link>
        <Link href="/portfolio" style={{ color: '#fff', fontWeight: 400, fontSize: 13, letterSpacing: '0.18em', textDecoration: 'none', textTransform: 'uppercase' }} onClick={() => setOpen(false)}>Works</Link>
        <Link href="/events" style={{ color: '#fff', fontWeight: 400, fontSize: 13, letterSpacing: '0.18em', textDecoration: 'none', textTransform: 'uppercase' }} onClick={() => setOpen(false)}>Events</Link>
        <Link href="/contact" style={{ color: '#fff', fontWeight: 400, fontSize: 13, letterSpacing: '0.18em', textDecoration: 'none', textTransform: 'uppercase' }} onClick={() => setOpen(false)}>Contact</Link>
      </nav>

      {/* 遮罩 */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0,0,0,0.25)',
            zIndex: 199
          }}
        />
      )}
    </>
  );
}
