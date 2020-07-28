
let interactions = [];
let grosa = [];

export default function mergeSort(arr) {
  // arr = arr.slice();
  grosa = arr;
  interactions = [];

  console.log("GROSA1", arr);

  const result = makeSort(arr);
  // makeSort(arr);

  console.log("GROSA3", result);
  console.log("GROSA4", grosa);
  console.log("GROS88", interactions);

  return [result, interactions]
}

function makeSort(arr) {
  // last item
  if (arr.length == 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(makeSort(left), makeSort(right));
}

function merge(left, right) {
  const results = [];

  // if (left.length == 1 || right.length == 1) {
  //   interactions.push([grosa.indexOf(left[0]), grosa.indexOf(right[0])])
  // }
  // console.log("$#@#$", left, right);
  // interactions.push([grosa.indexOf(left[0]), grosa.indexOf(right[0])])

  while (left.length && right.length) {  
    
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift())
    }
  }
  
  // console.log('GROOOSA', grosa);

  return [...results, ...left, ...right];
}