import React, { useEffect, useState } from 'react';


import { bubbleSort } from '../../algo'

import './styles.css'

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
    for (let i = 0; i < 40; i++) {
      num = randomInt(100, 350);
      while (array.includes(num)) {
        num = randomInt(100, 350);
      }
      array.push(num);
    }
    console.log('GROOOSA', array);
    setList(array);
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

  function bubble() {
    console.log("bubble inicio")
    setRunning(true);
    const [_, interactions] = bubbleSort(list);

    console.log('Inicio')
    const start = new Date();

    interactions.forEach(delayLoop(item => {
      const [index1, index2] = item;
      swapColor(index1, index2);
      swapElements(index1, index2);
    }, 100))

    setTimeout(() => {
      const end = new Date();
      var timeDiff = end - start;
      timeDiff /= 1000;
      console.log("Acabou", timeDiff);
      setElapsed(timeDiff.toFixed(2));
      setRunning(false);
      setSorted(true);
    }, interactions.length * 100);
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