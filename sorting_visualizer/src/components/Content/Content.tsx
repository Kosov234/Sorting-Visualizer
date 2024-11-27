import { useState } from "react";
import { randomizeArray } from "./utils/randomize_array/randomize_array";
import { getBubbleSortAnimations } from "./algorithms/bubble_sort/bubble_sort";

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
      </div>
    </section>
  );
};

export default Content;
