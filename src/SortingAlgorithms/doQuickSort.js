function doQuickSort(array) {
  let animations = [];
  quickSortUtil(array, 0, array.length - 1, animations);
  return animations;
}

function quickSortUtil(array, low, high, animations) {
  let pi;
  if (low < high) {
    pi = partition(array, low, high, animations);
    quickSortUtil(array, low, pi - 1, animations);
    quickSortUtil(array, pi + 1, high, animations);
  }
}

function partition(array, low, high, animations) {
  let pivot = array[high];
  let i = low - 1;
  for (let j = low; j <= high - 1; j++) {
    animations.push([j, high]);
    animations.push([j, high]);
    if (array[j] <= pivot) {
      i++;
      [array[i], array[j]] = [array[j], array[i]];
      animations.push([j, array[j]]);
      animations.push([i, array[i]]);
    } else {
      animations.push([-1, -1]);
      animations.push([-1, -1]);
    }
  }
  [array[i + 1], array[high]] = [array[high], array[i + 1]];
  animations.push([-1, -1]);
  animations.push([-1, -1]);
  animations.push([i + 1, array[i + 1]]);
  animations.push([high, array[high]]);
  return i + 1;
}
export default doQuickSort;
