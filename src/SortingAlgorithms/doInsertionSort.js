function doInsertionSort(array) {
  let animations = [];
  insertionSortUtil(array, animations);
  return animations;
}

function insertionSortUtil(array, animations) {
  let n = array.length;
  for (let i = 1; i < n; i++) {
    let key = array[i];
    let j = i - 1;
    animations.push([j, i]);
    animations.push([j, i]);
    while (j >= 0 && array[j] > key) {
      animations.push([j, i]);
      animations.push([j, i]);
      animations.push([j + 1, array[j], true]);
      array[j + 1] = array[j];
      j -= 1;
    }
    animations.push([j + 1, key, true]);
    array[j + 1] = key;
  }
}
export default doInsertionSort;
