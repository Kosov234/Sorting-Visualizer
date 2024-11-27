import { swap } from "../helpers/swap/swap";

export const getBubbleSortAnimations = (arr: number[]) => {
  const sortedArray = [...arr];
  const animations = [];

  for (let i = 0; i < sortedArray.length; i++) {
    for (let j = 0; j < sortedArray.length - i - 1; j++) {
      if (sortedArray[j] > sortedArray[j + 1]) {
        swap(sortedArray, j, j + 1);
        animations.push([j, j + 1]);
        animations.push([j, j + 1]);
      }
    }
  }

  return animations;
};
