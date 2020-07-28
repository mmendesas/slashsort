import React, { useEffect, useState } from 'react';


import { bubbleSort, selectionSort, mergeSort } from '../../algo'

import './styles.css'

const LIST_SIZE = 40;

function SortingViewer() {
  const [list, setList] = useState([]);
  const [elapsed, setElapsed] = useState(0);
  const [running, setRunning] = useState(false);
  const [sorted, setSorted] = useState(false);

  useEffect(() => {
    resetList();
    return () => {
      setList([])
    }
  }, [])

  function resetList() {
    const array = [];
    let num = 0;
    for (let i = 0; i < LIST_SIZE; i++) {
      num = randomInt(100, 350);
      while (array.includes(num)) {
        num = randomInt(100, 350);
      }
      array.push(num);
    }
    setList([40, 10, 50, 70]);
    setElapsed(0);
    setSorted(false);
  }

  function swap(arr, index1, index2) {
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  }

  function delayLoop(fn, delay) {
    return (item, i) => {
      setTimeout(() => {
        fn(item);
      }, i * delay)
    }
  }

  function swapColor(index1, index2) {
    const bars = document.getElementsByClassName('bar-item');
    bars[index1].style.backgroundColor = '#00a';
    bars[index2].style.backgroundColor = '#00a';

    setTimeout(() => {
      bars[index1].style.backgroundColor = 'turquoise';
      bars[index2].style.backgroundColor = 'turquoise';
    }, 150);
  }

  function swapElements(index1, index2) {
    const bars = document.getElementsByClassName('bar-item');
    const el01 = bars[index1].style;
    const el02 = bars[index2].style;

    const temp = el01.height;
    el01.height = el02.height;
    el02.height = temp;
  }

  function runAnimation(list) {
    setRunning(true);
    const start = new Date();

    list.forEach(delayLoop(item => {
      const [index1, index2] = item;
      swapColor(index1, index2);
      swapElements(index1, index2);
    }, 100))

    setTimeout(() => {
      let timeDiff = new Date() - start;
      timeDiff /= 1000;
      setElapsed(timeDiff.toFixed(2));
      setRunning(false);
      setSorted(true);
    }, list.length * 100);
  }

  function bubble() {
    const [_, interactions] = bubbleSort(list);
    runAnimation(interactions);
  }

  function selection() {
    const [_, interactions] = selectionSort(list);
    runAnimation(interactions);
  }

  function merge(){
    // let list2 = [4, 1, 5, 7, 2, 9];
    const [_, interactions] = mergeSort(list);
    runAnimation(interactions)
  }

  return (
    <div className="container">
      <section className="graph">
        <ul className="bar-graph">
          {
            list.map((item, index) =>
              <li
                key={`bar-${index}`}
                className="bar-item"
                style={{ height: `${item}px` }}>
              </li>
            )
          }
        </ul>
        <span>Elapsed Time: {elapsed}s</span>
      </section>
      <section className="controls">
        <button className="btn" onClick={() => resetList()}>Randomize array</button>
        <button className="btn" onClick={() => !running && bubble()} disabled={sorted || running}>Bubble Sort</button>
        <button className="btn" onClick={() => !running && selection()} disabled={sorted || running}>Selection Sort</button>
        <button className="btn" onClick={() => !running && merge()} disabled={sorted || running}>Merge Sort</button>
      </section>
    </div>
  );
}

function randomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default SortingViewer;