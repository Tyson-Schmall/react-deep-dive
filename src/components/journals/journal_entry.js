import React from "react";

// Functional component - Functional components do not maintain or contain state.
export const JournalEntry = props => {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    );
};
