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
    for (let i = 0; i < 5; i++) {
      array.push(randomInt(1, 10));
    }
    setList(array);
  }

  function bubble() {
    const result = bubbleSort(list);
  }

  return (
    <div>
      <ul className="bar-graph">
        {
          list.map(item =>
            <>
              <li
                key={item}
                className="bar-item"
                style={{ height: `${item * 50}px` }}>
                {" "}
                {item}
              </li>
            </>)
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