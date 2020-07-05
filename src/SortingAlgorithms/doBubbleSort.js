function doBubbleSort(array) {
  const animations = [];
  bubbleSortUtil(array, array.length, animations);
  return animations;
}
function bubbleSortUtil(array, n, animations) {
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++)
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        animations.push([j, j + 1, true]);
        animations.push([j, j + 1, true]);
      } else {
        animations.push([j, j + 1, false]);
        animations.push([j, j + 1, false]);
      }
  }
}
export default doBubbleSort;
