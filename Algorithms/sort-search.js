const arr = [5,1,2,9,-3,55,56,44,100];

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
    }
}

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length-i; j++) {
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
}

function partition(arr, low, high) {
    const pivotValue = arr[high];
    let index = low-1;
    for (let i = low; i <= high-1; i++) {
        if (arr[i] < pivotValue) {
            index++;
            [arr[i], arr[index]] = [arr[index], arr[i]];
        }
    }
    [arr[index+1], arr[high]] = [arr[high], arr[index+1]];
    const pivot = index+1;
    return pivot;
}

function quickSort(arr, low, high) {
    if (low < high) {
        const pivot = partition(arr, low, high);
        quickSort(arr, low, pivot-1);
        quickSort(arr, pivot+1, high);
    }
}

function binarySearch(arr, low, high, x) {
    if (low <= high) {
        const mid = low + Math.floor((high-low)/2);
        if (x == arr[mid]) {
            return mid;
        }
        if (x < arr[mid]) {
            return binarySearch(arr, low, mid-1, x);
        } else {
            return binarySearch(arr, mid+1, high, x);
        }
    }
    return -1;
}

//selectionSort(arr);
//bubbleSort(arr);
quickSort(arr, 0, arr.length-1);
console.log(arr);
const xIndex = binarySearch(arr, 0, arr.length-1, 1);
console.log(xIndex);