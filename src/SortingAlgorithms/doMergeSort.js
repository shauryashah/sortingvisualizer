function doMergeSort(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const copyarray = array.slice();
  mergeSortUtil(array, 0, array.length - 1, copyarray, animations);
  return animations;
}
function mergeSortUtil(array, start, end, copyarray, animations) {
  if (start === end) return;
  let mid = Math.floor((start + end) / 2);
  mergeSortUtil(copyarray, start, mid, array, animations);
  mergeSortUtil(copyarray, mid + 1, end, array, animations);
  merge(array, start, mid, end, copyarray, animations);
}

function merge(array, start, mid, end, copyarray, animations) {
  let k = start;
  let i = start;
  let j = mid + 1;
  while (i <= mid && j <= end) {
    animations.push([i, j]);
    animations.push([i, j]);
    if (copyarray[i] <= copyarray[j]) {
      animations.push([k, copyarray[i]]);
      array[k++] = copyarray[i++];
    } else {
      animations.push([k, copyarray[j]]);
      array[k++] = copyarray[j++];
    }
  }

  while (i <= mid) {
    animations.push([i, i]);
    animations.push([i, i]);
    animations.push([k, copyarray[i]]);
    array[k++] = copyarray[i++];
  }
  while (j <= end) {
    animations.push([j, j]);
    animations.push([j, j]);
    animations.push([k, copyarray[j]]);
    array[k++] = copyarray[j++];
  }
}

export default doMergeSort;
