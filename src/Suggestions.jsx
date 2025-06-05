import { useState, useEffect } from "react";

function Suggestions(){

    const [profile,setProfile]=useState(null);
    const [suggestion,setSuggestion]=useState([]);

    useEffect(() => {
        fetch('/db/db.json')
            .then(response => response.json())
            .then(data => setProfile(data.profile))
            .catch(error=>console.error('Error fetching posts:', error)
            );
    },[profile]);

    useEffect(() => {
        fetch('/db/db.json')
            .then(response => response.json())
            .then(data => setSuggestion(data.suggestions))
            .catch(error=>console.error('Error fetching posts:', error)
            );
    },[suggestion]);

    return (
        <div>
            <div className="suggestions w-75 m-4">
                {profile ?
                <div className="d-flex align-items-center my-2">
                    <img className="dp rounded-circle" src={profile.profilePic} alt="profilepic"/>
                    <h5>{profile.username}</h5>
                    <small className="ms-auto text-primary">Switch</small>
                </div>: 
                <div>Loading...</div>}

                <div className="d-flex">
                    <h6>Suggesed for you</h6>
                    <b className="ms-auto">See All</b>
                </div>

                {suggestion.length > 0 ? suggestion.map((user,index)=>{
                    return (
                        <div className="d-flex align-items-center my-2" key={index}>
                            <img className="dp rounded-circle me-2" src={user.profilePic} alt="profilepic"/>
                            <h5>{user.username}</h5>
                            <small className="text-primary ms-auto my-1">Follow</small>
                        </div>
                    );
                }):<div>Loading...</div>}
            </div>
        </div>
    );
}

export default Suggestions;