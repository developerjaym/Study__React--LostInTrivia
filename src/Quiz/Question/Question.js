import FreeForm from "../Input/FreeForm/FreeForm";
import ListInput from "../Input/List/ListInput";
import MultipleChoice from "../Input/MultipleChoice/MultipleChoice";
import OrderedChoice from "../Input/OrderedChoice/OrderedChoice";
import Price from "../Input/Price/Price";
import AudioPrompt from "../Prompt/Audio/AudioPrompt";
import ImagePrompt from "../Prompt/Image/ImagePrompt";
import TextPrompt from "../Prompt/Text/TextPrompt";
import "./Question.css";

export default function Question({ question, onAnswered }) {
  let prompt;
  switch (question.promptType) {
    case "AUDIO PROMPT TYPE":
      prompt = <AudioPrompt prompt={question.prompt} />;
      break;
    case "IMAGE PROMPT TYPE":
      prompt = <ImagePrompt prompt={question.prompt} />;
      break;
    case "TEXT PROMPT TYPE":
    default:
      prompt = <TextPrompt prompt={question.prompt} />;
      break;
  }
  let input;
  switch (question.answerType) {
    case "LIST ANSWER TYPE":
      input = <ListInput question={question} onAnswered={onAnswered} />;
      break;
    case "MULTIPLE CHOICE ANSWER TYPE":
      input = <MultipleChoice question={question} onAnswered={onAnswered} />;
      break;
    case "ORDERED CHOICE ANSWER TYPE":
      input = <OrderedChoice question={question} onAnswered={onAnswered} />;
      break;
    case "PRICE ANSWER TYPE":
      input = <Price question={question} onAnswered={onAnswered} />;
      break;
    default:
      input = <FreeForm question={question} onAnswered={onAnswered} />;
      break;
  }

  return (
    <div className="question">
      {prompt}
      {input}
    </div>
  );
}
