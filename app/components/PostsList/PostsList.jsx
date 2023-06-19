import React from 'react';
import PostCard from './PostCard/PostCard';
import './PostsList.scss';

const PostsList = ({ posts }) => {
    console.log(posts);
    return (
        <div className='posts container'>
            {posts.map(({ id, acf, featured_media }) => (
                <PostCard key={id} data={acf} id={id} idImg={featured_media} />
            ))}
        </div>
    );
};

export default PostsList;
