import React from 'react';
import { Link } from 'react-router-dom';
import { unsplash} from 'unsplash-js';

const PostCard = ({ post }) => {
  const imageUrl = post.image_url || 'https://picsum.photos/seed/picsum/400/300'; // use a random photo if image_url is not provided
  const authorName = post.author ? post.author.username : 'Unknown';
  const date = new Date(post.created_at).toLocaleDateString();

  return (
    <div className="card mb-3">
      <div className="card-img-top" style={{ backgroundImage: `url(${imageUrl})`, height: '200px', backgroundSize: 'cover' }}></div>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body.slice(0, 100)}...</p>
        <p className="card-text">
          <small className="text-muted">By {authorName} on {date}</small>
        </p>
        <Link to={`/posts/${post.id}`} className="btn btn-primary">Read More</Link>
      </div>
    </div>
  );
};

export default PostCard;
