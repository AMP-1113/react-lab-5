import { FormEvent, useState, useContext } from "react";
import { useHistory } from "react-router";
import { StoryContext } from "../context/story-context";
import { Story } from "../model/Story";

function CreateStoryRoute() {
    const [ author, setAuthor ] = useState(" ");
    const [ words, setWords ] = useState(null as any);
    const [ animal, setAnimal ] = useState("");
    const [ place, setPlace ] = useState("");
    const [ item, setItem ] = useState("");
    const [ name, setName ] = useState("");
    const { stories, addStory } = useContext(StoryContext);
    const history = useHistory();

    function handleSubmit(e: FormEvent) {
        e.preventDefault();

        setWords([animal, place, item, name]);
        setAuthor(author);

        const story: Story = {
            title: author,
            words: [animal, place, item, name]
        } 
        console.log(story);
        const storyNum = addStory(story);
        console.log(stories);
        
        history.push(`/stories/${storyNum}`);
        console.log(words);
    }

    return (
        <form className="CreateStoryRoute" onSubmit={(e) => {handleSubmit(e)}}>
            <label>
                Your Name: <input type="text" value={author} onChange={e => setAuthor(e.target.value)} />
            </label>
            <label>
                Animal: <input type="text" value={animal} onChange={e => setAnimal(e.target.value)} />
            </label>
            <label>
                Place: <input type="text" value={place} onChange={e => setPlace(e.target.value)}/>
            </label>
            <label>
                Item found in trash: <input type="text" value={item} onChange={e => setItem(e.target.value)}/>
            </label>
            <label>
                Name: <input type="text" value={name} onChange={e => setName(e.target.value)}/>
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}

export default CreateStoryRoute;