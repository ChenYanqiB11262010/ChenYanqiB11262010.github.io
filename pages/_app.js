import '../styles/global.css';
import React from 'react';
import dynamic from 'next/dynamic';
import GlowCursor from '../components/GlowCursor';

const P5Background = dynamic(() => import('../components/P5Background'), { ssr: false });

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <P5Background />
      <GlowCursor />
      <Component {...pageProps} />
      <footer style={{
        position: 'fixed',
        bottom: 20,
        right: 24,
        zIndex: 100,
        fontSize: 11,
        letterSpacing: '0.12em',
        color: 'rgba(255,255,255,0.3)',
        pointerEvents: 'none',
        fontFamily: "'Inter', sans-serif",
        fontWeight: 300,
      }}>
        Chen Yen-Chi © 2026
      </footer>
    </>
  );
}
