import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Recipes = ({ titre, image, index, query }) => {
  return (
    <Link to={`/details/${index} ${query}`}>
      <MainDiv>
        <h1>{titre}</h1>
        <ImageStyle src={image} />
      </MainDiv>
    </Link>
  );
};

const ImageStyle = styled.img`
  border-bottom-left-radius: 15%;
  border-bottom-right-radius: 15%;
`;

const MainDiv = styled.div`
  border-radius: 10px;
  box-shadow: 0px 5px 20px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  min-width: 40%;
`;

Recipes.propTypes = {
  titre: PropTypes.string,
  click: PropTypes.func,
  image: PropTypes.string,
  index: PropTypes.number,
  query: PropTypes.string
};

export default Recipes;
