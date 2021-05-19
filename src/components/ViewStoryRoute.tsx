import React, { useContext } from "react";
import { Link, Redirect, useParams } from "react-router-dom";
import { StoryContext } from "../context/story-context";
import StoryViewer from "./StoryViewer";


interface RouteParams {
    num: string;
}

function ViewStoryRoute() {
    const storyIndex = parseInt(useParams<RouteParams>().num);
    const { stories } = useContext(StoryContext);
    const story = stories[storyIndex];
    const prevStoryIndex = storyIndex -1;
    const nextStoryIndex = storyIndex +1;
    if (!story) {
        return <Redirect to="/stories" />
    }

    return (
        <div className="ViewStoryRoute">
         {/* write story here */}
            <StoryViewer story={story} />
            <p>
                {prevStoryIndex >= 0 && (
                    <Link to={`/stories/${prevStoryIndex}`}>Previous Story</Link>
                )}
                {nextStoryIndex >= 0 && (
                    <Link to={`/stories/${nextStoryIndex}`}>Next Story</Link>
                )}
            </p>
        </div>
    );
}

export default ViewStoryRoute;