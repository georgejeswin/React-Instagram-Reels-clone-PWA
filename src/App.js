import React, { useState, useEffect } from "react";
import "./App.css";
import VideoCard from "./components/VideoCard";
import db from "./firebase";

function App() {
  const [reels, setReels] = useState([]);

  useEffect(() => {
    db.collection("reels").onSnapshot((snapshot) =>
      setReels(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  return (
    <div className="app">
      <div className="app__videos">
        {reels.map(({ url, likes, shares, channel, avatarSrc, song }) => (
          <VideoCard
            channel={channel}
            avatarSrc={avatarSrc}
            song={song}
            url={url}
            likes={likes}
            shares={shares}
          />
        ))}

        {/* <VideoCard />
        <VideoCard /> */}
      </div>
    </div>
  );
}

export default App;
