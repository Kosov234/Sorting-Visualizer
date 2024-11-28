import { useState } from "react";
import { randomizeArray } from "./utils/randomize_array/randomize_array";
import { getBubbleSortAnimations } from "./algorithms/bubble_sort/bubble_sort";
import { getInsertionSortAnimations } from "./algorithms/insertion_sort/insertion_sort";
import { getMergeSortAnimations } from "./algorithms/merge_sort/merge_sort";

const ANIMATION_SPEED_MS = 50;
const PRIMARY_COLOR = "blue";
const SECONDARY_COLOR = "red";

const Content = () => {
  const [array, setArray] = useState(randomizeArray());

  const bubbleSortHandler = () => {
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

  const insetionSortHandler = () => {
    const animations = getInsertionSortAnimations(array);
    console.log(animations);
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

  const mergeSortHandler = () => {
    const animations = getMergeSortAnimations(array);
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
  };

  return (
    <section className="flex flex-col">
      <div className="flex gap-1 items-end justify-center min-h-[500px]">
        {array.map((value, index) => (
          <div
            key={index}
            className={`bg-blue-500 text-white text-center py-4 w-screen rounded-md arrayBar transition-all duration-50`}
            style={{ height: `${value}px` }}
          ></div>
        ))}
      </div>
      <div className="container flex gap-3 mt-28">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded"
          onClick={() => setArray(randomizeArray())}
        >
          Randomize
        </button>

        <button
          className="bg-blue-500 text-white py-2 px-4 rounded"
          onClick={() => {
            bubbleSortHandler();
          }}
        >
          Bubble Sort
        </button>

        <button
          className="bg-blue-500 text-white py-2 px-4 rounded"
          onClick={() => {
            insetionSortHandler();
          }}
        >
          Insertion Sort
        </button>

        <button
          className="bg-blue-500 text-white py-2 px-4 rounded"
          onClick={() => {
            mergeSortHandler();
          }}
        >
          Merge Sort
        </button>
      </div>
    </section>
  );
};

export default Content;
