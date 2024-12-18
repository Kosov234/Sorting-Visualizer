import { getMergeSortAnimations } from "../../algorithms/merge_sort/merge_sort";
import {
  ANIMATION_SPEED_MS,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
} from "../constants";

type MergeSortHandlerReturnType = {
  animationsLength: number;
  sortedArray: number[];
};

export const mergeSortHandler = (
  array: number[]
): MergeSortHandlerReturnType => {
  const { animations, sortedArray } = getMergeSortAnimations(array);
  for (let i = 0; i < animations.length; i++) {
    const arrayBars = document.getElementsByClassName(
      "arrayBar"
    ) as HTMLCollectionOf<HTMLElement>;
    const isColorChange = i % 3 !== 2;
    if (isColorChange) {
      const [barOneIdx, barTwoIdx] = animations[i];
      const barOneStyle = arrayBars[barOneIdx].style;
      const barTwoStyle = arrayBars[barTwoIdx].style;
      const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
      setTimeout(() => {
        barOneStyle.backgroundColor = color;
        barTwoStyle.backgroundColor = color;
      }, i * ANIMATION_SPEED_MS);
    } else {
      setTimeout(() => {
        const [barOneIdx, newHeight] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        barOneStyle.height = `${newHeight}px`;
      }, i * ANIMATION_SPEED_MS);
    }
  }

  return { animationsLength: animations.length, sortedArray };
};
