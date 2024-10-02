import React, { useState } from 'react';
import Story from './components/Story';  
import news_feed from './sample_news_stories.json';  

function App() {

  const [stories, setStories] = useState(news_feed.results);

  const removeStory = (index) => {
    setStories(stories.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <h1>Random News Feed</h1>
      {stories.length === 0 ? (
        <p>No stories available</p>
      ) : (
        stories.map((story, index) => (
          <Story
            key={index}
            story={story}
            onRemove={() => removeStory(index)}  
          />
        ))
      )}
    </div>
  );
}

export default App;
