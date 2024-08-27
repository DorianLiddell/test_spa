import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toggleLike, removeCard } from '../features/cardSlise';
import { Post } from '../types/Post';

interface CardComponentProps extends Post { }

const CardComponent: React.FC<CardComponentProps> = ({ id, title, body, liked }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLikeClick = (e: React.MouseEvent) => {
        e.stopPropagation(); 
        dispatch(toggleLike(id));
    };

    const handleRemoveClick = (e: React.MouseEvent) => {
        e.stopPropagation(); 
        dispatch(removeCard(id));
    };

    const handleCardClick = () => {
        navigate(`/card/${id}`);
    };

    const likeButtonStyle = {
        color: liked ? 'red' : 'black', 
    };

    return (
        <div
            onClick={handleCardClick}
            style={{
                border: '1px solid black',
                padding: '10px',
                margin: '10px',
                width: 'calc(50% - 40px)',
                boxSizing: 'border-box',
            }}
        >
            <h3>{title}</h3>
            <p>{body.substring(0, 100)}...</p>
            <button onClick={handleLikeClick} style={likeButtonStyle}>
                {liked ? 'Лайк' : 'Лайк'}
            </button>
            <button onClick={handleRemoveClick}>Удалить</button>
        </div>
    );
};

export default CardComponent;


