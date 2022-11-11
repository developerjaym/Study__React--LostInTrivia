import "./OrderedChoice.css";
import { useEffect, useState } from "react";

export default function OrderedChoice({ question, onAnswered }) {
  let dragged = null;
  const [orderedList, setOrderedList] = useState([]);
  useEffect(() => {
    setOrderedList([...question.options].sort());
  }, [question]);
  const onSubmitWrapper = (e) => {
    e.preventDefault();
    const answer = orderedList;

    onAnswered({
      userAnswer: answer.join(" "),
      result:
        answer.join(" ") === question.displayAnswer ||
        question.acceptableAnswers.includes(answer.join(" ")),
    });
  };

  const onDragStart = (option) => (e) => {
    // setDragged(option);
    dragged = option;
  };
  const onDragOver = (option) => {
    return (e) => {
      e.preventDefault();
    };
  };

  const onDrop = (option) => (e) => {
    // dragged is being dropped on option
    let workingList = [...orderedList];
    let from = workingList.indexOf(dragged);
    let to = workingList.indexOf(option);
    if (from === to) {
      // do nothing
      //   setDragged(null);
      let dragged = null;
    } else if (from < to) {
      // moving item down on the screen (to a higher index)
      const aboveTheFrom = workingList.slice(0, from);
      const aboveTheTo = workingList.slice(from + 1, to + 1);
      const belowTheTo = workingList.slice(to + 1);
      workingList = aboveTheFrom
        .concat(...aboveTheTo)
        .concat(dragged)
        .concat(...belowTheTo);
      setOrderedList(workingList);
    } else {
      // moving item up on the screen (to a lower index)
      const aboveTheTo = workingList.slice(0, to);
      const removed = workingList.splice(to);
      removed.splice(removed.indexOf(dragged), 1);
      workingList = aboveTheTo.concat(dragged).concat(...removed);
      setOrderedList(workingList);
    }
  };
  const options = orderedList.map((option) => (
    <div
      key={option}
      draggable="true"
      onDragOver={onDragOver(option)}
      onDrop={onDrop(option)}
      onDragStart={onDragStart(option)}
      className="orderable"
    >
      {option}
    </div>
  ));

  return (
    <div className="input-form input-form--orderable">
      {options}
      <button className="button" onClick={onSubmitWrapper}>
        Submit
      </button>
    </div>
  );
}
