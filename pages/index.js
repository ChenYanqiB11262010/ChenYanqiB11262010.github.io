

import NavBar from '../components/NavBar';

export default function Home() {


  return (
    <div style={{ minHeight: '100vh', background: '#000', color: '#fff', position: 'relative', overflow: 'hidden', margin: 0, padding: 0 }}>

      <NavBar />
      <section style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', position: 'relative', zIndex: 1 }}>
        <h1 id="yc-flash" style={{
          fontSize: '6vw',
          fontWeight: 'bold',
          margin: 0,
          padding: 0,
          textShadow: '0 0 4px #fff, 0 0 8px #fff',
          textAlign: 'center',
          letterSpacing: '0.18em',
        }}>Y.C</h1>
        <style>{`
          @keyframes ycFlash {
            0%,100% { opacity: 1; }
            5%,15%,25%,35%,45%,55%,65%,75%,85%,95% { opacity: 0; }
            10%,20%,30%,40%,50%,60%,70%,80%,90% { opacity: 1; }
          }
          @keyframes ycGlow {
            0%,100% { text-shadow: 0 0 1px #fff, 0 0 2px #fff; }
            50% { text-shadow: 0 0 4px #fff, 0 0 8px #fff; }
          }
          #yc-flash {
            animation: ycFlash 1s linear, ycGlow 2.2s ease-in-out 1s infinite;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100vw;
            height: 100vh;
            position: absolute;
            left: 0;
            top: 0;
          }
        `}</style>
      </section>
    </div>
  );
}
