import React, { useEffect } from 'react';
import Reveal from 'reveal.js';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import revealOptions from './revealOptions';
import '../../notes';
import 'reveal.js/css/reveal.css';

const Deck = ({ options, children }) => {
  useEffect(() => {
    Reveal.initialize({ ...revealOptions, ...options });
  });
  return (
    <div className="reveal">
      <div className="slides">{children}</div>
      <div
        style={{
          position: 'fixed',
          left: '50%',
          bottom: '-40px',
          transform: ' translate(-50%, -50%)',
          margin: '0 auto',
        }}
      >
        <Author>2022 台大語言所領域標竿微型工作坊</Author>
      </div>
    </div>
  );
};

const Author = styled.h6``;

Deck.propTypes = {
  children: PropTypes.node,
  options: PropTypes.string,
};

export default Deck;
