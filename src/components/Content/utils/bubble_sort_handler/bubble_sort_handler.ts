import { getBubbleSortAnimations } from "../../algorithms/bubble_sort/bubble_sort";
import {
  ANIMATION_SPEED_MS,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
} from "../constants";

export const bubbleSortHandler = (array: number[]) => {
  const animations = getBubbleSortAnimations(array);

  animations.forEach((animation, index) => {
    const [firstBarIndex, secondBarIndex] = animation;
    const arrayBars = document.getElementsByClassName(
      "arrayBar"
    ) as HTMLCollectionOf<HTMLElement>;

    const barOneStyle = arrayBars[firstBarIndex].style;
    const barTwoStyle = arrayBars[secondBarIndex].style;

    setTimeout(() => {
      if (index % 2 === 0) {
        barOneStyle.backgroundColor = SECONDARY_COLOR;
        barTwoStyle.backgroundColor = SECONDARY_COLOR;
      } else {
        [barOneStyle.height, barTwoStyle.height] = [
          barTwoStyle.height,
          barOneStyle.height,
        ];
        barOneStyle.backgroundColor = PRIMARY_COLOR;
        barTwoStyle.backgroundColor = PRIMARY_COLOR;
      }
    }, index * ANIMATION_SPEED_MS);
  });
};
