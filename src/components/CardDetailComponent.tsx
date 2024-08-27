import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { Post } from '../types/Post';

const CardDetailComponent: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const post = useSelector((state: RootState) =>
        state.cards.posts.find((post: Post) => post.id === Number(id))
    );

    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <button onClick={() => navigate('/')}>Назад</button>
        </div>
    );
};

export default CardDetailComponent;
