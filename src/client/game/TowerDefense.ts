import World from 'game/World';

import { addSystems } from './systems';


class TowerDefense {
  world: World;

  running: boolean = false;

  constructor(canvas: HTMLCanvasElement) {
    this.world = new World();

    addSystems(this.world);

    // @ts-ignore
    window.td = this;

    // @ts-ignore
    window.world = this.world;
  }

  tick = () => {
    if (this.running) {
      this.world.systems.run();
      
      window.requestAnimationFrame(this.tick);
    }
  }

  run() {
    this.running = true;

    this.tick();
  }

  stop() {
    this.running = false;
  }
}

export default TowerDefense;
