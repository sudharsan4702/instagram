function SideBar(){
    return (
        <div className="m-3 position-fixed side-bar">
            <div className="d-flex flex-column gap-3 side-hover">
                <img className="logo-text" src="./src/assets/instagram-text.png" alt="" />
                <div><i className="bi bi-house-door"></i>Home</div>
                <div><i className="bi bi-search"></i>Search</div>
                <div><i className="bi bi-compass"></i>Explore</div>
                <div><i className="bi bi-play-circle"></i>Reels</div>
                <div><i className="bi bi-chat-dots"></i>Messages</div>
                <div><i className="bi bi-heart"></i>Notifications</div>
                <div><i className="bi bi-plus-square"></i>Create</div>
                <div><i className="bi bi-person-circle"></i>Profile</div>
            </div>
            <div className="d-flex flex-column gap-3 position-fixed bottom-0 mb-3">
                <div><i className="bi bi-threads"></i>Threads</div>
                <div><i className="bi bi-list"></i>More</div>
            </div>
        </div>
        
    );
}

export default SideBar;