import "./ImagePrompt.css";

export default function ImagePrompt({ prompt }) {
  return (
    <div className="prompt">
      <img
        className="prompt__image"
        src={`https://localstorage.tools/${prompt}`}
        alt="An alien"
      />
    </div>
  );
}
