import { ReactNode, useState } from "react";
import { Story } from "../model/Story";
import './StoryViewer.css'

interface Props {
    story: Story;
}

function StoryViewer({story}: Props) {
    const { words, title } = story;
    const [ template, setTemplate ] = useState("A");


let text: ReactNode;

return (

    <div className="StoryViewer">
        <h2> {title} </h2>
        <>
        <p>One time I took my <span>{words[0]}</span> to <span>{words[1]}</span> and it told me to never throw away <span>{words[2]}</span>.  
            I nodded and said, "Don't tell me what to do, <span>{words[3]}</span>!</p>
        </>
    </div>
)
}
export default StoryViewer;