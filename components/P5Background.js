import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

export default function P5Background() {
  const router = useRouter();
  // isHome ref — readable inside the p5 sketch without re-mounting
  const isHomeRef = useRef(router.pathname === '/');

  useEffect(() => {
    isHomeRef.current = router.pathname === '/';
  }, [router.pathname]);

  useEffect(() => {
    let p5Instance;

    import('p5').then(({ default: p5 }) => {
      const sketch = (p) => {

        // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        // 🎛️  想調整的地方都在這裡
        // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

        const MAX_PARTICLES = 100; // 粒子最大數量
        const RANGE = 300;         // 粒子活動範圍（越大粒子散越開）

        // 鏡頭縮放（數字越大 = 鏡頭越靠近中心）
        const ZOOM = 1.8;

        // 鏡頭繞中心旋轉速度（越大轉越快）
        const ORBIT_SPEED = 0.003;

        // 粒子大小範圍 [最小, 最大]
        const SIZE_MIN = 3;
        const SIZE_MAX = 7;

        // 粒子移動速度
        const SPEED_XY = 0.25;
        const SPEED_Z = 0.18;

        // 粒子出現速度（滑鼠移動時，每幀增加的生命值，越大出現越快）
        const LIFE_IN = 0.04;
        // 粒子消失速度（滑鼠停止後，每幀減少的生命值，越大消失越快）
        const LIFE_OUT = 0.015;

        // 中心到粒子的連線：亮度（0–255）、粗細
        const LINE_ALPHA = 90;
        const LINE_WEIGHT = 0.8;

        // 粒子本身：亮度（0–255）
        const DOT_ALPHA = 255;

        // ── 以下僅主頁顯示 ──

        // 中心球體大小（半徑，越小越小顆）
        const SPHERE_RADIUS = 2;
        // 中心球體亮度（0–255）
        const SPHERE_ALPHA = 125;
        // 中心球體線條粗細
        const SPHERE_WEIGHT = 0.1;

        // 土星環 1（最裡層）：半徑、亮度、線粗
        const RING1_RADIUS = 155;
        const RING1_ALPHA = 170;
        const RING1_WEIGHT = 1.5;

        // 土星環 2（中層）
        const RING2_RADIUS = 230;
        const RING2_ALPHA = 120;
        const RING2_WEIGHT = 1.0;

        // 土星環 3（最外層）
        const RING3_RADIUS = 315;
        const RING3_ALPHA = 75;
        const RING3_WEIGHT = 1.5;

        // 最外層閃爍正方形線框
        const BOX_SIZE = 700;  // 邊長（越大越寬）
        const BOX_WEIGHT = 1.0;  // 線條粗細
        // 閃爍觸發機率（每幀，0–1；越大越常閃）
        const BOX_FLASH_CHANCE = 0.01;

        // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

        // 非主頁：僅顯示淡粒子，透明度壓低
        const SUB_OPACITY = 0.25; // 非主頁整體透明度（0–1）

        let particles = [];
        let orbitAngle = 0; // 鏡頭公轉角度
        let ringAngle = 0; // 土星環自轉角度
        let boxFlash = 0; // 正方形閃爍亮度（0–255）

        // 滑鼠速度追蹤
        let lastMX = 0, lastMY = 0;
        let mouseVel = 0; // 平滑後的滑鼠速度

        // ── 預先計算土星環的 sin/cos 值，避免在 draw loop 中重複計算 ──
        const RING_SEGMENTS = 120;
        const cosTable = new Float32Array(RING_SEGMENTS + 1);
        const sinTable = new Float32Array(RING_SEGMENTS + 1);
        for (let i = 0; i <= RING_SEGMENTS; i++) {
          const angle = (i / RING_SEGMENTS) * Math.PI * 2;
          cosTable[i] = Math.cos(angle);
          sinTable[i] = Math.sin(angle);
        }

        p.setup = function () {
          const canvas = p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
          // 限制像素密度最大為 2，防止 Retina / High-DPI 螢幕渲染解析度過高導致 GPU 載載過重
          p.pixelDensity(Math.min(2, p.displayDensity()));

          const el = canvas.elt;
          el.style.position = 'fixed';
          el.style.top = '0';
          el.style.left = '0';
          el.style.zIndex = '0';
          el.style.pointerEvents = 'none';
          el.style.display = 'block';

          // 建立所有粒子（初始 life = 0，看不見）
          for (let i = 0; i < MAX_PARTICLES; i++) {
            particles.push({
              x: p.random(-RANGE, RANGE),
              y: p.random(-RANGE, RANGE),
              z: p.random(-RANGE, RANGE),
              vx: p.random(-SPEED_XY, SPEED_XY),
              vy: p.random(-SPEED_XY, SPEED_XY),
              vz: p.random(-SPEED_Z, SPEED_Z),
              size: p.random(SIZE_MIN, SIZE_MAX),
              life: 0, // 0 = 不可見，1 = 完全可見
            });
          }
          p.frameRate(60);
        };

        p.draw = function () {
          p.background(0);

          const isHome = isHomeRef.current;
          // 非主頁：全域壓低不透明度
          if (!isHome) p.tint(255, 255 * SUB_OPACITY);

          // ── 滑鼠速度計算（平滑） ──
          const dx = p.mouseX - lastMX;
          const dy = p.mouseY - lastMY;
          const rawVel = Math.sqrt(dx * dx + dy * dy);
          mouseVel = mouseVel * 0.8 + rawVel * 0.2;
          lastMX = p.mouseX;
          lastMY = p.mouseY;

          const mouseMoving = mouseVel > 1.5;

          // ── 鏡頭公轉 + 縮放 ──
          orbitAngle += ORBIT_SPEED;
          ringAngle += 0.006;
          p.scale(ZOOM);
          p.rotateY(orbitAngle);

          // ── 粒子更新與繪製 ──
          // 非主頁：最多顯示 25 顆、壓低亮度
          const opacity = isHome ? 1 : SUB_OPACITY;
          const maxActive = isHome ? MAX_PARTICLES : 25;

          let activeCount = 0;

          // 1. 更新粒子物理狀態與生命值
          for (let pt of particles) {
            // 非主頁超過上限的粒子直接消失
            if (!isHome && activeCount >= maxActive && pt.life > 0) {
              pt.life = Math.max(0, pt.life - LIFE_OUT * 2);
            } else if (mouseMoving) {
              pt.life = Math.min(1, pt.life + LIFE_IN);
            } else {
              pt.life = Math.max(0, pt.life - LIFE_OUT);
            }

            if (pt.life <= 0) {
              pt.x = p.random(-RANGE, RANGE);
              pt.y = p.random(-RANGE, RANGE);
              pt.z = p.random(-RANGE, RANGE);
              continue;
            }
            if (pt.life > 0) activeCount++;

            pt.x += pt.vx; pt.y += pt.vy; pt.z += pt.vz;
            if (Math.abs(pt.x) > RANGE) pt.vx *= -1;
            if (Math.abs(pt.y) > RANGE) pt.vy *= -1;
            if (Math.abs(pt.z) > RANGE) pt.vz *= -1;
          }

          // 2. 批次畫連線（大幅減少 WebGL state 切換與 draw calls）
          p.strokeWeight(LINE_WEIGHT);
          for (let pt of particles) {
            if (pt.life > 0) {
              p.stroke(255, 255, 255, LINE_ALPHA * pt.life * opacity);
              p.line(pt.x, pt.y, pt.z, 0, 0, 0);
            }
          }

          // 3. 批次畫粒子點
          for (let pt of particles) {
            if (pt.life > 0) {
              p.stroke(255, 255, 255, DOT_ALPHA * pt.life * opacity);
              p.strokeWeight(pt.size);
              p.point(pt.x, pt.y, pt.z);
            }
          }

          // ── 以下僅主頁顯示 ──
          if (isHome) {

            // 中心球體
            p.push();
            p.noFill();
            p.stroke(255, 255, 255, SPHERE_ALPHA);
            p.strokeWeight(SPHERE_WEIGHT);
            p.sphere(SPHERE_RADIUS, 18, 14);
            p.pop();

            // 土星環 1
            p.push();
            p.noFill();
            p.stroke(255, 255, 255, RING1_ALPHA);
            p.strokeWeight(RING1_WEIGHT);
            p.rotateX(ringAngle * 0.65 + p.PI * 0.1);
            p.rotateZ(ringAngle * 0.2);
            drawRing(p, RING1_RADIUS, 10);
            p.pop();

            // 土星環 2
            p.push();
            p.noFill();
            p.stroke(255, 255, 255, RING2_ALPHA);
            p.strokeWeight(RING2_WEIGHT);
            p.rotateY(ringAngle * 0.5 + p.PI * 0.3);
            p.rotateX(ringAngle * 0.25 + 0.4);
            drawRing(p, RING2_RADIUS, 10);
            p.pop();

            // 土星環 3
            p.push();
            p.noFill();
            p.stroke(255, 255, 255, RING3_ALPHA);
            p.strokeWeight(RING3_WEIGHT);
            p.rotateZ(ringAngle * 0.4 + p.PI * 0.5);
            p.rotateY(ringAngle * 0.3 + 0.9);
            drawRing(p, RING3_RADIUS, 10);
            p.pop();

            // 最外層閃爍正方形線框
            if (p.random() < BOX_FLASH_CHANCE) {
              boxFlash = p.random(150, 200);
            } else {
              boxFlash *= 0.92;
            }
            if (boxFlash > 4) {
              p.push();
              p.noFill();
              p.stroke(255, 255, 255, boxFlash);
              p.strokeWeight(BOX_WEIGHT);
              p.box(BOX_SIZE);
              p.pop();
            }

          } // end isHome
        };

        function drawRing(p, radius, width) {
          p.beginShape(p.LINES);
          const r1 = radius - width / 2;
          const r2 = radius + width / 2;
          for (let i = 0; i < RING_SEGMENTS; i++) {
            const c1 = cosTable[i];
            const s1 = sinTable[i];
            const c2 = cosTable[i + 1];
            const s2 = sinTable[i + 1];

            // First loop translated to vertex pairs
            p.vertex(c1 * r1, s1 * r1, 0);
            p.vertex(c2 * r1, s2 * r2, 0);

            // Second loop translated to vertex pairs
            p.vertex(c1 * r2, s1 * r2, 0);
            p.vertex(c2 * r2, s2 * r2, 0);
          }
          p.endShape();
        }

        p.windowResized = function () {
          p.resizeCanvas(p.windowWidth, p.windowHeight);
        };
      };

      p5Instance = new p5(sketch);
    });

    return () => {
      if (p5Instance) p5Instance.remove();
    };
  }, []);

  return null;
}