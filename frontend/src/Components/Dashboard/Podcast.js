import React from 'react';

const Podcast = (props) => {

    return (
        <div>
            <h1>{props.podcast.title}</h1>
        </div>
    );
};

export default Podcast;