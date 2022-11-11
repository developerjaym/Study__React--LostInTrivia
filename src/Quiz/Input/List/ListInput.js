import { useEffect, useState } from "react";
import "./ListInput.css";

export default function ListInput({ question, onAnswered }) {

    const [userAnswers, setUserAnswers] = useState([]);
    const answers = question.displayAnswer.split(",").map(a => a.toUpperCase().trim());
    useEffect(() => {
        setUserAnswers([])
    }, [question]);
    const onSubmitWrapper = (e) => {
      e.preventDefault();
      onAnswered({
        userAnswer: userAnswers.join(", "),
        result:
          answers.length === userAnswers.length
            
      });
      e.target.reset();
    };

    
    const slots = answers.map(answer => userAnswers.includes(answer) ? (<div className="list__answer" key={answer}> {answer}</div>) : (<div key={answer} className="list__answer list__answer--empty"></div>));
    const onChange = e => {
        const answer = e.target.value.trim().toUpperCase();
        if(answers.includes(answer)) {
            setUserAnswers([...new Set(userAnswers.concat(answer))])
            e.target.value = "";
        }
    }

    return (
      <form className="input-form input-form--list-input" onSubmit={onSubmitWrapper}>
        <input type="text" name="name" onChange={onChange}/>
        {slots}
        <button className="button" type="submit">Submit</button>
      </form>
    );
  }