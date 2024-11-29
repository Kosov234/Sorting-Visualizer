import { getInsertionSortAnimations } from "../../algorithms/insertion_sort/insertion_sort";
import {
  ANIMATION_SPEED_MS,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
} from "../constants";

export const insertionSortHandler = (array: number[]) => {
  const animations = getInsertionSortAnimations(array);
  const arrayBars = document.getElementsByClassName(
    "arrayBar"
  ) as HTMLCollectionOf<HTMLElement>;
  for (let i = 0; i < animations.length; i++) {
    const firstBar = arrayBars[animations[i].value[0]];
    const secondBar = arrayBars[animations[i].value[1]];
    switch (animations[i].name) {
      case "compare":
        setTimeout(() => {
          firstBar.style.backgroundColor = SECONDARY_COLOR;
          secondBar.style.backgroundColor = SECONDARY_COLOR;
        }, i * ANIMATION_SPEED_MS);

        break;
      case "re-assign":
        setTimeout(() => {
          const bufferHeight = firstBar.style.height;
          firstBar.style.height = secondBar.style.height;
          secondBar.style.height = bufferHeight;
          firstBar.style.backgroundColor = PRIMARY_COLOR;
          secondBar.style.backgroundColor = PRIMARY_COLOR;
        }, i * ANIMATION_SPEED_MS);
        break;
      case "lastStep":
        setTimeout(() => {
          firstBar.style.height = `${animations[i].value[1]}px`;

          firstBar.style.backgroundColor = PRIMARY_COLOR;
        }, i * ANIMATION_SPEED_MS);
        break;
      default:
        break;
    }
  }
};
