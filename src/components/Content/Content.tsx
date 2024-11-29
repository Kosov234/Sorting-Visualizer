import { useState } from "react";
import { randomizeArray } from "./utils/randomize_array/randomize_array";
import { bubbleSortHandler } from "./utils/bubble_sort_handler/bubble_sort_handler";
import { insertionSortHandler } from "./utils/insertion_sort_handler/insertion_sort_handler";
import { mergeSortHandler } from "./utils/merge_sort_handler/merge_sort_handler";
import { Button } from "./components/Button/Button";

const Content = () => {
  const [array, setArray] = useState(randomizeArray());

  return (
    <section className="flex flex-1 flex-col gap-2 p-2 bg-gray-100">
      <div className="flex flex-wrap gap-3 justify-between p-8 bg-slate-300 rounded-md">
        <button
          className="flex-1 bg-blue-600 text-white py-2 px-4 rounded "
          onClick={() => setArray(randomizeArray())}
        >
          <p className="text-base">Randomize</p>
        </button>

        <Button
          alghorithmHandler={() => bubbleSortHandler(array)}
          text="Bubble Sort"
        />

        <Button
          alghorithmHandler={() => insertionSortHandler(array)}
          text="Insertion Sort"
        />

        <Button
          alghorithmHandler={() => mergeSortHandler(array)}
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
