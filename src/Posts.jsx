import { useState, useEffect } from "react";

function Posts(){

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('/db/db.json')
            .then(response => response.json())
            .then(data => setPosts(data.posts))
            .catch(error=>console.error('Error fetching posts:', error)
            );
    },[]);

    return (
        <div className="d-flex justify-content-center align-items-center flex-column">
            {posts.length > 0 ? posts.map((post,index)=>{
                return (
                <div className="my-3" key={index}>
                    <div className="d-flex align-items-center">
                        <img className="dp rounded-circle" src={post.user.profilePic} alt="profilepic"/>
                        <h5>{post.user.username}</h5>
                    </div>
                    <div>
                        <img className="image" src={post.image} alt="post"/>
                        <div>
                            <i className="bi bi-heart"></i>
                            <i className="bi bi-chat"></i>
                            <i className="bi bi-send"></i>
                        </div>
                        <div>
                            <b>{post.likes} Likes</b>
                        </div>
                        <p>{post.caption}</p>
                    </div>
                    
                </div>);
            }):
            <div>Loading...</div>}
            
        </div>
    );

    
}

export default Posts;