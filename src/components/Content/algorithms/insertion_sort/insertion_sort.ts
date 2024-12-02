export function getInsertionSortAnimations(array: number[]) {
  const sortedArray = [...array];
  const animations = [];
  for (let i = 1; i < sortedArray.length; i++) {
    const current = sortedArray[i];
    let j = i - 1;
    //compare:i,j
    animations.push({ name: "compare", value: [i, j] });

    while (j >= 0 && sortedArray[j] > current) {
      sortedArray[j + 1] = sortedArray[j];
      //swap:j+1,j
      animations.push({ name: "re-assign", value: [j + 1, j] });

      animations.push({ name: "compare", value: [i, j] });
      j--;
    }
    //lastStep:j+1,i
    animations.push({ name: "lastStep", value: [j + 1, current] });

    sortedArray[j + 1] = current;
  }
  return { animations, sortedArray };
}
