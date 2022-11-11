import "./AudioPrompt.css";

export default function AudioPrompt({prompt}) {
    return (<div className="prompt">
        <audio src={`https://localstorage.tools/${prompt}.mp3`} controls/>
    </div>)
}