export default function selectionSort(arr) {
  arr = arr.slice();
  const interactions = [];

  for (let i = 0; i < arr.length; i++) {
    let small = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[small]) {
        small = j;
      }
    }

    // console.log("ij", j, small, 'interactions', arr[i], arr[small]);
    interactions.push([i, small]);

    const temp = arr[i];
    arr[i] = arr[small];
    arr[small] = temp;
  }

  return [arr, interactions];
}