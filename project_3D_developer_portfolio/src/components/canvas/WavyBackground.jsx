import React, { useRef, useEffect } from "react";

const WavyBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    let count = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw background dark gradient that perfectly matches the portfolio theme
      const bgGrad = ctx.createLinearGradient(0, 0, 0, canvas.height);
      bgGrad.addColorStop(0, "#050816");
      bgGrad.addColorStop(0.5, "#0b0422");
      bgGrad.addColorStop(1, "#050816");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      count += 0.0025; // Slow, majestic breathing movement speed

      // Create a gorgeous full-screen ribbon of uon-luon lines
      const numLines = 16; // Optimized from 32 to 16 for buttery smooth performance
      ctx.lineWidth = 1.25;

      const startX = -100;
      const endX = canvas.width + 100; // Runs completely across the entire screen
      const centerY = canvas.height * 0.48; // Centered beautifully behind text & computer model

      for (let j = 0; j < numLines; j++) {
        ctx.beginPath();
        
        // Calculate transparency so that outer lines fade out elegantly
        const progress = j / numLines;
        const alpha = (0.05 + (1 - progress) * 0.2) * 0.85;

        // Draw with a gorgeous linear gradient that fades out on the right edge
        const lineGrad = ctx.createLinearGradient(0, 0, canvas.width, 0);
        lineGrad.addColorStop(0, `rgba(145, 94, 255, ${alpha * 1.25})`); // Violet-blue on left
        lineGrad.addColorStop(0.5, `rgba(128, 77, 238, ${alpha})`);     // Indigo in middle
        lineGrad.addColorStop(1, `rgba(145, 94, 255, ${alpha * 0.15})`); // Delicate fade on right

        ctx.strokeStyle = lineGrad;

        for (let x = startX; x <= endX; x += 30) { // Optimized step from 15 to 30 to halve math operations
          const tX = (x - startX) / (endX - startX);
          
          // Multi-harmonic wave equations to create organic, ultra-smooth fluid flow
          const wave1 = Math.sin(tX * Math.PI * 2.2 - count + j * 0.045) * 110;
          const wave2 = Math.cos(tX * Math.PI * 1.4 + count * 0.8 + j * 0.02) * 45;
          const wave3 = Math.sin(tX * Math.PI * 0.6 - count * 0.3) * 30;
          
          // Keep the lines parallel and beautifully spread across the entire width of the screen.
          // No pinching! Lines flow broadly and majestically.
          const y = centerY + (wave1 + wave2 + wave3) + (j - numLines / 2) * 16;

          if (x === startX) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full z-[-1] pointer-events-none"
    />
  );
};

export default WavyBackground;
