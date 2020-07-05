function doSelectionSort(array){
    let animations = []
    selectionSortUtil(array,animations)
    return animations
}

function selectionSortUtil(array,animations){
    const n = array.length
    for(let i = 0; i < n; i++){
        let min_idx = i
        for(let j = i+1; j < n; j++){
            animations.push([j,min_idx])
            animations.push([j,min_idx])
            if(array[j] < array[min_idx])
                min_idx = j
        }
        animations.push([min_idx,array[i],true])
        animations.push([i,array[min_idx],true])
       let temp = array[min_idx]
       array[min_idx] = array[i]
       array[i] = temp
    }
}

export default doSelectionSort