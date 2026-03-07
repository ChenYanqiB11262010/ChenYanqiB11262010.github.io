import React, { useEffect, useRef } from 'react';

export default function GlowCursor() {
  const cursorRef = useRef();

  useEffect(() => {
    // 觸控裝置不套用自訂游標
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    // 隱藏所有元素的游標
    const style = document.createElement('style');
    style.innerHTML = '*, *::before, *::after { cursor: none !important; }';
    style.id = 'cursor-none-override';
    document.head.appendChild(style);

    const handleMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    window.addEventListener('mousemove', handleMove);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      const el = document.getElementById('cursor-none-override');
      if (el) el.remove();
    };
  }, []);

  const lineStyle = {
    position: 'absolute',
    background: 'rgba(255,255,255,0.75)',
    pointerEvents: 'none',
  };

  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        pointerEvents: 'none',
        zIndex: 9999,
        // translate 以自身中心為基準
        transform: 'translate3d(-9999px,-9999px,0)',
      }}
    >
      {/* 水平線 */}
      <div style={{
        ...lineStyle,
        width: 20,
        height: 1.5,
        top: -0.75,
        left: -10,
      }} />
      {/* 垂直線 */}
      <div style={{
        ...lineStyle,
        width: 1.5,
        height: 20,
        top: -10,
        left: -0.75,
      }} />

    </div>
  );
}
