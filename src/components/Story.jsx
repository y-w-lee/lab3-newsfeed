import React from 'react';

const Story = ({ story, onRemove }) => {
  const imageUrl = story.image_url ? story.image_url : 'https://placehold.co/600x400';
  const author = story.creator ? story.creator.join(', ') : 'Unknown Author';

  return (
    <div style={styles.storyCard}>
      <div style={styles.header}>
        <img src={imageUrl} alt={story.title} style={styles.image} />
        <h2 style={styles.title}>
          <a href={story.link} target="_blank" rel="noopener noreferrer" style={styles.titleLink}>
            {story.title}
          </a>
        </h2>
      </div>
      <p style={styles.author}><strong>By: </strong>{author}</p>
      <p style={styles.description}>{story.description}</p>
      <button onClick={onRemove} style={styles.removeButton}>X</button>
    </div>
  );
};

// Styling
const styles = {
  storyCard: {
    display: 'flex',
    flexDirection: 'column', 
    border: '1px solid #ddd',
    borderRadius: '10px',
    margin: '20px 0',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    position: 'relative',
  },
  header: {
    display: 'flex', 
    alignItems: 'flex-start', 
    marginBottom: '10px', 
  },
  image: {
    flex: '1',
    maxWidth: '250px', 
    height: '150px',
    borderRadius: '10px',
    objectFit: 'cover', 
    marginRight: '20px', 
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
  },
  titleLink: {
    fontSize: '1em',
    color: 'blue',
    margin: '0 0 10px 0',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
//   author: {
//     marginLeft: '250px'
//   },
description: {
    marginBottom: '20px',
    display: '-webkit-box',              
    WebkitBoxOrient: 'vertical',          
    overflow: 'hidden',                  
    WebkitLineClamp: '4',                
  },

  removeButton: {
    position: 'absolute', 
    top: '0px',
    right: '0px',
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    padding: '2px',
    cursor: 'pointer',
    fontSize: '1.2em',
  },

};

export default Story;
