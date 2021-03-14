import World from 'game/World';

import { renderBox, renderBoxComponents } from './renderBox';

export function addSystems(world: World) {
  world.addSystem(renderBoxComponents, renderBox);
}