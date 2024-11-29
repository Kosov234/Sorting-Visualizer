import { useState } from "react";
import { randomizeArray } from "./utils/randomize_array/randomize_array";
import { bubbleSortHandler } from "./utils/bubble_sort_handler/bubble_sort_handler";
import { insertionSortHandler } from "./utils/insertion_sort_handler/insertion_sort_handler";
import { mergeSortHandler } from "./utils/merge_sort_handler/merge_sort_handler";
import { Button } from "./components/Button/Button";
import { ANIMATION_SPEED_MS, ARRAY_SIZE } from "./utils/constants";

const Content = () => {
  const [array, setArray] = useState(randomizeArray());

  const buttons = document.getElementsByTagName("button");

  return (
    <section className="flex flex-1 flex-col gap-2 p-2 bg-gray-100">
      <div className="flex flex-wrap gap-3 justify-between p-8 bg-slate-300 rounded-md">
        <Button
          onClick={() => {
            setArray(randomizeArray());
          }}
          text="Randomize"
        />

        <Button
          onClick={() => {
            {
              for (const button of buttons) {
                button.disabled = true;
              }
              bubbleSortHandler(array);

              setTimeout(() => {
                for (const button of buttons) {
                  button.disabled = false;
                }
              }, ((ARRAY_SIZE * ARRAY_SIZE + ARRAY_SIZE) / 2) * ANIMATION_SPEED_MS);
            }
          }}
          text="Bubble Sort"
        />

        <Button
          onClick={() => {
            {
              for (const button of buttons) {
                button.disabled = true;
              }
              insertionSortHandler(array);
              setTimeout(() => {
                for (const button of buttons) {
                  button.disabled = false;
                }
              }, ((ARRAY_SIZE * ARRAY_SIZE + ARRAY_SIZE) / 2) * ANIMATION_SPEED_MS);
            }
          }}
          text="Insertion Sort"
        />

        <Button
          onClick={() => {
            {
              for (const button of buttons) {
                button.disabled = true;
              }
              mergeSortHandler(array);

              setTimeout(() => {
                for (const button of buttons) {
                  button.disabled = false;
                }
              }, ((ARRAY_SIZE * ARRAY_SIZE + ARRAY_SIZE) / 2) * ANIMATION_SPEED_MS);
            }
          }}
          text="Merge Sort"
        />
      </div>

      <div className="flex flex-1 gap-1 items-end justify-center bg-slate-300 rounded-md">
        {array.map((value, index) => (
          <div
            key={index}
            className={`bg-blue-500 flex-1 rounded-md arrayBar transition-all duration-50`}
            style={{ height: `${value}px` }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Content;
