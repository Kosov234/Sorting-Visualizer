export function getInsertionSortAnimations(array: number[]) {
  const animations = [];
  for (let i = 1; i < array.length; i++) {
    const current = array[i];
    let j = i - 1;
    //compare:i,j
    animations.push({ name: "compare", value: [i, j] });

    while (j >= 0 && array[j] > current) {
      array[j + 1] = array[j];
      //swap:j+1,j
      animations.push({ name: "re-assign", value: [j + 1, j] });

      animations.push({ name: "compare", value: [i, j] });
      j--;
    }
    //lastStep:j+1,i
    animations.push({ name: "lastStep", value: [j + 1, current] });

    array[j + 1] = current;
  }
  return animations;
}
