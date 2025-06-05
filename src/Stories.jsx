import { useState, useEffect } from "react";

function Stories() {

    const [stories, setStories] = useState([]);

    useEffect(() => {
        fetch('/db/db.json')
            .then(response => response.json())
            .then(data => setStories(data.story))
            .catch(error => console.error('Error fetching stories:', error));
    }, []);

    return (
        <div className="story d-flex ms-3 my-3">
            {stories.length > 0 ? stories.map((story, index) => {
                return (
                    <div className="mx-2" key={index}>
                        <div className="gradient-border">
                            <img className="story-dp rounded-circle" src={story.user.profilePic} alt="profilepic" />

                        </div>
                        <p className="text-truncate" style={{width:"50px"}}>{story.user.username}</p>
                    </div>
                );
            }):<div>Loading...</div>}
        </div>
    );
}

export default Stories;