'use strict';

import SVG from './svg';
import { randomColor } from './utils';

// const DENSITY = 10;
// const SIZE = 80;

export default class Avatar {
  constructor(width, height, type, colors, roundness, density) {
    this.width = width;
    this.height = height;
    this.type = type;
    this.colors = colors;
    this.roundness = roundness;
    this.density = density;
    this.body = [];
  }

  generate() {
    if (this.type === 'grid') {
      return this.generateGrid();
    }
  }

  generateGrid() {
    for (let i = 0; i < this.density; i += 1) {
      for (let j = 0; j < this.density; j += 1) {
        const size = this.width / this.density;
        const x = i * size;
        const y = j * size;
        // const x = element === 'circle' ? size / 2 + i * size : i * size;
        // const y = element === 'circle' ? size / 2 + j * size : j * size;
        const color = randomColor(this.colors);
        const rec = SVG.createRect(x, y, size, color);
        this.body.push(rec);
      }
    }
    return this.body.join('');
  }
}
