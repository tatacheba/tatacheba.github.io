import "./App.css";
import React from "react";
// import Button from './Button';
import PlaceholderPost from "./PlaceholderPost";
import Comment from "./Comment";
import Comment2 from "./Comment2";
import CommentHook from "./CommentHook";

function App() {
    return (
        <>
            <CommentHook />
            <PlaceholderPost />
            {/* <Comment/> */}
            {/* <Comment2 /> */}
        </>
    );
}

export default App;
