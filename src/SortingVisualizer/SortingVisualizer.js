import React, { Component } from "react";
import "./SortingVisualizer.css";
import "../SortingAlgorithms/doMergeSort";
import doMergeSort from "../SortingAlgorithms/doMergeSort";
import doBubbleSort from "../SortingAlgorithms/doBubbleSort";
import doQuickSort from "../SortingAlgorithms/doQuickSort";
import doInsertionSort from "../SortingAlgorithms/doInsertionSort";
import doSelectionSort from "../SortingAlgorithms/doSelectionSort";
const primary = "turquoise";
const secondary = "red";
class SortingVisualizer extends Component {
  constructor(props) {
    super(props);
    this.algorithm = null;
    this.state = {
      array: [],
    };
  }
  componentDidMount() {
    this.generateArray();
  }
  generateArray() {
    const array = [];
    for (let i = 0; i < 350; i++) array.push(this.generateRandom(10, 600));
    this.setState({ array });
  }

  generateRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  mergeSort() {
    const animations = doMergeSort(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      let bar = document.getElementsByClassName("bar");
      const change = i % 3 !== 2;
      if (change) {
        const [first, second] = animations[i];
        const firstStyle = bar[first].style;
        const secondStyle = bar[second].style;
        const color = i % 3 === 0 ? secondary : primary;

        setTimeout(() => {
          firstStyle.backgroundColor = color;
          secondStyle.backgroundColor = color;
        }, i * 2);
      } else {
        setTimeout(() => {
          console.log(2);
          const [idx, newValue] = animations[i];
          let barIdx = bar[idx].style;
          barIdx.height = `${newValue}px`;
        }, i * 2);
      }
    }
  }
  quickSort() {
    const animations = doQuickSort(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const change = i % 4 === 0 || i % 4 === 1 ? true : false;
      let bar = document.getElementsByClassName("bar");
      if (change) {
        const color = i % 4 === 0 ? secondary : primary;
        const [first, second] = animations[i];
        if (first === -1) continue;
        const firstStyle = bar[first].style;
        const secondStyle = bar[second].style;
        setTimeout(() => {
          firstStyle.backgroundColor = color;
          secondStyle.backgroundColor = color;
        }, i * 2);
      } else {
        const [idx, newValue] = animations[i];
        if (idx === -1) continue;
        const barIdx = bar[idx].style;
        setTimeout(() => {
          barIdx.height = `${newValue}px`;
        }, i * 2);
      }
    }
  }
  bubbleSort() {
    const animations = doBubbleSort(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      let bar = document.getElementsByClassName("bar");
      const [first, second, swap] = animations[i];
      const firstStyle = bar[first].style;
      const secondStyle = bar[second].style;
      const color = i % 2 === 0 ? secondary : primary;
      setTimeout(() => {
        firstStyle.backgroundColor = color;
        secondStyle.backgroundColor = color;
      }, i * 2);
      if (i % 2 === 0 && swap) {
        setTimeout(() => {
          [firstStyle.height, secondStyle.height] = [
            secondStyle.height,
            firstStyle.height,
          ];
        }, i * 2);
      }
    }
  }
  insertionSort() {
    const animations = doInsertionSort(this.state.array);
    let c = 0;
    for (let i = 0; i < animations.length; i++) {
      let bar = document.getElementsByClassName("bar");
      if (animations[i].length === 2) {
        c += 1;
        const [first, second] = animations[i];
        const firstStyle = bar[first].style;
        const secondStyle = bar[second].style;
        const color = c % 2 !== 0 ? secondary : primary;
        setTimeout(() => {
          firstStyle.backgroundColor = color;
          secondStyle.backgroundColor = color;
        }, i * 2);
      } else {
        const [idx, newValue, swap] = animations[i];
        const barIdx = bar[idx].style;
        setTimeout(() => {
          barIdx.height = `${newValue}px`;
        }, i * 2);
      }
    }
  }
  selectionSort() {
    const animations = doSelectionSort(this.state.array);
    let c = 0;
    for (let i = 0; i < animations.length; i++) {
      let bar = document.getElementsByClassName("bar");
      if (animations[i].length === 2) {
        c += 1;
        const [first, second] = animations[i];
        const firstStyle = bar[first].style;
        const secondStyle = bar[second].style;
        const color = c % 2 !== 0 ? secondary : primary;
        setTimeout(() => {
          firstStyle.backgroundColor = color;
          secondStyle.backgroundColor = color;
        }, i * 0.8);
      } else {
        const [idx, newValue, swap] = animations[i];
        const barIdx = bar[idx].style;
        setTimeout(() => {
          barIdx.height = `${newValue}px`;
        }, i * 0.8);
      }
    }
  }
  handleClick() {
    if (this.algorithm === "mergesort") this.mergeSort();
    else if (this.algorithm === "quicksort") this.quickSort();
    else if (this.algorithm === "bubblesort") this.bubbleSort();
    else if (this.algorithm === "insertionsort") this.insertionSort();
    else if (this.algorithm === "selectionsort") this.selectionSort();
  }
  render() {
    const { array } = this.state;
    const dispArray = array.map((value, idx) => {
      return (
        <div
          className="bar"
          key={idx}
          style={{
            backgroundColor: "turquoise",
            height: `${value}px`,
          }}
        ></div>
      );
    });
    return (
      <div className="Main">
        <div className="toolbar">
          <div onClick={() => this.generateArray()} className="generate">
            Generate Array
          </div>
          <div className="separator"></div>
          <div
            onClick={() => (this.algorithm = "mergesort")}
            className="algorithm"
          >
            Merge Sort
          </div>
          <div className="separator"></div>
          <div
            onClick={() => (this.algorithm = "quicksort")}
            className="algorithm"
          >
            QuickSort
          </div>
          <div className="separator"></div>
          <div
            onClick={() => (this.algorithm = "bubblesort")}
            className="algorithm"
          >
            Bubble Sort
          </div>
          <div className="separator"></div>
          <div
            onClick={() => (this.algorithm = "insertionsort")}
            className="algorithm"
          >
            Insertion Sort
          </div>
          <div className="separator"></div>
          <div
            onClick={() => (this.algorithm = "selectionsort")}
            className="algorithm"
          >
            Selection Sort
          </div>
          <div className="separator"></div>
          <div className="sort" onClick={() => this.handleClick()}>
            Sort
          </div>
        </div>

        <div className="container">{dispArray}</div>
      </div>
    );
  }
}

export default SortingVisualizer;
