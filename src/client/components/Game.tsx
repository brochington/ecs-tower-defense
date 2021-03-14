import React, { FC, useRef, useEffect } from 'react';
import TowerDefense from 'game/TowerDefense'
import Box from 'game/components/Box';
import Transform from 'game/components/Transform';

const Game: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (canvas) {
      const styles = window.getComputedStyle(canvas);
      canvas.width = parseFloat(styles.width) * window.devicePixelRatio;
      canvas.height = parseFloat(styles.height) * window.devicePixelRatio;

      const td = new TowerDefense(canvas);

      td.world.createEntity().add(new Box(100, 200)).add(new Transform());

      td.run();
    }
  }, []);

  return (
    <canvas className="vw100 bgd-dark-blue" style={{ aspectRatio: '16/9' }} ref={canvasRef} />
  )
}

export default Game;