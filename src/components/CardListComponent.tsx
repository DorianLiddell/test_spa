import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useGetPostsQuery } from '../services/posts';
import CardComponent from './CardComponent';
import { RootState } from '../app/store';
import { setPosts } from '../features/cardSlise';
import { Post } from '../types/Post';

const CardListComponent: React.FC = () => {
    const dispatch = useDispatch();
    const { data: postsData = [], isLoading } = useGetPostsQuery();
    const [showLiked, setShowLiked] = useState(false);

    useEffect(() => {
        if (postsData.length) {
            dispatch(setPosts(postsData));
        }
    }, [postsData, dispatch]);

    const posts: Post[] = useSelector((state: RootState) => state.cards.posts as Post[]);
    const likedPosts = posts.filter((post: Post) => post.liked);
    const filteredPosts = showLiked ? likedPosts : posts;

    return (
        <div>
            <button
                onClick={() => setShowLiked(!showLiked)}
                style={{
                    position: 'fixed',
                    top: '10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: 'blue',
                    color: 'white',
                    padding: '15px 30px',
                    fontSize: '18px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    zIndex: 1,
                }}
            >
                {showLiked ? 'Назад' : 'Показать Лайки'}
            </button>
            <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '60px' }}>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    filteredPosts.map((post: Post) => (
                        <CardComponent key={post.id} {...post} />
                    ))
                )}
            </div>
        </div>
    );
};

export default CardListComponent;







