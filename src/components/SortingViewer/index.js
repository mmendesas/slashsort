import React, { useEffect, useState } from 'react';


import { bubbleSort } from '../../algo'

import './styles.css'

function SortingViewer() {
  const [list, setList] = useState([]);

  useEffect(() => {
    resetArray();
    return () => {
      setList([])
    }
  }, [])

  function resetArray() {
    const array = [];
    for (let i = 0; i < 60; i++) {
      array.push(randomInt(50, 450));
    }
    setList(array);
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

  function bubble() {
    const [_, interactions] = bubbleSort(list);
    const arr = list.slice();

    interactions.forEach(delayLoop(item => {
      const [index1, index2] = item;
      swap(arr, index1, index2);
      swapColor(index1, index2);
      swapElements(index1, index2);
    }, 100))
  }

  return (
    <div>
      <ul className="bar-graph">
        {
          list.map((item, index) =>
            <li
              key={`bar-${index}`}
              className="bar-item"
              style={{ height: `${item}px` }}>
              {" "}
            </li>
          )
        }
      </ul>
      <section className="controls">
        <button onClick={() => resetArray()}>Randomize array</button>
        <button onClick={() => bubble()}>Bubble Sort</button>
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