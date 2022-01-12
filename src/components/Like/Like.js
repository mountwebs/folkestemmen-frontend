import React, { useState, useContext, useEffect, useCallback } from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCircle } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';

import UserContext from '../../UserContext';

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: 'DM Sans', sans-serif;
  color: ${({ theme }) => theme.colors.text.primary};
  color: ${({ theme, liked }) => (liked ? '#F34C90' : theme.colors.text.muted)};
  transform: translateY(5%);
  font-size: 1.4rem;
  &:hover {
    opacity: ${({ liked }) => (liked ? '100%' : '30%')};
    color: #f34c90;
  }

  .fa-circle {
    color: white;
  }

  &:hover .fa-circle {
    color: #f5e4eb;
  }

  &:hover .fa-heart {
    color: #f34c90;
  }
`;

const StyledSmall = styled.small`
  transform: translateY(6%);
  font-size: 1.1rem;
  margin-left: 6px;
  user-select: none;
`;

const Like = ({ answerData, updateAnswer }) => {
  const [liked, setLiked] = useState(false);
  const [numOfLikes, setNumOfLikes] = useState(answerData.numOfLikes);

  useEffect(() => {
    const likedPosts = JSON.parse(localStorage.getItem('likedPosts')) || [];
    if (likedPosts.includes(answerData._id)) {
      setLiked(true);
    } else {
      setLiked(false);
    }
    setNumOfLikes(answerData.numOfLikes);
  }, [answerData]);

  const handleClick = () => {
    const newAnswerData = JSON.parse(JSON.stringify(answerData));
    const likedPosts = localStorage.getItem('likedPosts')
      ? JSON.parse(localStorage.getItem('likedPosts'))
      : [];
    if (likedPosts.includes(answerData._id)) {
      likedPosts.splice(likedPosts.indexOf(answerData._id), 1);
      newAnswerData.numOfLikes = newAnswerData.numOfLikes - 1;
      setLiked(false);
    } else {
      likedPosts.push(answerData._id);
      newAnswerData.numOfLikes = newAnswerData.numOfLikes + 1;
      setLiked(true);
    }
    console.log(newAnswerData.numOfLikes);
    setNumOfLikes(newAnswerData.numOfLikes);
    localStorage.setItem('likedPosts', JSON.stringify(likedPosts));

    updateAnswer(answerData._id, newAnswerData);
  };

  return (
    <StyledContainer liked={liked} onClick={handleClick}>
      <span className="fa-layers fa-fw">
        <FontAwesomeIcon icon={faCircle} transform={'grow-12'} id="test" />
        {liked ? (
          <FontAwesomeIcon icon={faHeart} />
        ) : (
          <FontAwesomeIcon icon={farHeart} />
        )}
      </span>
      {numOfLikes > 0 && <StyledSmall>{numOfLikes}</StyledSmall>}
    </StyledContainer>
  );
};

export default Like;
