import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

const Sketch = () => {
  const sketchRef = useRef();

  useEffect(() => {
    let myp5;
    const sketch = (p) => {
      p.setup = () => {
        p.createCanvas(window.innerWidth, window.innerHeight);
        p.background(30);
      };
      p.draw = () => {
        p.noStroke();
        p.fill(255, 100, 200, 100);
        p.ellipse(p.mouseX, p.mouseY, 80, 80);
      };
    };
    myp5 = new p5(sketch, sketchRef.current);
    return () => {
      myp5.remove();
    };
  }, []);

  return <div ref={sketchRef} style={{ position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 1 }} />;
};

export default Sketch;
