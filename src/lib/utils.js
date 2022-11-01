'use strict';

export const hashCode = (str) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++)
    hash = (Math.imul(31, hash) + str.charCodeAt(i)) | 0;
  return hash;
};

export const getRandom = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);

export const randomColor = (colors) => {
  const colorId = getRandom(0, colors.length);
  const color = colors[colorId];
  return color;
};
