export default function bubbleSort(arr) {
  arr = arr.slice();
  const interactions = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < (arr.length - i - 1); j++) {
      if (arr[j] > arr[j + 1]) {
        interactions.push([j, j + 1]);
        // console.log("ij", j, j + 1, 'grosa', arr[i], arr[j + 1]);
        const temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return [arr, interactions];
}