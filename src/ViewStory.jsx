import { useParams,Link } from "react-router-dom"; 
import { useState, useEffect } from "react";  

function ViewStory() {

    const { id } = useParams();
    const [story,setStory]=useState(null);

    useEffect(() => {
        fetch('/db/db.json')
            .then(response => response.json())
            .then(data => setStory(data.story.find(story => story.id === id)))
            .catch(error => console.error('Error fetching stories:', error));
    }, []);

    return (
        <div className="d-flex justify-content-center align-items-center">
            {story?<div>
                <Link to="/"><i class="bi bi-arrow-left-circle-fill"></i></Link>
                <img className="vh-100" src={story.image} alt="" />
                <Link to="/"><i class="bi bi-arrow-right-circle-fill"></i></Link>
            </div>:<div>Loading...</div>}
        </div>
    );
}

export default ViewStory;