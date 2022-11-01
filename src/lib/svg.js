'use strict';

export default class SVG {
  constructor() {}

  static createRect(xc, yc, size, color) {
    const x = `x="${xc}"`;
    const y = `y="${yc}"`;
    const wh = `width="${size}" height="${size}"`;
    const fill = `fill="${color}"`;
    // const rx = rad ? `rx="${rad}"` : '';
    const tag = ['<rect', x, y, wh, fill, '/>'].join(' ');
    return tag;
  }
}
