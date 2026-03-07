
import React, { useRef, useEffect } from 'react';

export default function DynamicGeometry() {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // 柔和流動光暈圓形
    const blobs = Array.from({ length: 8 }).map((_, i) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: 180 + Math.random() * 120,
      dx: (Math.random() - 0.5) * 0.7,
      dy: (Math.random() - 0.5) * 0.7,
      color1: `hsla(${i * 45}, 90%, 65%, 0.7)`,
      color2: `hsla(${(i * 45 + 90) % 360}, 80%, 55%, 0.5)`,
      alpha: 0.5 + Math.random() * 0.3,
      blur: 60 + Math.random() * 40,
    }));

    function draw() {
      ctx.clearRect(0, 0, width, height);
      ctx.save();
      ctx.globalCompositeOperation = 'lighter';
      blobs.forEach(b => {
        ctx.save();
        ctx.globalAlpha = b.alpha;
        ctx.filter = `blur(${b.blur}px)`;
        const grad = ctx.createRadialGradient(b.x, b.y, b.r * 0.2, b.x, b.y, b.r);
        grad.addColorStop(0, b.color1);
        grad.addColorStop(1, b.color2);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
        // 緩慢流動
        b.x += b.dx;
        b.y += b.dy;
        if (b.x < -b.r) b.x = width + b.r;
        if (b.x > width + b.r) b.x = -b.r;
        if (b.y < -b.r) b.y = height + b.r;
        if (b.y > height + b.r) b.y = -b.r;
      });
      ctx.restore();
      animationId = requestAnimationFrame(draw);
    }
    draw();
    // 視窗大小變化
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0, pointerEvents: 'none' }} />;
}
