export default function selectionSort(arr) {
  arr = arr.slice();
  const interactions = [];

  console.log("BEFORE", arr);

  for (let i = 0; i < arr.length; i++) {
    let small = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[small]) {
        small = j;
      }
    }

    interactions.push([i, small]);

    const temp = arr[i];
    arr[i] = arr[small];
    arr[small] = temp;
  }

  console.log('after', arr);
  console.log("interactions", interactions);

  return [arr, interactions];
}